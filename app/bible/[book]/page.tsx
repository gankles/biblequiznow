import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getBibleBookBySlug, BIBLE_BOOKS } from '@/lib/bible-data';
import { getQuizzesByBook } from '@/lib/quiz-data';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getDifficultyColor, getDifficultyIcon, getTestamentIcon, formatTime } from '@/lib/utils';

interface BookPageProps {
  params: {
    book: string;
  };
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const book = getBibleBookBySlug(params.book);
  
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: `${book.name} Bible Quizzes - BibleQuizNow`,
    description: `Test your knowledge of ${book.name} with our interactive Bible quizzes. ${book.summary} Covering all ${book.chapters} chapters with detailed explanations.`,
    keywords: `${book.name}, Bible quiz, ${book.testament} Testament, ${book.keyThemes.join(', ')}, Scripture test`,
    openGraph: {
      title: `${book.name} Bible Quizzes - BibleQuizNow`,
      description: `Test your knowledge of ${book.name} with our interactive Bible quizzes. ${book.summary}`,
      url: `/bible/${book.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return BIBLE_BOOKS.map((book) => ({
    book: book.slug,
  }));
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBibleBookBySlug(params.book);

  if (!book) {
    notFound();
  }

  const quizzes = getQuizzesByBook(book.slug);
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Bible', href: '/bible' },
    { label: book.name, href: `/bible/${book.slug}` },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Book Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-white">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">{getTestamentIcon(book.testament)}</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                  {book.name}
                </h1>
                <p className="text-primary-100 text-lg capitalize">
                  {book.testament} Testament • {book.chapters} Chapters
                </p>
              </div>
            </div>
            
            <p className="text-xl text-primary-100 leading-relaxed max-w-4xl">
              {book.summary}
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Book Details */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                  About {book.name}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-medium text-gray-900">Chapters</span>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">{book.chapters}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-medium text-gray-900">Difficulty</span>
                    </div>
                    <span className={`difficulty-badge ${getDifficultyColor(book.difficulty)}`}>
                      <span className="mr-1">{getDifficultyIcon(book.difficulty)}</span>
                      {book.difficulty.charAt(0).toUpperCase() + book.difficulty.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Key Themes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Themes</h4>
                  <div className="flex flex-wrap gap-2">
                    {book.keyThemes.map((theme) => (
                      <span
                        key={theme}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-200"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    href={`/quizzes/${book.slug}`}
                    className="btn-primary w-full text-center"
                  >
                    Take Quiz Now
                  </Link>
                  <Link
                    href={`/bible/${book.testament}-testament`}
                    className="btn-secondary w-full text-center"
                  >
                    Browse {book.testament === 'old' ? 'Old' : 'New'} Testament
                  </Link>
                  <Link
                    href="/quizzes/random"
                    className="btn-outline w-full text-center"
                  >
                    Random Quiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Quizzes */}
        {quizzes.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-display font-semibold text-gray-900">
                Available Quizzes for {book.name}
              </h2>
              <p className="text-gray-600 mt-1">
                Test your knowledge with these {book.name}-focused quizzes
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quizzes.map((quiz) => (
                  <Link
                    key={quiz.id}
                    href={`/quizzes/${quiz.slug}`}
                    className="group quiz-card"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`difficulty-badge ${getDifficultyColor(quiz.difficulty)}`}>
                            <span className="mr-1">{getDifficultyIcon(quiz.difficulty)}</span>
                            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatTime(quiz.estimatedTime)}
                          </span>
                        </div>
                        <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                          {quiz.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {quiz.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{quiz.questions.length} questions</span>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                        <span>Start Quiz</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chapter Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-display font-semibold text-gray-900">
              Browse by Chapter
            </h2>
            <p className="text-gray-600 mt-1">
              Explore {book.name} chapter by chapter
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-2">
              {Array.from({ length: book.chapters }, (_, i) => i + 1).map((chapter) => (
                <Link
                  key={chapter}
                  href={`/bible/${book.slug}/${chapter}`}
                  className="aspect-square bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors duration-200"
                >
                  {chapter}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
