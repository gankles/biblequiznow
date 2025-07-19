import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 border border-primary-200">
                <span className="mr-2">📖</span>
                Join 10,000+ Bible Enthusiasts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Challenge Yourself with{' '}
                <span className="gradient-text">Interactive Bible Quizzes</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Deepen your biblical knowledge with 20-25 question quizzes covering all 66 books. 
                Free access, instant scoring, and detailed explanations. Perfect for individuals, 
                church groups, and Bible study leaders.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">20-25 questions per quiz</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Instant scoring & feedback</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Free, no login required</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">All skill levels welcome</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quizzes/random" className="btn-primary text-center">
                Start Your First Quiz Now
              </Link>
              <Link href="/quizzes" className="btn-secondary text-center">
                Browse All Quizzes
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <span>⭐⭐⭐⭐⭐</span>
                <span>4.9/5 rating</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>300+ quizzes available</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>24/7 access worldwide</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/flux_0d435f55-6114-4399-9f8d-b38163a4a6fd_1752935232913.png"
                alt="Bible study and quiz illustration"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Quiz Stats Card */}
            <div className="absolute top-8 -left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-slide-up">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-bold">66</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Bible Books</p>
                  <p className="text-xs text-gray-500">Complete coverage</p>
                </div>
              </div>
            </div>
            
            {/* Success Rate Card */}
            <div className="absolute bottom-8 -right-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">85%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Avg. Score</p>
                  <p className="text-xs text-gray-500">User success rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
}
