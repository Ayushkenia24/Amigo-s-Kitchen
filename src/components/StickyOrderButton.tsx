import { useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyOrderButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {/* Expanded Menu */}
      <div
        className={`absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-3">
          <Button
            className="w-full bg-[#E23744] hover:bg-[#c92f3c] text-white rounded-full"
            onClick={() => window.open('https://www.zomato.com', '_blank')}
          >
            🍽️ Zomato
          </Button>
          <Button
            className="w-full bg-[#FC8019] hover:bg-[#e67316] text-white rounded-full"
            onClick={() => window.open('https://www.swiggy.com', '_blank')}
          >
            🛵 Swiggy
          </Button>
        </div>
      </div>

      {/* Main Button */}
      <Button
        size="lg"
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
          isExpanded
            ? "bg-charcoal hover:bg-charcoal-light"
            : "bg-warm-orange hover:bg-warm-orange-dark animate-pulse-glow"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-cream" />
        ) : (
          <ShoppingBag className="w-6 h-6 text-white" />
        )}
      </Button>
    </div>
  );
};

export default StickyOrderButton;
