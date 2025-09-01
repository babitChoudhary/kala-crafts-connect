import { MapPin, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const cityData = [
  {
    city: "Jaipur",
    state: "Rajasthan",
    specialty: "Block Prints & Jewelry",
    designers: 24,
    avgRating: 4.8,
    highlight: "Royal Heritage Crafts",
    color: "bg-ruby/10 border-ruby/20",
    textColor: "text-ruby"
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    specialty: "Handloom & Sarees",
    designers: 18,
    avgRating: 4.7,
    highlight: "Traditional Weaving",
    color: "bg-emerald/10 border-emerald/20",
    textColor: "text-emerald"
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    specialty: "Chikankari & Embroidery",
    designers: 32,
    avgRating: 4.9,
    highlight: "Intricate Needlework",
    color: "bg-sapphire/10 border-sapphire/20",
    textColor: "text-sapphire"
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    specialty: "Pearl & Gold Jewelry",
    designers: 15,
    avgRating: 4.6,
    highlight: "Nizami Craftsmanship",
    color: "bg-gold/10 border-gold/20",
    textColor: "text-gold"
  }
];

export const CityHighlights = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Craft Heritage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Handcrafted Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each city tells a story through its artisans. Discover the rich heritage 
            and unique craftsmanship from India's cultural capitals.
          </p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityData.map((city, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer ${city.color}`}
            >
              <CardContent className="p-6">
                {/* City Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {city.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">{city.state}</p>
                  </div>
                  <Badge 
                    className={`${city.textColor} bg-transparent border-current`}
                  >
                    <Award className="h-3 w-3 mr-1" />
                    {city.avgRating}
                  </Badge>
                </div>

                {/* Specialty */}
                <div className="mb-4">
                  <p className={`font-medium ${city.textColor} mb-1`}>
                    {city.specialty}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {city.highlight}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{city.designers} designers</span>
                  </div>
                  <span className={`text-sm font-medium ${city.textColor} group-hover:underline`}>
                    Explore →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-pattern-bg rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
              Can't find your city?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always expanding our network of talented artisans across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium`}>
                Request Your City
              </button>
              <button className="px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors font-medium">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};