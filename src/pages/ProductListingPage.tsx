import { useState } from 'react';
import { Filter, Grid, List, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ProductCard } from '@/components/ProductCard';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import productLehenga from '@/assets/product-lehenga.jpg';
import productSherwani from '@/assets/product-sherwani.jpg';
import productSaree from '@/assets/product-saree.jpg';
import productJhumka from '@/assets/product-jhumka.jpg';

const allProducts = [
  {
    id: 1,
    image: productLehenga,
    title: "Royal Ruby Lehenga with Mirror Work",
    designer: "Jaipur Craft House",
    price: 18500,
    originalPrice: 22000,
    rating: 4.8,
    reviewCount: 34,
    badges: ["Bestseller", "Festive"],
    isCustomizable: true,
    deliveryEta: "Oct 15",
    location: "Jaipur",
    category: "Women",
    subCategory: "Lehenga",
    craft: "Mirror Work"
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
    location: "Delhi",
    category: "Men",
    subCategory: "Sherwani",
    craft: "Silk Weaving"
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
    badges: ["Handloom", "Heritage"],
    deliveryEta: "Oct 10",
    location: "Varanasi",
    category: "Women",
    subCategory: "Saree",
    craft: "Banarasi"
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
    location: "Kolkata",
    category: "Jewelry",
    subCategory: "Earrings",
    craft: "Kundan"
  },
  // Duplicate some products for demo
  {
    id: 5,
    image: productLehenga,
    title: "Emerald Green Lehenga with Gold Zari",
    designer: "Mumbai Designers",
    price: 21000,
    rating: 4.5,
    reviewCount: 12,
    badges: ["Limited Edition"],
    isCustomizable: true,
    deliveryEta: "Oct 20",
    location: "Mumbai",
    category: "Women",
    subCategory: "Lehenga",
    craft: "Zari Work"
  },
  {
    id: 6,
    image: productSaree,
    title: "Classic Kanjivaram Silk Saree",
    designer: "Chennai Silks",
    price: 19500,
    originalPrice: 23000,
    rating: 4.8,
    reviewCount: 67,
    badges: ["Trending"],
    deliveryEta: "Oct 14",
    location: "Chennai",
    category: "Women",
    subCategory: "Saree",
    craft: "Kanjivaram"
  }
];

const ProductListingPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCrafts, setSelectedCrafts] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');

  const categories = ['Women', 'Men', 'Jewelry'];
  const crafts = ['Mirror Work', 'Banarasi', 'Kundan', 'Silk Weaving', 'Zari Work', 'Kanjivaram'];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesCraft = selectedCrafts.length === 0 || selectedCrafts.includes(product.craft);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesCraft && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Ethnic Wear & Jewelry
          </h1>
          <p className="text-muted-foreground">
            Discover {filteredProducts.length} handcrafted pieces from master artisans
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 p-4 bg-card rounded-2xl">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            
            {selectedCategories.map(category => (
              <Badge key={category} variant="secondary" className="cursor-pointer">
                {category}
              </Badge>
            ))}
            
            {selectedCrafts.map(craft => (
              <Badge key={craft} variant="secondary" className="cursor-pointer">
                {craft}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>

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
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Filters</h3>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={50000}
                        min={1000}
                        step={1000}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Category</h4>
                    <div className="space-y-3">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedCategories([...selectedCategories, category]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(c => c !== category));
                              }
                            }}
                          />
                          <label htmlFor={category} className="text-sm font-medium">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Crafts */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Craft Type</h4>
                    <div className="space-y-3">
                      {crafts.map(craft => (
                        <div key={craft} className="flex items-center space-x-2">
                          <Checkbox
                            id={craft}
                            checked={selectedCrafts.includes(craft)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedCrafts([...selectedCrafts, craft]);
                              } else {
                                setSelectedCrafts(selectedCrafts.filter(c => c !== craft));
                              }
                            }}
                          />
                          <label htmlFor={craft} className="text-sm font-medium">
                            {craft}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedCrafts([]);
                      setPriceRange([5000, 50000]);
                    }}
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductListingPage;