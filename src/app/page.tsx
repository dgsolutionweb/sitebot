import HeroSection from '@/components/hero/HeroSection';
import HowItWorks from '@/components/features/HowItWorks';
import FeaturesSection from '@/components/features/FeaturesSection';
import PricingSection from '@/components/pricing/PricingSection';
import DemoSection from '@/components/demo/DemoSection';
import FaqSection from '@/components/faq/FaqSection';
import FooterSection from '@/components/footer/FooterSection';

export default function Home() {
  return (
    <main className="flex flex-col text-dark-bg">
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
