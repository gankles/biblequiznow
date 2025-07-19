import Link from 'next/link';

const footerNavigation = {
  quizzes: [
    { name: 'Old Testament Quizzes', href: '/quizzes/old-testament' },
    { name: 'New Testament Quizzes', href: '/quizzes/new-testament' },
    { name: 'Gospel Quizzes', href: '/quizzes/gospels' },
    { name: 'Character Quizzes', href: '/quizzes/characters' },
    { name: 'Random Quiz', href: '/quizzes/random' },
  ],
  books: [
    { name: 'Genesis', href: '/bible/genesis' },
    { name: 'Psalms', href: '/bible/psalms' },
    { name: 'Proverbs', href: '/bible/proverbs' },
    { name: 'Matthew', href: '/bible/matthew' },
    { name: 'Romans', href: '/bible/romans' },
  ],
  resources: [
    { name: 'About Us', href: '/about' },
    { name: 'How to Study', href: '/resources/how-to-study' },
    { name: 'Bible Reading Plans', href: '/resources/reading-plans' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-display font-semibold text-xl text-gray-900">
                BibleQuizNow
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-sm">
              Interactive Bible quizzes for all levels. Deepen your biblical knowledge with 
              20-25 question quizzes covering all 66 books of the Bible. Free access, no login required.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:support@biblequiznow.com"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quiz Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Popular Quizzes
            </h3>
            <ul className="space-y-3">
              {footerNavigation.quizzes.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bible Books */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Bible Books
            </h3>
            <ul className="space-y-3">
              {footerNavigation.books.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} BibleQuizNow. All rights reserved.</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 text-center md:text-left">
            <p className="text-xs text-gray-500">
              Contact us: <a href="mailto:support@biblequiznow.com" className="text-primary-600 hover:text-primary-700">support@biblequiznow.com</a> | 
              Available 24/7 for quiz access worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
