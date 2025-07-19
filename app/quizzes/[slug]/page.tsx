import { notFound } from 'next/navigation';
import { getQuizBySlug, getRelatedQuizzes } from '@/lib/quiz-data';
import { QuizInterface } from '@/components/quiz/QuizInterface';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generateMetaDescription } from '@/lib/utils';
import { Metadata } from 'next';

interface QuizPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const quiz = getQuizBySlug(params.slug);
  
  if (!quiz) {
    return {
      title: 'Quiz Not Found',
    };
  }

  const description = generateMetaDescription(
    quiz.title,
    quiz.description,
    quiz.difficulty,
    quiz.questions.length
  );

  return {
    title: `${quiz.title} - BibleQuizNow`,
    description,
    keywords: `${quiz.tags.join(', ')}, Bible quiz, Scripture test, ${quiz.difficulty} level`,
    openGraph: {
      title: `${quiz.title} - BibleQuizNow`,
      description,
      type: 'article',
      url: `/quizzes/${quiz.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${quiz.title} - BibleQuizNow`,
      description,
    },
  };
}

export async function generateStaticParams() {
  // In a real app, this would fetch all quiz slugs from your data source
  return [
    { slug: 'genesis-1-creation' },
    { slug: 'matthew-jesus-teachings' },
    { slug: 'bible-characters-basics' },
  ];
}

export default function QuizPage({ params }: QuizPageProps) {
  const quiz = getQuizBySlug(params.slug);

  if (!quiz) {
    notFound();
  }

  const relatedQuizzes = getRelatedQuizzes(quiz);
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Quizzes', href: '/quizzes' },
    { label: quiz.title, href: `/quizzes/${quiz.slug}` },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto container-padding py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <QuizInterface 
          quiz={quiz} 
          relatedQuizzes={relatedQuizzes}
        />
      </div>
    </div>
  );
}
