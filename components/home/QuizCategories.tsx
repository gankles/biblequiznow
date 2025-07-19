import Link from 'next/link';
import { QUIZ_CATEGORIES } from '@/lib/bible-data';

export function QuizCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Explore Quiz Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of Bible quizzes organized by testament, 
            book, character, and theme. Find the perfect quiz for your knowledge level.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUIZ_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/quizzes/${category.slug}`}
              className="group quiz-card"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                {/* CTA */}
                <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                  <span>Explore Quizzes</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
              Quick Start Options
            </h3>
            <p className="text-gray-600">
              Jump right into a quiz or explore by difficulty level
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/quizzes/random"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎲</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Random Quiz</h4>
              <p className="text-sm text-gray-600">Surprise me!</p>
            </Link>
            
            <Link
              href="/quizzes?difficulty=easy"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🟢</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Easy Level</h4>
              <p className="text-sm text-gray-600">Perfect for beginners</p>
            </Link>
            
            <Link
              href="/quizzes?difficulty=medium"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🟡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Medium Level</h4>
              <p className="text-sm text-gray-600">Good challenge</p>
            </Link>
            
            <Link
              href="/quizzes?difficulty=hard"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔴</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Hard Level</h4>
              <p className="text-sm text-gray-600">For Bible scholars</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
