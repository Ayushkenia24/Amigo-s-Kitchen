import { Phone, PartyPopper, Cake, Users, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartySection = () => {
  const partyFeatures = [
    { icon: Cake, label: "Birthday Celebrations" },
    { icon: Users, label: "Small Group Parties" },
    { icon: Music, label: "Cozy Ambience" },
  ];

  return (
    <section id="party" className="section-padding bg-gradient-to-br from-primary to-olive-dark text-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float">🎉</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🎂</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>🎈</div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-warm-orange text-white px-4 py-2 rounded-full mb-6">
              <PartyPopper className="w-5 h-5" />
              <span className="font-semibold">Celebrate With Us</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Perfect
              <span className="text-warm-orange block">Party Spot</span>
            </h2>

            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              Looking for a cozy spot to celebrate? Whether it's a birthday, 
              a small get-together, or just a fun night out with friends, 
              Amigo's Kitchen has the perfect vibe for your celebration!
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {partyFeatures.map((feature) => (
                <div 
                  key={feature.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3"
                >
                  <feature.icon className="w-5 h-5 text-warm-orange" />
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-warm-orange hover:bg-warm-orange-dark text-white px-10 py-7 text-xl rounded-full shadow-2xl hover:shadow-warm-orange/30 transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('tel:+919740841639')}
            >
              <Phone className="w-6 h-6 mr-3" />
              Call to Book Your Party
            </Button>

            <p className="text-cream/60 text-sm mt-4">
              📞 097408 41639 – We're just a call away!
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
                alt="Party celebration"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-2xl font-bold font-display">
                  Make Memories
                </p>
                <p className="text-cream/80">
                  Cozy seating • Great food • Perfect vibes
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-warm-orange text-white rounded-2xl p-4 shadow-xl animate-bounce-subtle">
              <p className="font-bold text-lg">🎉 Party</p>
              <p className="text-sm">Friendly!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartySection;
