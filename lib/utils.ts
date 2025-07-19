import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

export function getDifficultyColor(difficulty: 'easy' | 'medium' | 'hard'): string {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'hard':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
}

export function getDifficultyIcon(difficulty: 'easy' | 'medium' | 'hard'): string {
  switch (difficulty) {
    case 'easy':
      return '🟢';
    case 'medium':
      return '🟡';
    case 'hard':
      return '🔴';
    default:
      return '⚪';
  }
}

export function calculateScore(correctAnswers: number, totalQuestions: number): {
  percentage: number;
  grade: string;
  message: string;
} {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  let grade: string;
  let message: string;
  
  if (percentage >= 90) {
    grade = 'A+';
    message = 'Excellent! You have a deep understanding of Scripture.';
  } else if (percentage >= 80) {
    grade = 'A';
    message = 'Great job! Your biblical knowledge is impressive.';
  } else if (percentage >= 70) {
    grade = 'B';
    message = 'Good work! Keep studying to deepen your understanding.';
  } else if (percentage >= 60) {
    grade = 'C';
    message = 'Not bad! There\'s room for improvement in your Bible study.';
  } else if (percentage >= 50) {
    grade = 'D';
    message = 'Keep trying! Regular Bible study will help you improve.';
  } else {
    grade = 'F';
    message = 'Don\'t give up! Every expert was once a beginner.';
  }
  
  return { percentage, grade, message };
}

export function generateBreadcrumbs(path: string): Array<{ label: string; href: string }> {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];
  
  let currentPath = '';
  
  for (const segment of segments) {
    currentPath += `/${segment}`;
    
    // Convert segment to readable label
    let label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Special cases for common paths
    if (segment === 'quizzes') {
      label = 'Quizzes';
    } else if (segment === 'bible') {
      label = 'Bible';
    } else if (segment === 'old-testament') {
      label = 'Old Testament';
    } else if (segment === 'new-testament') {
      label = 'New Testament';
    }
    
    breadcrumbs.push({ label, href: currentPath });
  }
  
  return breadcrumbs;
}

export function generateMetaDescription(
  title: string,
  description?: string,
  difficulty?: 'easy' | 'medium' | 'hard',
  questionCount?: number
): string {
  let meta = description || title;
  
  if (questionCount) {
    meta += ` ${questionCount} questions to test your biblical knowledge.`;
  }
  
  if (difficulty) {
    meta += ` ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} level.`;
  }
  
  meta += ' Free Bible quiz - no login required.';
  
  return meta.length > 160 ? meta.substring(0, 157) + '...' : meta;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getTestamentIcon(testament: 'old' | 'new'): string {
  return testament === 'old' ? '📜' : '✝️';
}

export function formatChapterRange(start: number, end?: number): string {
  if (!end || start === end) {
    return `Chapter ${start}`;
  }
  return `Chapters ${start}-${end}`;
}

export function generateQuizUrl(book?: string, chapter?: number, topic?: string, difficulty?: string): string {
  let url = '/quizzes/';
  
  if (book && chapter) {
    url += `${book}-${chapter}`;
  } else if (book) {
    url += book;
  } else if (topic) {
    url += topic;
  }
  
  if (difficulty && difficulty !== 'medium') {
    url += `-${difficulty}`;
  }
  
  return url;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, array.length));
}
