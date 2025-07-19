import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BibleQuizNow - Interactive Bible Quizzes for All Levels",
  description: "Challenge yourself with 20-25 question Bible quizzes covering all 66 books. Free access, instant scoring, and detailed explanations. Perfect for individuals, church groups, and Bible study leaders.",
  keywords: "Bible quiz, Bible trivia, Scripture test, biblical knowledge, Christian education, Bible study, Old Testament, New Testament",
  authors: [{ name: "BibleQuizNow" }],
  creator: "BibleQuizNow",
  publisher: "BibleQuizNow",
  metadataBase: new URL('https://biblequiznow.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://biblequiznow.com',
    title: 'BibleQuizNow - Interactive Bible Quizzes for All Levels',
    description: 'Challenge yourself with 20-25 question Bible quizzes covering all 66 books. Free access, instant scoring, and detailed explanations.',
    siteName: 'BibleQuizNow',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BibleQuizNow - Interactive Bible Quizzes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BibleQuizNow - Interactive Bible Quizzes for All Levels',
    description: 'Challenge yourself with 20-25 question Bible quizzes covering all 66 books. Free access, instant scoring, and detailed explanations.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BibleQuizNow",
              "url": "https://biblequiznow.com",
              "description": "Interactive Bible quizzes for all levels covering all 66 books of the Bible",
              "publisher": {
                "@type": "Organization",
                "name": "BibleQuizNow",
                "email": "support@biblequiznow.com"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://biblequiznow.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
