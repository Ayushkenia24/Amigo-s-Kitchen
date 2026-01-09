import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold text-warm-orange mb-4">
              Amigo's Kitchen
            </h3>
            <p className="text-cream/70 mb-4 max-w-md">
              Fresh Flavors. Cozy Vibes. Your go-to destination for mouthwatering 
              burgers, subs, wraps, and late-night cravings in Dombivli.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-cream/20 text-cream hover:bg-cream hover:text-charcoal rounded-full"
                onClick={() => window.open('https://www.instagram.com/the.amigos.kitchen/', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-cream/70 hover:text-warm-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream/70 hover:text-warm-orange transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-cream/70 hover:text-warm-orange transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#party" className="text-cream/70 hover:text-warm-orange transition-colors">
                  Party Bookings
                </a>
              </li>
              <li>
                <a href="#location" className="text-cream/70 hover:text-warm-orange transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-warm-orange flex-shrink-0 mt-0.5" />
                <span className="text-cream/70">097408 41639</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-warm-orange flex-shrink-0 mt-0.5" />
                <div className="text-cream/70">
                  <p>Café: 2:00 PM onwards</p>
                  <p>Delivery: 7 PM – 3 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-warm-orange flex-shrink-0 mt-0.5" />
                <span className="text-cream/70">Dombivli East, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Order Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 pt-8 border-t border-cream/10">
          <Button
            className="bg-[#E23744] hover:bg-[#c92f3c] text-white px-6 py-5 rounded-full"
            onClick={() => window.open('https://www.zomato.com', '_blank')}
          >
            🍽️ Order on Zomato
          </Button>
          <Button
            className="bg-[#FC8019] hover:bg-[#e67316] text-white px-6 py-5 rounded-full"
            onClick={() => window.open('https://www.swiggy.com', '_blank')}
          >
            🛵 Order on Swiggy
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © {currentYear} Amigo's Kitchen. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm">
              Made with ❤️ in Dombivli
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
