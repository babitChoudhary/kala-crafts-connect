import { Navigation } from '@/components/Navigation';
import { FestivalPromoBar } from '@/components/PromoBar';
import { HeroSection } from '@/components/HeroSection';
import { TrendingSection } from '@/components/TrendingSection';
import { CityHighlights } from '@/components/CityHighlights';
import { DesignerStories } from '@/components/DesignerStories';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Festival Promo Bar */}
      <FestivalPromoBar />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trending Products */}
      <TrendingSection />
      
      {/* City Highlights */}
      <CityHighlights />
      
      {/* Designer Stories */}
      <DesignerStories />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
