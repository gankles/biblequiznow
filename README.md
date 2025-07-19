# 📖 BibleQuizNow - Interactive Bible Learning Platform

A comprehensive Bible quiz platform built with Next.js 14, featuring interactive quizzes covering all 66 books of the Bible. Perfect for individuals, church groups, Bible study leaders, and educators.

![BibleQuizNow](https://img.shields.io/badge/Next.js-14.2.23-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Functionality
- **Interactive Quiz System** - 20-25 questions per quiz with instant scoring
- **Comprehensive Coverage** - All 66 Bible books from Genesis to Revelation
- **Multiple Difficulty Levels** - Easy, Medium, and Hard quizzes for all skill levels
- **Instant Feedback** - Detailed explanations with Bible verse references
- **No Login Required** - Free access for everyone, worldwide

### 🎨 User Experience
- **Mobile-First Design** - Fully responsive across all devices
- **Beautiful UI** - Modern design with cohesive color palette
- **Smooth Animations** - Engaging hover effects and transitions
- **Intuitive Navigation** - Easy-to-use interface for all ages

### 📚 Content Organization
- **Quiz Categories** - Old Testament, New Testament, Characters, Themes
- **Book Pages** - Individual pages for each Bible book with summaries
- **Chapter Navigation** - Easy access to specific chapters
- **Related Quizzes** - Smart suggestions based on current content

### ⚡ Technical Excellence
- **Static Generation** - Optimized for SEO and performance
- **TypeScript** - Type-safe development
- **PWA Ready** - Installable as mobile app
- **SEO Optimized** - Proper metadata and structured data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quizzes-bible-time
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
quizzes-bible-time/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── bible/                    # Bible book pages
│   │   └── [book]/              # Dynamic book routes
│   ├── contact/                  # Contact page
│   ├── quizzes/                  # Quiz pages
│   │   ├── [slug]/              # Dynamic quiz routes
│   │   └── random/              # Random quiz redirect
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── contact/                 # Contact form components
│   ├── home/                    # Homepage sections
│   ├── layout/                  # Navigation and footer
│   ├── quiz/                    # Quiz interface components
│   └── ui/                      # Reusable UI components
├── lib/                         # Utility functions and data
│   ├── bible-data.ts           # Bible books and metadata
│   ├── quiz-data.ts            # Quiz questions and content
│   └── utils.ts                # Helper functions
└── public/                      # Static assets
    ├── images/                  # Bible-themed images
    └── manifest.json           # PWA manifest
```

## 🎮 Usage

### Taking a Quiz
1. Visit the homepage
2. Choose a category or specific quiz
3. Read the quiz introduction and "Did You Know?" fact
4. Answer 20-25 multiple choice questions
5. View your score and detailed explanations
6. Explore related quizzes

### Browsing Content
- **By Testament**: Old Testament vs New Testament
- **By Book**: Individual Bible books with chapter navigation
- **By Topic**: Characters, themes, and special categories
- **By Difficulty**: Easy, medium, or hard challenges

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript types
```

### Key Technologies

- **Framework**: Next.js 14.2.23 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Icons**: Heroicons and custom SVGs
- **Deployment**: Optimized for Vercel, Netlify, or any static host

## 📊 Content Management

### Adding New Quizzes
1. Update `lib/quiz-data.ts` with new quiz content
2. Add questions with explanations and verse references
3. Update `generateStaticParams` in relevant page files
4. Test the new quiz routes

### Adding Bible Books
1. Update `lib/bible-data.ts` with book metadata
2. Add book summary, themes, and difficulty level
3. Create any custom book-specific content
4. Update navigation and category pages

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with zero configuration

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `out/` directory (if using static export)
3. Configure your hosting platform for Next.js

### Environment Variables
No environment variables required for basic functionality. Add as needed for:
- Analytics tracking
- Contact form backend
- Database connections (future features)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure mobile responsiveness
- Add proper error handling
- Include JSDoc comments for complex functions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bible content and verse references
- Beautiful Bible-themed imagery
- Next.js and React communities
- Tailwind CSS for the design system
- All contributors and testers

## 📞 Support

- **Email**: support@biblequiznow.com
- **Website**: [BibleQuizNow.com](https://biblequiznow.com)
- **Issues**: GitHub Issues tab
- **Documentation**: This README and inline code comments

---

**Built with ❤️ for the global Christian community**
