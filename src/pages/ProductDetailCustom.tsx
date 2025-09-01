import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, Star, ChevronRight, ChevronLeft, Check, Palette, Scissors, Clock, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import productLehenga from '@/assets/product-lehenga.jpg';

const customizationSteps = [
  {
    id: 1,
    title: 'Style & Silhouette',
    description: 'Choose your preferred style and fit',
    icon: Scissors
  },
  {
    id: 2,
    title: 'Fabric & Color',
    description: 'Select fabric type and color palette',
    icon: Palette
  },
  {
    id: 3,
    title: 'Embellishments',
    description: 'Add embroidery, mirror work, or prints',
    icon: Star
  },
  {
    id: 4,
    title: 'Measurements',
    description: 'Provide your measurements',
    icon: Calculator
  },
  {
    id: 5,
    title: 'Timeline & Budget',
    description: 'Choose delivery timeline',
    icon: Clock
  }
];

const ProductDetailCustom = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [embellishmentLevel, setEmbellishmentLevel] = useState([2]);
  const [timeline, setTimeline] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(18500);

  const styles = [
    { id: 'traditional', name: 'Traditional A-Line', price: 0 },
    { id: 'flared', name: 'Heavy Flared', price: 2000 },
    { id: 'fishtail', name: 'Fishtail Cut', price: 3500 },
    { id: 'layered', name: 'Multi-layered', price: 4000 }
  ];

  const fabrics = [
    { id: 'silk', name: 'Pure Silk', price: 0 },
    { id: 'brocade', name: 'Silk Brocade', price: 3000 },
    { id: 'velvet', name: 'Velvet', price: 2500 },
    { id: 'georgette', name: 'Heavy Georgette', price: 1500 }
  ];

  const colors = [
    { id: 'ruby', name: 'Ruby Red', color: '#B91C1C' },
    { id: 'emerald', name: 'Emerald Green', color: '#059669' },
    { id: 'sapphire', name: 'Sapphire Blue', color: '#1D4ED8' },
    { id: 'gold', name: 'Royal Gold', color: '#D97706' },
    { id: 'magenta', name: 'Magenta', color: '#C2185B' },
    { id: 'teal', name: 'Teal', color: '#0F766E' }
  ];

  const timelines = [
    { id: '21days', name: '21 Days', price: 3000, popular: false },
    { id: '14days', name: '14 Days', price: 5000, popular: true },
    { id: '10days', name: '10 Days (Express)', price: 8000, popular: false },
    { id: '7days', name: '7 Days (Rush)', price: 12000, popular: false }
  ];

  const nextStep = () => {
    if (currentStep < customizationSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculatePrice = () => {
    let price = 18500; // Base price
    
    const selectedStyleData = styles.find(s => s.id === selectedStyle);
    const selectedFabricData = fabrics.find(f => f.id === selectedFabric);
    const selectedTimelineData = timelines.find(t => t.id === timeline);
    
    if (selectedStyleData) price += selectedStyleData.price;
    if (selectedFabricData) price += selectedFabricData.price;
    if (selectedTimelineData) price += selectedTimelineData.price;
    
    // Embellishment cost
    price += embellishmentLevel[0] * 2000;
    
    setEstimatedPrice(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedStyle, selectedFabric, timeline, embellishmentLevel]);

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
          <span>Custom Lehenga</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Royal Ruby Lehenga</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Preview & Steps */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <Badge className="mb-2 bg-gold/10 text-gold">Customizable</Badge>
                <h1 className="text-2xl font-display font-bold text-foreground mb-2">
                  Custom Royal Ruby Lehenga
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

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {customizationSteps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    {index < customizationSteps.length - 1 && (
                      <div className={`w-full h-0.5 mx-2 ${
                        currentStep > step.id ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Step {currentStep}: {customizationSteps[currentStep - 1]?.title}
              </h2>
              <p className="text-muted-foreground">
                {customizationSteps[currentStep - 1]?.description}
              </p>
            </div>

            {/* Step Content */}
            <Card>
              <CardContent className="p-6">
                {currentStep === 1 && (
                  <div>
                    <h3 className="font-semibold mb-4">Choose Your Style</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {styles.map((style) => (
                        <Card
                          key={style.id}
                          className={`cursor-pointer transition-all ${
                            selectedStyle === style.id ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setSelectedStyle(style.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">{style.name}</h4>
                              {style.price > 0 && (
                                <span className="text-sm text-muted-foreground">
                                  +₹{style.price}
                                </span>
                              )}
                            </div>
                            <div className="w-full h-32 bg-muted rounded-lg mb-2"></div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h3 className="font-semibold mb-4">Fabric & Color Selection</h3>
                    
                    {/* Fabric Selection */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Choose Fabric</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {fabrics.map((fabric) => (
                          <Card
                            key={fabric.id}
                            className={`cursor-pointer transition-all ${
                              selectedFabric === fabric.id ? 'ring-2 ring-primary' : ''
                            }`}
                            onClick={() => setSelectedFabric(fabric.id)}
                          >
                            <CardContent className="p-3">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-sm">{fabric.name}</span>
                                {fabric.price > 0 && (
                                  <span className="text-xs text-muted-foreground">
                                    +₹{fabric.price}
                                  </span>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Color Selection */}
                    <div>
                      <h4 className="font-medium mb-3">Choose Color</h4>
                      <div className="flex flex-wrap gap-3">
                        {colors.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={`w-12 h-12 rounded-full border-4 transition-all ${
                              selectedColor === color.id ? 'border-primary scale-110' : 'border-muted'
                            }`}
                            style={{ backgroundColor: color.color }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h3 className="font-semibold mb-4">Embellishment Level</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="font-medium mb-3 block">
                          Embroidery & Mirror Work Level
                        </label>
                        <div className="px-4">
                          <Slider
                            value={embellishmentLevel}
                            onValueChange={setEmbellishmentLevel}
                            max={5}
                            min={1}
                            step={1}
                            className="mb-4"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Minimal</span>
                            <span>Moderate</span>
                            <span>Heavy</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Level {embellishmentLevel[0]}: 
                          {embellishmentLevel[0] <= 2 ? ' Light embellishments' : 
                           embellishmentLevel[0] <= 4 ? ' Moderate embellishments' : 
                           ' Heavy embellishments'}
                          (+₹{embellishmentLevel[0] * 2000})
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <h3 className="font-semibold mb-4">Measurements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Bust (inches)</label>
                        <Input placeholder="e.g. 34" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Waist (inches)</label>
                        <Input placeholder="e.g. 28" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Hip (inches)</label>
                        <Input placeholder="e.g. 36" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Length (inches)</label>
                        <Input placeholder="e.g. 42" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2">Additional Notes</label>
                      <Textarea 
                        placeholder="Any specific fit requirements or adjustments..."
                        value={customNotes}
                        onChange={(e) => setCustomNotes(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div>
                    <h3 className="font-semibold mb-4">Timeline & Final Review</h3>
                    <div className="space-y-4 mb-6">
                      {timelines.map((time) => (
                        <Card
                          key={time.id}
                          className={`cursor-pointer transition-all ${
                            timeline === time.id ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setTimeline(time.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <span className="font-medium">{time.name}</span>
                                {time.popular && (
                                  <Badge className="bg-gold/10 text-gold">Popular</Badge>
                                )}
                              </div>
                              <span className="font-semibold">+₹{time.price}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Customization Summary</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Style: {styles.find(s => s.id === selectedStyle)?.name || 'Not selected'}</div>
                        <div>Fabric: {fabrics.find(f => f.id === selectedFabric)?.name || 'Not selected'}</div>
                        <div>Color: {colors.find(c => c.id === selectedColor)?.name || 'Not selected'}</div>
                        <div>Embellishment Level: {embellishmentLevel[0]}</div>
                        <div>Timeline: {timelines.find(t => t.id === timeline)?.name || 'Not selected'}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentStep < customizationSteps.length ? (
                    <Button onClick={nextStep}>
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button>
                      Send Custom Request
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary & Preview */}
          <div>
            {/* Live Preview */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-subtle rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={productLehenga}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Preview updates as you customize
                </p>
              </CardContent>
            </Card>

            {/* Price Calculator */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Price Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Base Price</span>
                    <span>₹18,500</span>
                  </div>
                  {selectedStyle && styles.find(s => s.id === selectedStyle)?.price > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Style upgrade</span>
                      <span>+₹{styles.find(s => s.id === selectedStyle)?.price}</span>
                    </div>
                  )}
                  {selectedFabric && fabrics.find(f => f.id === selectedFabric)?.price > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Premium fabric</span>
                      <span>+₹{fabrics.find(f => f.id === selectedFabric)?.price}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Embellishments</span>
                    <span>+₹{embellishmentLevel[0] * 2000}</span>
                  </div>
                  {timeline && timelines.find(t => t.id === timeline)?.price > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Express timeline</span>
                      <span>+₹{timelines.find(t => t.id === timeline)?.price}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-3 mb-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{estimatedPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    size="lg" 
                    className="w-full"
                    disabled={currentStep < customizationSteps.length}
                  >
                    Send Custom Request
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Designer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailCustom;