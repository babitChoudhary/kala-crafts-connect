import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PromoBarProps {
  message: string;
  action?: string;
  onActionClick?: () => void;
  dismissible?: boolean;
  icon?: React.ReactNode;
  variant?: 'default' | 'festival' | 'urgent';
}

export const PromoBar = ({ 
  message, 
  action, 
  onActionClick, 
  dismissible = true, 
  icon,
  variant = 'default' 
}: PromoBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const getVariantStyles = () => {
    switch (variant) {
      case 'festival':
        return 'bg-gradient-gold text-charcoal';
      case 'urgent':
        return 'bg-ruby text-white';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <div className={`${getVariantStyles()} py-3 px-4 relative`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="text-center">{message}</span>
        {action && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onActionClick}
            className="ml-2 text-current hover:bg-white/10"
          >
            {action}
          </Button>
        )}
        {dismissible && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

// Pre-configured promo bars
export const FestivalPromoBar = () => (
  <PromoBar
    message="🎉 Ganesh Chaturthi Edit: 15% off on handcrafted jewelry · Code: GANESHA15"
    variant="festival"
    icon={<Sparkles className="h-4 w-4" />}
  />
);

export const NewUserPromoBar = () => (
  <PromoBar
    message="New to us? Free blouse-stitching on first custom sari order"
    action="Shop Now"
  />
);

export const LocalDeliveryPromoBar = () => (
  <PromoBar
    message="Local Love: Free express delivery within 10km of seller"
    variant="default"
  />
);