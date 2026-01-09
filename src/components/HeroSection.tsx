import { Phone, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />
      </div>

      {/* Floating Food Images */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full overflow-hidden opacity-20 animate-float hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1551782450-17144efb9c50?w=200&q=80" 
          alt="Fries" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-32 right-10 w-40 h-40 rounded-full overflow-hidden opacity-20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <img 
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&q=80" 
          alt="Burger" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-warm-orange/90 text-white px-4 py-2 rounded-full mb-6 animate-bounce-subtle">
          <Star className="w-5 h-5 fill-current" />
          <span className="font-semibold">4.8★ Rated on Google</span>
          <span className="text-sm opacity-80">(4,839 reviews)</span>
        </div>

        {/* Late Night Badge */}
        <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full mb-8 ml-4 animate-pulse-glow">
          <span className="font-bold">🌙 Open Till 3 AM</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
          Dombivli's Favorite
          <span className="block text-warm-orange">Late-Night Café</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Fresh Flavors. Cozy Vibes.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-cream/70 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <MapPin className="w-5 h-5" />
          <span>Dombivli East, Maharashtra</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-[#E23744] hover:bg-[#c92f3c] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('https://www.zomato.com', '_blank')}
          >
            🍽️ Order on Zomato
          </Button>
          <Button 
            size="lg" 
            className="bg-[#FC8019] hover:bg-[#e67316] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('https://www.swiggy.com', '_blank')}
          >
            🛵 Order on Swiggy
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-transparent"
            onClick={() => window.open('tel:+919740841639')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cream/70 rounded-full animate-slide-up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
