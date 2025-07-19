export interface BibleBook {
  id: string;
  name: string;
  slug: string;
  testament: 'old' | 'new';
  chapters: number;
  summary: string;
  keyThemes: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  order: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  verseReference: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Quiz {
  id: string;
  title: string;
  slug: string;
  description: string;
  book?: string;
  chapter?: number;
  topic?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: QuizQuestion[];
  estimatedTime: number;
  didYouKnow: string;
  tags: string[];
}

export interface QuizCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  quizzes: string[];
}

export const BIBLE_BOOKS: BibleBook[] = [
  // Old Testament
  {
    id: 'genesis',
    name: 'Genesis',
    slug: 'genesis',
    testament: 'old',
    chapters: 50,
    summary: 'The book of beginnings - creation, fall, flood, and the patriarchs Abraham, Isaac, Jacob, and Joseph.',
    keyThemes: ['Creation', 'Covenant', 'Promise', 'Faith', 'Family'],
    difficulty: 'easy',
    order: 1
  },
  {
    id: 'exodus',
    name: 'Exodus',
    slug: 'exodus',
    testament: 'old',
    chapters: 40,
    summary: 'The deliverance of Israel from Egypt, the giving of the Law at Mount Sinai, and the building of the Tabernacle.',
    keyThemes: ['Deliverance', 'Law', 'Covenant', 'Worship', 'Leadership'],
    difficulty: 'medium',
    order: 2
  },
  {
    id: 'leviticus',
    name: 'Leviticus',
    slug: 'leviticus',
    testament: 'old',
    chapters: 27,
    summary: 'Instructions for worship, sacrifices, and holy living for the priests and people of Israel.',
    keyThemes: ['Holiness', 'Sacrifice', 'Priesthood', 'Purity', 'Worship'],
    difficulty: 'hard',
    order: 3
  },
  {
    id: 'numbers',
    name: 'Numbers',
    slug: 'numbers',
    testament: 'old',
    chapters: 36,
    summary: 'The wilderness wanderings of Israel for 40 years and preparation to enter the Promised Land.',
    keyThemes: ['Wilderness', 'Faith', 'Rebellion', 'Leadership', 'Promise'],
    difficulty: 'medium',
    order: 4
  },
  {
    id: 'deuteronomy',
    name: 'Deuteronomy',
    slug: 'deuteronomy',
    testament: 'old',
    chapters: 34,
    summary: 'Moses\' final speeches to Israel, reviewing the Law and preparing them for life in the Promised Land.',
    keyThemes: ['Law', 'Covenant', 'Obedience', 'Love', 'Blessing'],
    difficulty: 'medium',
    order: 5
  },
  {
    id: 'joshua',
    name: 'Joshua',
    slug: 'joshua',
    testament: 'old',
    chapters: 24,
    summary: 'The conquest and settlement of the Promised Land under Joshua\'s leadership.',
    keyThemes: ['Conquest', 'Faith', 'Obedience', 'Promise', 'Leadership'],
    difficulty: 'easy',
    order: 6
  },
  {
    id: 'judges',
    name: 'Judges',
    slug: 'judges',
    testament: 'old',
    chapters: 21,
    summary: 'The cycle of sin, oppression, and deliverance during the period of the judges.',
    keyThemes: ['Sin', 'Deliverance', 'Leadership', 'Cycle', 'Faithfulness'],
    difficulty: 'medium',
    order: 7
  },
  {
    id: 'ruth',
    name: 'Ruth',
    slug: 'ruth',
    testament: 'old',
    chapters: 4,
    summary: 'A beautiful story of loyalty, love, and redemption in the life of Ruth and Naomi.',
    keyThemes: ['Loyalty', 'Love', 'Redemption', 'Faith', 'Family'],
    difficulty: 'easy',
    order: 8
  },
  {
    id: '1-samuel',
    name: '1 Samuel',
    slug: '1-samuel',
    testament: 'old',
    chapters: 31,
    summary: 'The transition from judges to kings, featuring Samuel, Saul, and the rise of David.',
    keyThemes: ['Leadership', 'Kingship', 'Faith', 'Obedience', 'Anointing'],
    difficulty: 'medium',
    order: 9
  },
  {
    id: '2-samuel',
    name: '2 Samuel',
    slug: '2-samuel',
    testament: 'old',
    chapters: 24,
    summary: 'David\'s reign as king of Israel, his victories, failures, and God\'s covenant with him.',
    keyThemes: ['Kingship', 'Covenant', 'Sin', 'Forgiveness', 'Leadership'],
    difficulty: 'medium',
    order: 10
  },
  // New Testament
  {
    id: 'matthew',
    name: 'Matthew',
    slug: 'matthew',
    testament: 'new',
    chapters: 28,
    summary: 'The Gospel presenting Jesus as the promised Messiah and King, with emphasis on His teachings.',
    keyThemes: ['Messiah', 'Kingdom', 'Teaching', 'Fulfillment', 'Discipleship'],
    difficulty: 'easy',
    order: 40
  },
  {
    id: 'mark',
    name: 'Mark',
    slug: 'mark',
    testament: 'new',
    chapters: 16,
    summary: 'The Gospel emphasizing Jesus as the suffering Servant, focusing on His actions and miracles.',
    keyThemes: ['Servant', 'Action', 'Miracles', 'Suffering', 'Faith'],
    difficulty: 'easy',
    order: 41
  },
  {
    id: 'luke',
    name: 'Luke',
    slug: 'luke',
    testament: 'new',
    chapters: 24,
    summary: 'The Gospel presenting Jesus as the perfect Son of Man, emphasizing His compassion for all people.',
    keyThemes: ['Compassion', 'Salvation', 'Prayer', 'Holy Spirit', 'Joy'],
    difficulty: 'easy',
    order: 42
  },
  {
    id: 'john',
    name: 'John',
    slug: 'john',
    testament: 'new',
    chapters: 21,
    summary: 'The Gospel presenting Jesus as the Son of God, focusing on His divine nature and eternal life.',
    keyThemes: ['Divinity', 'Eternal Life', 'Love', 'Light', 'Truth'],
    difficulty: 'medium',
    order: 43
  },
  {
    id: 'acts',
    name: 'Acts',
    slug: 'acts',
    testament: 'new',
    chapters: 28,
    summary: 'The history of the early church, the spread of the Gospel, and the ministry of the apostles.',
    keyThemes: ['Church', 'Mission', 'Holy Spirit', 'Evangelism', 'Growth'],
    difficulty: 'medium',
    order: 44
  },
  {
    id: 'romans',
    name: 'Romans',
    slug: 'romans',
    testament: 'new',
    chapters: 16,
    summary: 'Paul\'s systematic presentation of the Gospel, salvation by faith, and Christian living.',
    keyThemes: ['Salvation', 'Faith', 'Grace', 'Righteousness', 'Gospel'],
    difficulty: 'hard',
    order: 45
  },
  {
    id: 'revelation',
    name: 'Revelation',
    slug: 'revelation',
    testament: 'new',
    chapters: 22,
    summary: 'The prophetic vision of the end times, Christ\'s return, and the new heaven and earth.',
    keyThemes: ['Prophecy', 'Victory', 'Judgment', 'Hope', 'Worship'],
    difficulty: 'hard',
    order: 66
  }
];

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 'old-testament',
    name: 'Old Testament',
    slug: 'old-testament',
    description: 'Explore the foundational books of the Bible from Genesis to Malachi',
    icon: '📜',
    quizzes: []
  },
  {
    id: 'new-testament',
    name: 'New Testament',
    slug: 'new-testament',
    description: 'Discover the life of Jesus and the early church through the Gospels and Epistles',
    icon: '✝️',
    quizzes: []
  },
  {
    id: 'gospels',
    name: 'Gospels',
    slug: 'gospels',
    description: 'Focus on the life, teachings, and ministry of Jesus Christ',
    icon: '🕊️',
    quizzes: []
  },
  {
    id: 'characters',
    name: 'Bible Characters',
    slug: 'characters',
    description: 'Test your knowledge of key figures throughout biblical history',
    icon: '👥',
    quizzes: []
  },
  {
    id: 'themes',
    name: 'Biblical Themes',
    slug: 'themes',
    description: 'Explore major themes like faith, love, salvation, and prophecy',
    icon: '💡',
    quizzes: []
  },
  {
    id: 'psalms-proverbs',
    name: 'Psalms & Proverbs',
    slug: 'psalms-proverbs',
    description: 'Wisdom literature and songs of praise from the heart of Scripture',
    icon: '🎵',
    quizzes: []
  }
];

export function getBibleBookBySlug(slug: string): BibleBook | undefined {
  return BIBLE_BOOKS.find(book => book.slug === slug);
}

export function getBibleBooksByTestament(testament: 'old' | 'new'): BibleBook[] {
  return BIBLE_BOOKS.filter(book => book.testament === testament);
}

export function getCategoryBySlug(slug: string): QuizCategory | undefined {
  return QUIZ_CATEGORIES.find(category => category.slug === slug);
}
