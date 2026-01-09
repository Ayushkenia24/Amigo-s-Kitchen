import { Play, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Food preparation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Animated Food Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-warm-orange/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Play Button */}
        <div className="mb-8 inline-flex">
          <div className="relative">
            <div className="w-24 h-24 bg-warm-orange rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-2xl animate-pulse-glow">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
            <div className="absolute inset-0 bg-warm-orange rounded-full animate-ping opacity-30" />
          </div>
        </div>

        {/* Content */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Made Fresh.
          <span className="text-warm-orange block">Served Hot.</span>
        </h2>
        <p className="text-cream/80 text-lg max-w-xl mx-auto mb-8">
          Watch how we craft every dish with love and the freshest ingredients. 
          Your late-night cravings deserve nothing less!
        </p>

        {/* Instagram CTA */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
          onClick={() => window.open('https://www.instagram.com/the.amigos.kitchen/', '_blank')}
        >
          <Instagram className="w-6 h-6 mr-2" />
          Follow Us on Instagram
        </Button>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-warm-orange">4.8★</p>
            <p className="text-cream/60 text-sm">Google Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-warm-orange">4,839+</p>
            <p className="text-cream/60 text-sm">Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-warm-orange">3 AM</p>
            <p className="text-cream/60 text-sm">Open Till</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
