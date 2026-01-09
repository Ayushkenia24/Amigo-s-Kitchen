import { Leaf, Drumstick, Clock, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Leaf, label: "Veg Options", color: "text-green-600" },
    { icon: Drumstick, label: "Non-Veg Options", color: "text-warm-orange" },
    { icon: Clock, label: "Open Till 3 AM", color: "text-primary" },
    { icon: Users, label: "Friendly Staff", color: "text-gold" },
  ];

  return (
    <section id="about" className="section-padding bg-cream-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                alt="Cozy café ambience"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-warm-orange/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-warm-orange fill-warm-orange" />
                </div>
                <div>
                  <p className="font-bold text-charcoal">4,839+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-right">
            <span className="text-warm-orange font-semibold tracking-wide uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-6">
              Welcome to
              <span className="text-primary block">Amigo's Kitchen</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Amigo's Kitchen is your go-to destination for mouthwatering burgers, 
              delicious subs, wraps, and beverages. From juicy patties to loaded fries 
              and refreshing mojitos, we serve flavors that hit the spot—
              <span className="text-primary font-semibold">especially late at night</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're craving a midnight snack or celebrating with friends, 
              our cozy café environment and friendly staff make every visit special. 
              With pocket-friendly prices ranging from <span className="font-semibold text-charcoal">₹1–200</span>, 
              great food is always within reach.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-charcoal">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
