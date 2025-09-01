import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Stay Connected with Kala Crafts
            </h3>
            <p className="text-white/70 max-w-md mx-auto">
              Get exclusive access to new collections, designer spotlights, and crafting tips
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-gold hover:bg-gold/90 text-charcoal">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              Kala Crafts Connect
            </h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Connecting you with India's finest artisans and their timeless creations. 
              Every purchase supports traditional craftsmanship.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              {[
                'Women\'s Ethnic Wear',
                'Men\'s Traditional',
                'Jewelry & Accessories',
                'Custom Orders',
                'Festival Collections',
                'Bridal Couture'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                'Size Guide',
                'Care Instructions',
                'Returns & Exchanges',
                'Track Your Order',
                'Custom Fit Help',
                'Designer Connect'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4" />
                <span>hello@kalacrafts.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Mumbai, Delhi, Bengaluru & 50+ cities</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div>
              <p className="text-xs text-white/50 mb-2">We accept</p>
              <div className="flex gap-2">
                <div className="bg-white/10 px-2 py-1 rounded text-xs">UPI</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs">Cards</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs">COD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Quality Standards</a>
            <a href="#" className="hover:text-white transition-colors">Seller Guidelines</a>
          </div>
          <p className="text-sm text-white/70">
            © 2024 Kala Crafts Connect. Made with ❤️ for Indian Heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};