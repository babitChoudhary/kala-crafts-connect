import { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, Star, Truck, Shield, RotateCcw, Ruler, ChevronRight, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import productLehenga from '@/assets/product-lehenga.jpg';

const ProductDetailReady = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  const productImages = [productLehenga, productLehenga, productLehenga];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const reviews = [
    {
      id: 1,
      name: "Priya S.",
      rating: 5,
      comment: "Absolutely gorgeous! The quality is exceptional and fits perfectly.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Meera K.",
      rating: 4,
      comment: "Beautiful lehenga, great craftsmanship. Delivery was prompt.",
      date: "1 month ago",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>Home</span>
          <ChevronRight className="h-4 w-4" />
          <span>Women</span>
          <ChevronRight className="h-4 w-4" />
          <span>Lehenga</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Royal Ruby Lehenga</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square mb-4 rounded-2xl overflow-hidden">
              <img
                src={productImages[activeImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    activeImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="mb-2 bg-ruby/10 text-ruby">Bestseller</Badge>
                <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                  Royal Ruby Lehenga with Mirror Work
                </h1>
                <p className="text-muted-foreground">By Jaipur Craft House</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-medium">4.8</span>
              <span className="text-muted-foreground">(34 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-foreground">₹18,500</span>
              <span className="text-xl text-muted-foreground line-through">₹22,000</span>
              <Badge className="bg-emerald/10 text-emerald">16% off</Badge>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="font-medium text-foreground">Size</label>
                <Button variant="link" className="text-sm">
                  <Ruler className="h-4 w-4 mr-1" />
                  Size Guide
                </Button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                    className="aspect-square"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-medium text-foreground mb-3 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Delivery Check */}
            <div className="mb-6">
              <label className="font-medium text-foreground mb-3 block">Delivery Options</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline">Check</Button>
              </div>
              {pincode && (
                <p className="text-sm text-muted-foreground mt-2">
                  Delivery by Oct 15, 2024 • Free shipping
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1" disabled={!selectedSize}>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1" disabled={!selectedSize}>
                Buy Now
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Authentic Product</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Materials</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Pure silk fabric</li>
                        <li>• Mirror work embellishments</li>
                        <li>• Gold thread embroidery</li>
                        <li>• Cotton lining</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Craft Details</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Hand-stitched mirror work</li>
                        <li>• Traditional block printing</li>
                        <li>• Rajasthani craftsmanship</li>
                        <li>• Made to order quality</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">Verified</Badge>
                            )}
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? 'fill-gold text-gold' : 'text-muted'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Care Instructions</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Cleaning</h4>
                      <p>Dry clean only. Do not machine wash or hand wash.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Storage</h4>
                      <p>Store in a cool, dry place. Use muslin cloth covers to prevent dust.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Handling</h4>
                      <p>Handle mirror work gently. Avoid pulling or stretching the fabric.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailReady;