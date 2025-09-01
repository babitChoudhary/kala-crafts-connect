import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-ethnic-wear.jpg';

const heroSlides = [
  {
    image: heroImage,
    title: "Threads of Heritage",
    subtitle: "Discover handcrafted ethnic wear by India's finest artisans",
    cta: "Start Custom Order",
    badge: "Festive Collection"
  },
  {
    image: heroImage,
    title: "Custom Sherwani in 10 Days",
    subtitle: "Quick-turn bespoke tailoring for your special moments",
    cta: "Design Your Sherwani",
    badge: "Express Service"
  },
  {
    image: heroImage,
    title: "Kundan Classics",
    subtitle: "Heirloom-grade jewelry handcrafted by master artisans",
    cta: "Explore Jewelry",
    badge: "New Arrivals"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [variantMode, setVariantMode] = useState<'ready' | 'custom'>('custom');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentHero.image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
        
        {/* Scalloped mask overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <Badge className="mb-4 bg-gold/90 text-charcoal hover:bg-gold">
              <Sparkles className="h-3 w-3 mr-1" />
              {currentHero.badge}
            </Badge>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {currentHero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {currentHero.subtitle}
            </p>

            {/* Variant Toggle */}
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
                <Button
                  variant={variantMode === 'ready' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setVariantMode('ready')}
                  className="rounded-full text-white hover:text-charcoal"
                >
                  Ready-Made
                </Button>
                <Button
                  variant={variantMode === 'custom' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setVariantMode('custom')}
                  className="rounded-full text-white hover:text-charcoal"
                >
                  Custom-Made
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg shadow-jewel">
                {currentHero.cta}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-3 text-lg"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};