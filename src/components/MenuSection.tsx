import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
  isBestseller?: boolean;
  isVeg: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Chicken Burger",
    price: "₹120-150",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    category: "Burgers",
    isBestseller: true,
    isVeg: false,
  },
  {
    name: "Paneer Tikka Wrap",
    price: "₹100-130",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
    category: "Wraps",
    isBestseller: true,
    isVeg: true,
  },
  {
    name: "Loaded Cheese Fries",
    price: "₹80-120",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    category: "Fries",
    isBestseller: true,
    isVeg: true,
  },
  {
    name: "Chicken Sub",
    price: "₹130-160",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80",
    category: "Subs",
    isVeg: false,
  },
  {
    name: "Virgin Mojito",
    price: "₹60-80",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
    category: "Beverages",
    isBestseller: true,
    isVeg: true,
  },
  {
    name: "Masala Maggie",
    price: "₹50-80",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
    category: "Maggie",
    isVeg: true,
  },
  {
    name: "Double Patty Burger",
    price: "₹160-200",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
    category: "Burgers",
    isVeg: false,
  },
  {
    name: "Cold Coffee",
    price: "₹70-100",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    category: "Beverages",
    isBestseller: true,
    isVeg: true,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-charcoal text-cream">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-warm-orange font-semibold tracking-wide uppercase text-sm">
            Our Bestsellers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What's <span className="text-warm-orange">Cooking?</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            From juicy burgers to refreshing mojitos, explore our most-loved dishes 
            that keep Dombivli coming back for more.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-charcoal-light rounded-2xl overflow-hidden hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.isBestseller && (
                    <span className="bg-warm-orange text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> Bestseller
                    </span>
                  )}
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.isVeg ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {item.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                  </span>
                </div>

                {/* Category */}
                <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-cream mb-1 group-hover:text-warm-orange transition-colors">
                  {item.name}
                </h3>
                <p className="text-warm-orange font-bold text-xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button 
            size="lg" 
            className="bg-[#E23744] hover:bg-[#c92f3c] text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.open('https://www.zomato.com', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Full Menu on Zomato
          </Button>
          <Button 
            size="lg" 
            className="bg-[#FC8019] hover:bg-[#e67316] text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.open('https://www.swiggy.com', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Order on Swiggy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
