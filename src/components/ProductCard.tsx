import { Heart, MessageCircle, Settings, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  image: string;
  title: string;
  designer: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  badges?: string[];
  isCustomizable?: boolean;
  deliveryEta?: string;
  location?: string;
}

export const ProductCard = ({
  image,
  title,
  designer,
  price,
  originalPrice,
  rating = 4.5,
  reviewCount = 0,
  badges = [],
  isCustomizable = false,
  deliveryEta,
  location
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className="bg-charcoal/80 text-white text-xs px-2 py-1 backdrop-blur-sm"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" className="h-8 w-8 bg-white/90 text-charcoal hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" className="h-8 w-8 bg-white/90 text-charcoal hover:bg-white">
            <MessageCircle className="h-4 w-4" />
          </Button>
          {isCustomizable && (
            <Button size="icon" className="h-8 w-8 bg-gold/90 text-charcoal hover:bg-gold">
              <Settings className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Customizable Badge */}
        {isCustomizable && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-gold text-charcoal">
              <Settings className="h-3 w-3 mr-1" />
              Customizable
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Designer & Location */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{designer}</span>
          {location && (
            <span className="text-xs text-muted-foreground">{location}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Rating */}
        {reviewCount > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="text-sm font-medium ml-1">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-foreground">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
          {originalPrice && (
            <Badge variant="secondary" className="text-xs bg-emerald/10 text-emerald">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
            </Badge>
          )}
        </div>

        {/* Delivery Info */}
        {deliveryEta && (
          <p className="text-xs text-muted-foreground">
            Delivery by {deliveryEta}
          </p>
        )}
      </CardContent>
    </Card>
  );
};