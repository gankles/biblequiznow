import { Metadata } from 'next';
import Link from 'next/link';
import { BIBLE_BOOKS, getBibleBooksByTestament } from '@/lib/bible-data';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getDifficultyColor, getDifficultyIcon, getTestamentIcon } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Bible Books & Quizzes - BibleQuizNow',
  description: 'Explore all 66 books of the Bible with interactive quizzes. From Genesis to Revelation, test your knowledge of Scripture with our comprehensive collection.',
  keywords: 'Bible books, Old Testament, New Testament, Scripture, Bible study, biblical knowledge',
  openGraph: {
    title: 'Bible Books & Quizzes - BibleQuizNow',
    description: 'Explore all 66 books of the Bible with interactive quizzes. From Genesis to Revelation, test your knowledge of Scripture.',
    url: '/bible',
  },
};

export default function BiblePage() {
  const oldTestamentBooks = getBibleBooksByTestament('old');
  const newTestamentBooks = getBibleBooksByTestament('new');
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Bible', href: '/bible' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Bible Books & Quizzes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all 66 books of the Bible with interactive quizzes. From Genesis to Revelation, 
            deepen your understanding of God's Word through engaging questions and detailed explanations.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">66</div>
            <div className="text-gray-600">Bible Books</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">39</div>
            <div className="text-gray-600">Old Testament</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">27</div>
            <div className="text-gray-600">New Testament</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">1,189</div>
            <div className="text-gray-600">Total Chapters</div>
          </div>
        </div>

        {/* Testament Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link
            href="/bible/old-testament"
            className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:border-amber-200 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-200">
                <span className="text-4xl">📜</span>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                  Old Testament
                </h2>
                <p className="text-amber-700">39 Books • Creation to Prophecy</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              From the creation account in Genesis through the prophetic books, explore the foundational 
              texts of faith, law, history, wisdom, and prophecy.
            </p>
            <div className="inline-flex items-center text-amber-700 font-medium group-hover:text-amber-800 transition-colors duration-200">
              <span>Explore Old Testament</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            href="/bible/new-testament"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                <span className="text-4xl">✝️</span>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                  New Testament
                </h2>
                <p className="text-blue-700">27 Books • Jesus to Revelation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Discover the life and teachings of Jesus Christ, the early church, and the apostolic 
              letters that form the foundation of Christian faith.
            </p>
            <div className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors duration-200">
              <span>Explore New Testament</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Old Testament Books */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-semibold text-gray-900">
              Old Testament Books
            </h2>
            <Link href="/bible/old-testament" className="btn-outline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oldTestamentBooks.slice(0, 6).map((book) => (
              <Link
                key={book.id}
                href={`/bible/${book.slug}`}
                className="group quiz-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-200">
                      <span className="text-2xl">{getTestamentIcon(book.testament)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {book.name}
                      </h3>
                      <p className="text-sm text-gray-500">{book.chapters} chapters</p>
                    </div>
                  </div>
                  
                  <span className={`difficulty-badge ${getDifficultyColor(book.difficulty)}`}>
                    <span className="mr-1">{getDifficultyIcon(book.difficulty)}</span>
                    {book.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {book.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {book.keyThemes.slice(0, 2).map((theme) => (
                      <span
                        key={theme}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* New Testament Books */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-semibold text-gray-900">
              New Testament Books
            </h2>
            <Link href="/bible/new-testament" className="btn-outline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newTestamentBooks.slice(0, 6).map((book) => (
              <Link
                key={book.id}
                href={`/bible/${book.slug}`}
                className="group quiz-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                      <span className="text-2xl">{getTestamentIcon(book.testament)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {book.name}
                      </h3>
                      <p className="text-sm text-gray-500">{book.chapters} chapters</p>
                    </div>
                  </div>
                  
                  <span className={`difficulty-badge ${getDifficultyColor(book.difficulty)}`}>
                    <span className="mr-1">{getDifficultyIcon(book.difficulty)}</span>
                    {book.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {book.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {book.keyThemes.slice(0, 2).map((theme) => (
                      <span
                        key={theme}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Ready to Test Your Biblical Knowledge?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Choose any book above to start exploring, or take a random quiz to challenge yourself 
            with questions from across the entire Bible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quizzes/random" className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Take Random Quiz
            </Link>
            <Link href="/quizzes" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg border border-white/20 transition-colors duration-200">
              Browse All Quizzes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
