import Link from 'next/link';
import { SAMPLE_QUIZZES } from '@/lib/quiz-data';
import { getDifficultyColor, getDifficultyIcon, formatTime } from '@/lib/utils';

export function PopularQuizzes() {
  // In a real app, this would fetch the most popular quizzes
  const popularQuizzes = SAMPLE_QUIZZES;

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Most Popular Quizzes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with these fan-favorite quizzes that thousands of users have enjoyed. 
            Perfect for getting familiar with our format and testing your biblical knowledge.
          </p>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularQuizzes.map((quiz) => (
            <Link
              key={quiz.id}
              href={`/quizzes/${quiz.slug}`}
              className="group quiz-card"
            >
              {/* Quiz Header */}
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
                  <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                    {quiz.title}
                  </h3>
                </div>
              </div>

              {/* Quiz Description */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {quiz.description}
              </p>

              {/* Quiz Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{quiz.questions.length} questions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formatTime(quiz.estimatedTime)}</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.9</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {quiz.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
                {quiz.tags.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                    +{quiz.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                  <span>Start Quiz</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Popularity Indicator */}
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>Popular</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/quizzes" className="btn-secondary">
            View All Quizzes
          </Link>
        </div>
      </div>
    </section>
  );
}
