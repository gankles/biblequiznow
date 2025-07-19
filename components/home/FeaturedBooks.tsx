'use client';

import Link from 'next/link';
import { BIBLE_BOOKS } from '@/lib/bible-data';
import { getTestamentIcon, getDifficultyColor, getDifficultyIcon } from '@/lib/utils';

export function FeaturedBooks() {
  // Featured books selection - mix of popular and representative books
  const featuredBookIds = ['genesis', 'exodus', 'matthew', 'john', 'romans', 'revelation'];
  const featuredBooks = featuredBookIds
    .map(id => BIBLE_BOOKS.find(book => book.id === id))
    .filter((book): book is NonNullable<typeof book> => Boolean(book));

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Bible Books
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore quizzes from the most beloved and foundational books of the Bible. 
            From Genesis to Revelation, test your knowledge of God's Word.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <Link
              key={book.id}
              href={`/bible/${book.slug}`}
              className="group quiz-card"
            >
              {/* Book Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                    <span className="text-2xl">{getTestamentIcon(book.testament)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {book.name}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {book.testament} Testament
                    </p>
                  </div>
                </div>
                
                <span className={`difficulty-badge ${getDifficultyColor(book.difficulty)}`}>
                  <span className="mr-1">{getDifficultyIcon(book.difficulty)}</span>
                  {book.difficulty}
                </span>
              </div>

              {/* Book Summary */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {book.summary}
              </p>

              {/* Book Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{book.chapters} chapters</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span>{book.keyThemes.length} themes</span>
                  </div>
                </div>
              </div>

              {/* Key Themes */}
              <div className="flex flex-wrap gap-2 mb-4">
                {book.keyThemes.slice(0, 3).map((theme) => (
                  <span
                    key={theme}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200"
                  >
                    {theme}
                  </span>
                ))}
                {book.keyThemes.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                    +{book.keyThemes.length - 3} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                  <span>Explore Book</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Quick Quiz Link */}
                <Link
                  href={`/quizzes/${book.slug}`}
                  className="text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Quick Quiz →
                </Link>
              </div>
            </Link>
          ))}
        </div>

        {/* Testament Navigation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/bible/old-testament"
            className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:border-amber-200 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-200">
                <span className="text-3xl">📜</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                  Old Testament
                </h3>
                <p className="text-amber-700">39 Books • Creation to Prophecy</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Explore the foundational books from Genesis through Malachi, covering creation, 
              the law, history, wisdom literature, and prophecy.
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
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                <span className="text-3xl">✝️</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                  New Testament
                </h3>
                <p className="text-blue-700">27 Books • Jesus to Revelation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Discover the life of Jesus, the early church, and the apostolic letters 
              from Matthew through Revelation.
            </p>
            <div className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors duration-200">
              <span>Explore New Testament</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
