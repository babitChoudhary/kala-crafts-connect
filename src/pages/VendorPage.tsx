import { useState } from 'react';
import { ArrowLeft, MapPin, Star, Award, MessageCircle, Heart, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import productLehenga from '@/assets/product-lehenga.jpg';
import productSherwani from '@/assets/product-sherwani.jpg';
import productSaree from '@/assets/product-saree.jpg';
import productJhumka from '@/assets/product-jhumka.jpg';

const vendorProducts = [
  {
    id: 1,
    image: productLehenga,
    title: "Royal Ruby Lehenga with Mirror Work",
    designer: "Jaipur Craft House",
    price: 18500,
    originalPrice: 22000,
    rating: 4.8,
    reviewCount: 34,
    badges: ["Bestseller"],
    isCustomizable: true,
    deliveryEta: "Oct 15",
    location: "Jaipur"
  },
  {
    id: 2,
    image: productSaree,
    title: "Handwoven Banarasi Silk Saree",
    designer: "Jaipur Craft House",
    price: 15200,
    originalPrice: 18000,
    rating: 4.9,
    reviewCount: 56,
    badges: ["Handloom"],
    deliveryEta: "Oct 10",
    location: "Jaipur"
  },
  {
    id: 3,
    image: productJhumka,
    title: "Kundan Jhumka with Pearl Drops",
    designer: "Jaipur Craft House",
    price: 8900,
    rating: 4.6,
    reviewCount: 42,
    badges: ["New"],
    deliveryEta: "Oct 8",
    location: "Jaipur"
  },
  {
    id: 4,
    image: productSherwani,
    title: "Sapphire Silk Sherwani with Gold Buttons",
    designer: "Jaipur Craft House",
    price: 12800,
    rating: 4.7,
    reviewCount: 28,
    badges: ["Custom"],
    isCustomizable: true,
    deliveryEta: "Oct 12",
    location: "Jaipur"
  }
];

const VendorPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Designers
        </Button>
      </div>

      {/* Vendor Header */}
      <section className="bg-gradient-subtle py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="h-24 w-24 border-4 border-white shadow-soft">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-display">
                JC
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                    Jaipur Craft House
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Jaipur, Rajasthan</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      <span className="font-medium">4.8</span>
                      <span>(142 reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-emerald/10 text-emerald">
                      <Award className="h-3 w-3 mr-1" />
                      Master Craftsman
                    </Badge>
                    <Badge className="bg-gold/10 text-gold">
                      Block Print Mastery
                    </Badge>
                    <Badge className="bg-sapphire/10 text-sapphire">
                      Heritage Brand
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Third-generation artisan family preserving 200-year-old block printing techniques. 
                Specializing in royal heritage crafts with contemporary design sensibilities. 
                Every piece tells a story of Rajasthani culture and craftsmanship.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mt-6 max-w-md">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">2.3k</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">5</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              
              {activeTab === 'products' && (
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <div className="flex border rounded-lg p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <TabsContent value="products">
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
                {vendorProducts.map((product) => (
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
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>R{review}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">Customer {review}</span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Absolutely beautiful craftsmanship! The attention to detail is incredible 
                            and the quality exceeded my expectations. Will definitely order again.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="max-w-4xl">
                <h3 className="text-2xl font-display font-semibold mb-6">Our Story</h3>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="mb-4">
                    Founded in 1823, Jaipur Craft House has been a beacon of traditional Rajasthani 
                    craftsmanship for over two centuries. What started as a small family workshop 
                    has evolved into one of India's most respected heritage craft houses.
                  </p>
                  <p className="mb-4">
                    Our specialty lies in the ancient art of block printing, a technique passed down 
                    through five generations of master craftsmen. Each block is hand-carved from 
                    teak wood and every print is applied with precision and care.
                  </p>
                  <p>
                    Today, we blend traditional techniques with contemporary design sensibilities, 
                    creating pieces that honor our heritage while speaking to modern aesthetics.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VendorPage;