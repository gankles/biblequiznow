import { redirect } from 'next/navigation';
import { SAMPLE_QUIZZES } from '@/lib/quiz-data';
import { getRandomItems } from '@/lib/utils';

export default function RandomQuizPage() {
  // Get a random quiz
  const randomQuiz = getRandomItems(SAMPLE_QUIZZES, 1)[0];
  
  if (randomQuiz) {
    redirect(`/quizzes/${randomQuiz.slug}`);
  }
  
  // Fallback if no quiz found
  redirect('/quizzes');
}
