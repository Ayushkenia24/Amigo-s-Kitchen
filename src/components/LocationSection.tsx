import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const businessHours = [
    { day: "Café Opens", time: "2:00 PM" },
    { day: "Delivery", time: "7:00 PM – 3:00 AM" },
  ];

  return (
    <section id="location" className="section-padding bg-cream">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-warm-orange font-semibold tracking-wide uppercase text-sm">
            Find Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            Visit <span className="text-primary">Amigo's Kitchen</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Come for the food, stay for the vibes. We're waiting to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8395440792!2d73.0815!3d19.2137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzQ5LjMiTiA3M8KwMDQnNTMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amigo's Kitchen Location"
            />
            
            {/* Late Night Badge */}
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg animate-pulse-glow">
              🌙 Open Till 3 AM
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    11/12, Mahaganga Apartments, Yash Game On,<br />
                    Brahman Lane, Opposite Municipal School,<br />
                    Dombivli East, Dombivli,<br />
                    Maharashtra – 421201
                  </p>
                  <Button
                    variant="link"
                    className="text-primary p-0 mt-2"
                    onClick={() => window.open('https://www.google.com/maps/search/Amigos+Kitchen+Dombivli', '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-warm-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-charcoal mb-2">Call Us</h3>
                  <p className="text-2xl font-bold text-warm-orange mb-3">097408 41639</p>
                  <Button
                    className="bg-warm-orange hover:bg-warm-orange-dark text-white rounded-full"
                    onClick={() => window.open('tel:+919740841639')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-charcoal mb-3">Business Hours</h3>
                  <div className="space-y-2">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-semibold text-charcoal">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-xl">
                    <p className="text-primary font-semibold text-center">
                      🌙 Late Night Delivery Available!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
