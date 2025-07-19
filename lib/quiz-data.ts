import { Quiz, QuizQuestion } from './bible-data';

// Sample quiz questions for Genesis 1
const genesisChapter1Questions: QuizQuestion[] = [
  {
    id: 'gen1-q1',
    question: 'What did God create on the first day?',
    options: ['Light and darkness', 'Heaven and earth', 'Plants and trees', 'Sun and moon'],
    correctAnswer: 0,
    explanation: 'On the first day, God said "Let there be light," and He separated the light from the darkness.',
    verseReference: 'Genesis 1:3-5',
    difficulty: 'easy'
  },
  {
    id: 'gen1-q2',
    question: 'On which day did God create the sun, moon, and stars?',
    options: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    correctAnswer: 3,
    explanation: 'God created the sun, moon, and stars on the fourth day to give light and mark seasons.',
    verseReference: 'Genesis 1:14-19',
    difficulty: 'easy'
  },
  {
    id: 'gen1-q3',
    question: 'What did God create on the sixth day?',
    options: ['Fish and birds', 'Land animals and humans', 'Plants and trees', 'Heaven and earth'],
    correctAnswer: 1,
    explanation: 'On the sixth day, God created land animals and then created man in His own image.',
    verseReference: 'Genesis 1:24-31',
    difficulty: 'easy'
  },
  {
    id: 'gen1-q4',
    question: 'In whose image did God create mankind?',
    options: ['In the image of angels', 'In His own image', 'In the image of animals', 'In no particular image'],
    correctAnswer: 1,
    explanation: 'God created mankind in His own image, both male and female He created them.',
    verseReference: 'Genesis 1:27',
    difficulty: 'easy'
  },
  {
    id: 'gen1-q5',
    question: 'What did God do on the seventh day?',
    options: ['Created more animals', 'Rested from His work', 'Created the ocean', 'Made the first rainbow'],
    correctAnswer: 1,
    explanation: 'God rested on the seventh day from all His work and blessed and sanctified it.',
    verseReference: 'Genesis 2:2-3',
    difficulty: 'easy'
  }
];

// Sample quiz questions for Matthew (Jesus' teachings)
const matthewJesusTeachingsQuestions: QuizQuestion[] = [
  {
    id: 'matt-q1',
    question: 'According to the Beatitudes, who are "blessed"?',
    options: ['The rich in spirit', 'The poor in spirit', 'The proud in spirit', 'The wise in spirit'],
    correctAnswer: 1,
    explanation: 'Jesus said "Blessed are the poor in spirit, for theirs is the kingdom of heaven."',
    verseReference: 'Matthew 5:3',
    difficulty: 'medium'
  },
  {
    id: 'matt-q2',
    question: 'What prayer did Jesus teach His disciples?',
    options: ['The Apostles\' Creed', 'The Lord\'s Prayer', 'The Serenity Prayer', 'The Prayer of Jabez'],
    correctAnswer: 1,
    explanation: 'Jesus taught His disciples the Lord\'s Prayer, beginning with "Our Father in heaven."',
    verseReference: 'Matthew 6:9-13',
    difficulty: 'easy'
  },
  {
    id: 'matt-q3',
    question: 'What did Jesus say about worrying?',
    options: ['Worry shows wisdom', 'Worry is necessary', 'Do not worry about tomorrow', 'Worry helps us plan'],
    correctAnswer: 2,
    explanation: 'Jesus said "Do not worry about tomorrow, for tomorrow will worry about itself."',
    verseReference: 'Matthew 6:34',
    difficulty: 'medium'
  }
];

