import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import productLehenga from '@/assets/product-lehenga.jpg';
import productSherwani from '@/assets/product-sherwani.jpg';
import productSaree from '@/assets/product-saree.jpg';
import productJhumka from '@/assets/product-jhumka.jpg';

const trendingProducts = [
  {
    id: 1,
    image: productLehenga,
    title: "Royal Ruby Lehenga with Mirror Work",
    designer: "Jaipur Craft House",
    price: 18500,
    originalPrice: 22000,
    rating: 4.8,
    reviewCount: 34,
    badges: ["Selling Fast", "Festive Collection"],
    isCustomizable: true,
    deliveryEta: "Oct 15",
    location: "Jaipur"
  },
  {
    id: 2,
    image: productSherwani,
    title: "Sapphire Silk Sherwani with Gold Buttons",
    designer: "Delhi Couture",
    price: 12800,
    rating: 4.7,
    reviewCount: 28,
    badges: ["New Arrival"],
    isCustomizable: true,
    deliveryEta: "Oct 12",
    location: "Delhi"
  },
  {
    id: 3,
    image: productSaree,
    title: "Handwoven Banarasi Silk Saree",
    designer: "Varanasi Weavers",
    price: 15200,
    originalPrice: 18000,
    rating: 4.9,
    reviewCount: 56,
    badges: ["Bestseller", "Handloom"],
    deliveryEta: "Oct 10",
    location: "Varanasi"
  },
  {
    id: 4,
    image: productJhumka,
    title: "Kundan Jhumka with Pearl Drops",
    designer: "Heritage Jewels",
    price: 8900,
    rating: 4.6,
    reviewCount: 42,
    badges: ["Fresh Drop"],
    deliveryEta: "Oct 8",
    location: "Kolkata"
  }
];

export const TrendingSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Trending Now
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What's Popular This Week
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Discover the most loved pieces by our community of fashion enthusiasts
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              designer={product.designer}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              badges={product.badges}
              isCustomizable={product.isCustomizable}
              deliveryEta={product.deliveryEta}
              location={product.location}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button className="w-full max-w-sm">
            View All Trending Items
          </Button>
        </div>
      </div>
    </section>
  );
};