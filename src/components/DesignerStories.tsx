import { Play, Heart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const designerStories = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    specialty: "Block Print Mastery",
    story: "Third-generation artisan preserving 200-year-old family techniques",
    followers: "2.3k",
    likes: "890",
    avatar: "PS",
    badge: "Master Craftsman",
    color: "bg-ruby/10 border-ruby/20"
  },
  {
    id: 2,
    name: "Arjun Textiles",
    location: "Varanasi, UP",
    specialty: "Banarasi Silk Weaving",
    story: "Award-winning weavers creating contemporary designs with traditional methods",
    followers: "4.1k",
    likes: "1.2k",
    avatar: "AT",
    badge: "GI Certified",
    color: "bg-gold/10 border-gold/20"
  },
  {
    id: 3,
    name: "Meera's Heritage",
    location: "Lucknow, UP",
    specialty: "Chikankari Embroidery",
    story: "Empowering women artisans through sustainable craft practices",
    followers: "3.7k",
    likes: "950",
    avatar: "MH",
    badge: "Women-Led",
    color: "bg-emerald/10 border-emerald/20"
  },
  {
    id: 4,
    name: "Royal Jewels Co.",
    location: "Hyderabad, Telangana",
    specialty: "Kundan & Pearl Jewelry",
    story: "Nizami-era techniques meets modern design sensibilities",
    followers: "5.2k",
    likes: "1.8k",
    avatar: "RJ",
    badge: "Heritage Brand",
    color: "bg-sapphire/10 border-sapphire/20"
  }
];

export const DesignerStories = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Artisan Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Meet the Masters Behind the Magic
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every piece tells a story. Get to know the passionate artisans who pour 
            their heritage and heart into every creation.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designerStories.map((designer) => (
            <Card 
              key={designer.id} 
              className={`group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden ${designer.color}`}
            >
              {/* Story Preview (Video Thumbnail) */}
              <div className="relative aspect-square bg-gradient-subtle">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                </div>
                
                {/* Badge */}
                <Badge className="absolute top-3 left-3 bg-white/90 text-charcoal">
                  {designer.badge}
                </Badge>

                {/* Stats */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <div className="bg-charcoal/80 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {designer.followers}
                  </div>
                  <div className="bg-charcoal/80 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {designer.likes}
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Designer Info */}
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                      {designer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {designer.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {designer.location}
                    </p>
                  </div>
                </div>

                {/* Specialty */}
                <p className="text-sm font-medium text-primary mb-2">
                  {designer.specialty}
                </p>

                {/* Story */}
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {designer.story}
                </p>

                {/* CTA */}
                <div className="mt-4 pt-3 border-t border-border">
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Watch Story →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow More Stories CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-6 py-4 shadow-soft">
            <div className="flex -space-x-2">
              {designerStories.slice(0, 3).map((designer, index) => (
                <Avatar key={index} className="h-8 w-8 border-2 border-background">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {designer.avatar}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Follow 200+ artisan stories
            </span>
            <button className="text-sm font-medium text-primary hover:underline">
              Explore All →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};