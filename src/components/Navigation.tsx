import { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, MapPin, Globe, HelpCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top utility bar */}
      <div className="bg-gradient-subtle py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4" />
              Mumbai
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              English
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <HelpCircle className="h-4 w-4" />
              Help
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <Package className="h-4 w-4" />
              Orders
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold bg-gradient-jewel bg-clip-text text-transparent">
              Kala Crafts
            </h1>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for ethnic wear, jewelry, designers..."
                className="pl-10 py-3 rounded-full border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* Navigation links - hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/products" className="text-foreground hover:text-primary font-medium transition-colors">
                Designers
              </a>
              <a href="/products?category=women" className="text-foreground hover:text-primary font-medium transition-colors">
                Women
              </a>
              <a href="/products?category=men" className="text-foreground hover:text-primary font-medium transition-colors">
                Men
              </a>
              <a href="/products?category=jewelry" className="text-foreground hover:text-primary font-medium transition-colors">
                Jewelry
              </a>
              <a href="/product/1/customize" className="text-foreground hover:text-primary font-medium transition-colors">
                Custom
              </a>
            </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Sell on Kala Crafts
            </Button>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative hover:bg-muted rounded-full">
                <Heart className="h-5 w-5 text-foreground" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-ruby text-white rounded-full flex items-center justify-center">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative hover:bg-muted rounded-full">
                <ShoppingBag className="h-5 w-5 text-foreground" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-ruby text-white rounded-full flex items-center justify-center">
                  2
                </Badge>
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full">
                <User className="h-5 w-5 text-foreground" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile search - shown when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search ethnic wear, jewelry..."
                className="pl-10 py-3 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              <a href="/products" className="text-foreground hover:text-primary font-medium">
                Designers
              </a>
              <a href="/products?category=women" className="text-foreground hover:text-primary font-medium">
                Women
              </a>
              <a href="/products?category=men" className="text-foreground hover:text-primary font-medium">
                Men
              </a>
              <a href="/products?category=jewelry" className="text-foreground hover:text-primary font-medium">
                Jewelry
              </a>
              <a href="/product/1/customize" className="text-foreground hover:text-primary font-medium">
                Custom
              </a>
              <Button variant="outline" className="w-full mt-4">
                Sell on Kala Crafts
              </Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};