import { HeroSection } from '@/components/home/HeroSection';
import { QuizCategories } from '@/components/home/QuizCategories';
import { PopularQuizzes } from '@/components/home/PopularQuizzes';
import { FeaturedBooks } from '@/components/home/FeaturedBooks';
import { Testimonials } from '@/components/home/Testimonials';
import { CallToAction } from '@/components/home/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuizCategories />
      <PopularQuizzes />
      <FeaturedBooks />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
