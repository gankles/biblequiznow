import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About BibleQuizNow - Interactive Bible Learning Platform',
  description: 'Learn about BibleQuizNow, our mission to make Bible study engaging and accessible through interactive quizzes covering all 66 books of Scripture.',
  keywords: 'about BibleQuizNow, Bible study platform, Christian education, Scripture learning, biblical knowledge',
  openGraph: {
    title: 'About BibleQuizNow - Interactive Bible Learning Platform',
    description: 'Learn about BibleQuizNow, our mission to make Bible study engaging and accessible through interactive quizzes.',
    url: '/about',
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto container-padding py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            About BibleQuizNow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making Bible study engaging, accessible, and meaningful for believers worldwide
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                At BibleQuizNow, we believe that engaging with Scripture should be both meaningful and enjoyable. 
                Our mission is to help individuals, families, church groups, and Bible study leaders deepen their 
                understanding of God's Word through interactive, well-crafted quizzes that make learning memorable.
              </p>
              <p className="mb-6">
                We've designed our platform to be accessible to everyone—from new believers taking their first 
                steps in faith to seasoned Bible scholars looking to test their knowledge. With no login required 
                and completely free access, we remove barriers that might prevent someone from engaging with Scripture.
              </p>
              <p>
                Every quiz is carefully crafted with accurate biblical content, detailed explanations, and proper 
                verse references to ensure that learning goes beyond just answering questions—it builds genuine 
                understanding and spiritual growth.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-lg">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                    <p className="text-gray-600 text-sm">
                      Quizzes covering all 66 books of the Bible, from Genesis to Revelation, 
                      with questions spanning different themes, characters, and difficulty levels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-lg">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Multiple Difficulty Levels</h3>
                    <p className="text-gray-600 text-sm">
                      Easy quizzes for beginners, medium for regular Bible readers, and hard 
                      challenges for those seeking to test their deep biblical knowledge.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-lg">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Feedback</h3>
                    <p className="text-gray-600 text-sm">
                      Immediate scoring with detailed explanations for each answer, helping 
                      you learn from both correct and incorrect responses.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-lg">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Free & Accessible</h3>
                    <p className="text-gray-600 text-sm">
                      No registration, no fees, no barriers. Available 24/7 from anywhere 
                      in the world with an internet connection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-lg">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Perfect for Groups</h3>
                    <p className="text-gray-600 text-sm">
                      Ideal for church groups, Bible studies, homeschool families, and 
                      anyone looking to make Scripture study more interactive.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-lg">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                    <p className="text-gray-600 text-sm">
                      Fully responsive design that works perfectly on phones, tablets, 
                      and desktop computers for learning on the go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Our Commitment to Accuracy
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                We take the responsibility of handling God's Word seriously. Every quiz question, 
                answer, and explanation is carefully researched and reviewed to ensure biblical accuracy. 
                Our content is based on widely accepted biblical scholarship and cross-referenced with 
                multiple reliable sources.
              </p>
              <p className="mb-6">
                We believe that learning about the Bible should strengthen faith, not create confusion. 
                That's why we focus on clear, well-established biblical truths and avoid controversial 
                interpretations that might divide rather than unite believers.
              </p>
              <p>
                If you ever notice an error or have a question about our content, we encourage you to 
                reach out to us. We're committed to continuous improvement and maintaining the highest 
                standards of biblical accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-primary-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Get in Touch
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Have questions, suggestions, or feedback? We'd love to hear from you. 
            Your input helps us create better resources for the global Christian community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/quizzes" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg border border-white/20 transition-colors duration-200">
              Start Learning
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-primary-500">
            <p className="text-primary-200 text-sm">
              Email us at: <a href="mailto:support@biblequiznow.com" className="text-white hover:text-secondary-300 transition-colors duration-200">support@biblequiznow.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
