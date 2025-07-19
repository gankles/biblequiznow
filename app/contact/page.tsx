import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact BibleQuizNow - Get Help & Support',
  description: 'Contact BibleQuizNow for support, feedback, or questions about our Bible quizzes. We respond within 24 hours and are here to help with your biblical learning journey.',
  keywords: 'contact BibleQuizNow, Bible quiz support, customer service, feedback, help',
  openGraph: {
    title: 'Contact BibleQuizNow - Get Help & Support',
    description: 'Contact BibleQuizNow for support, feedback, or questions about our Bible quizzes. We respond within 24 hours.',
    url: '/contact',
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto container-padding py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or need support, 
            we're here to help with your biblical learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-100">
                <h2 className="text-2xl font-display font-semibold text-gray-900">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mt-1">
                  We typically respond within 24 hours
                </p>
              </div>
              
              <div className="p-8">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:support@biblequiznow.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                      support@biblequiznow.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Availability</p>
                    <p className="text-gray-600">24/7 quiz access worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Help
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Is login required?</h4>
                  <p className="text-gray-600 text-xs">No, all quizzes are free and no login is needed.</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">How long are the quizzes?</h4>
                  <p className="text-gray-600 text-xs">Typically 10-15 minutes with 20-25 questions.</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Can I review answers?</h4>
                  <p className="text-gray-600 text-xs">Yes, detailed explanations are shown after completion.</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Are quizzes mobile-friendly?</h4>
                  <p className="text-gray-600 text-xs">Yes, fully responsive design for all devices.</p>
                </div>
              </div>
            </div>

            {/* Support Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What can we help with?
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  <span>Technical support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  <span>Quiz content questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  <span>Feedback and suggestions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  <span>Partnership opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  <span>Educational use licensing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  <span>General questions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-display font-semibold text-primary-900 mb-4">
              We Value Your Feedback
            </h3>
            <p className="text-primary-800 mb-6 max-w-2xl mx-auto">
              Your input helps us improve BibleQuizNow for the entire community. Whether you've found 
              an error, have a suggestion for new content, or want to share how our quizzes have 
              helped your Bible study, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@biblequiznow.com?subject=Feedback" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Feedback
              </a>
              <a 
                href="mailto:support@biblequiznow.com?subject=Bug Report" 
                className="bg-white hover:bg-gray-50 text-primary-600 font-medium py-3 px-6 rounded-lg border border-primary-300 transition-colors duration-200"
              >
                Report an Issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