// Sample quiz questions for Bible Characters
const bibleCharactersQuestions: QuizQuestion[] = [
  {
    id: 'char-q1',
    question: 'Who was the first man created by God?',
    options: ['Noah', 'Abraham', 'Adam', 'Moses'],
    correctAnswer: 2,
    explanation: 'Adam was the first man created by God from the dust of the ground.',
    verseReference: 'Genesis 2:7',
    difficulty: 'easy'
  },
  {
    id: 'char-q2',
    question: 'Who led the Israelites out of Egypt?',
    options: ['Aaron', 'Joshua', 'Moses', 'David'],
    correctAnswer: 2,
    explanation: 'Moses was chosen by God to lead the Israelites out of slavery in Egypt.',
    verseReference: 'Exodus 3:10',
    difficulty: 'easy'
  },
  {
    id: 'char-q3',
    question: 'Who was known as "a man after God\'s own heart"?',
    options: ['Solomon', 'David', 'Samuel', 'Saul'],
    correctAnswer: 1,
    explanation: 'David was described as "a man after God\'s own heart" because of his devotion to God.',
    verseReference: '1 Samuel 13:14',
    difficulty: 'medium'
  }
];

export const SAMPLE_QUIZZES: Quiz[] = [
  {
    id: 'genesis-1-creation',
    title: 'Genesis 1: The Creation Story',
    slug: 'genesis-1-creation',
    description: 'Test your knowledge of the biblical account of creation in Genesis chapter 1.',
    book: 'genesis',
    chapter: 1,
    difficulty: 'easy',
    questions: genesisChapter1Questions,
    estimatedTime: 8,
    didYouKnow: 'The Hebrew word for "create" (bara) used in Genesis 1:1 is only used with God as the subject, indicating divine creation from nothing.',
    tags: ['creation', 'genesis', 'beginnings', 'old-testament']
  },
  {
    id: 'matthew-jesus-teachings',
    title: 'Jesus\' Teachings in Matthew',
    slug: 'matthew-jesus-teachings',
    description: 'Explore the profound teachings of Jesus as recorded in the Gospel of Matthew.',
    book: 'matthew',
    difficulty: 'medium',
    questions: matthewJesusTeachingsQuestions,
    estimatedTime: 6,
    didYouKnow: 'The Gospel of Matthew contains five major teaching sections, often called the "Five Discourses," which parallel the five books of Moses.',
    tags: ['jesus', 'teachings', 'matthew', 'gospel', 'new-testament']
  },
  {
    id: 'bible-characters-basics',
    title: 'Bible Characters: The Basics',
    slug: 'bible-characters-basics',
    description: 'Test your knowledge of key figures throughout biblical history.',
    topic: 'characters',
    difficulty: 'easy',
    questions: bibleCharactersQuestions,
    estimatedTime: 5,
    didYouKnow: 'The Bible mentions over 3,000 different people by name, from Adam to the apostles and beyond.',
    tags: ['characters', 'people', 'history', 'bible-basics']
  }
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return SAMPLE_QUIZZES.find(quiz => quiz.slug === slug);
}

export function getQuizzesByBook(bookSlug: string): Quiz[] {
  return SAMPLE_QUIZZES.filter(quiz => quiz.book === bookSlug);
}

export function getQuizzesByTopic(topic: string): Quiz[] {
  return SAMPLE_QUIZZES.filter(quiz => quiz.topic === topic);
}

export function getQuizzesByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Quiz[] {
  return SAMPLE_QUIZZES.filter(quiz => quiz.difficulty === difficulty);
}

export function getRelatedQuizzes(currentQuiz: Quiz, limit: number = 3): Quiz[] {
  const related = SAMPLE_QUIZZES.filter(quiz => {
    if (quiz.id === currentQuiz.id) return false;
    
    // Same book
    if (quiz.book === currentQuiz.book) return true;
    
    // Same topic
    if (quiz.topic === currentQuiz.topic) return true;
    
    // Same difficulty
    if (quiz.difficulty === currentQuiz.difficulty) return true;
    
    // Shared tags
    const sharedTags = quiz.tags.filter(tag => currentQuiz.tags.includes(tag));
    if (sharedTags.length > 0) return true;
    
    return false;
  });
  
  return related.slice(0, limit);
}
