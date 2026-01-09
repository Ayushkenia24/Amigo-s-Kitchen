import { Clock, Wallet, Leaf, Drumstick, PartyPopper, Star, Zap } from "lucide-react";

const uspItems = [
  {
    icon: Clock,
    title: "Open Till 3 AM",
    description: "Late-night cravings? We've got you covered!",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Wallet,
    title: "₹1–200 Budget",
    description: "Pocket-friendly prices for everyone",
    color: "bg-warm-orange text-white",
  },
  {
    icon: Leaf,
    title: "Veg Friendly",
    description: "Wide variety of vegetarian options",
    iconExtra: Drumstick,
    color: "bg-green-600 text-white",
  },
  {
    icon: PartyPopper,
    title: "Party Friendly",
    description: "Perfect for birthdays & celebrations",
    color: "bg-gold text-charcoal",
  },
  {
    icon: Star,
    title: "4.8★ Rated",
    description: "Loved by 4,839+ customers on Google",
    color: "bg-yellow-500 text-charcoal",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Quick prep, no long waits",
    color: "bg-purple-600 text-white",
  },
];

const USPSection = () => {
  return (
    <section id="why-us" className="section-padding bg-cream">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-warm-orange font-semibold tracking-wide uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            Why <span className="text-primary">Amigo's?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just food – we offer an experience that keeps you coming back
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uspItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-charcoal mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>

              {/* Extra icon for Veg & Non-Veg */}
              {item.iconExtra && (
                <div className="absolute top-6 right-6 w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center shadow-md">
                  <item.iconExtra className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
