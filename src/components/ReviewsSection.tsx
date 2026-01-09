import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Rahul M.",
    platform: "Google",
    rating: 5,
    text: "Best place for food, relaxing environment. The burgers are absolutely amazing and the staff is super friendly. My go-to spot for late-night cravings!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Priya S.",
    platform: "Zomato",
    rating: 5,
    text: "Soft buns, flavorful sauces, and generous portions. The cold coffee here is to die for! Love coming here with friends after college.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Amit K.",
    platform: "Google",
    rating: 5,
    text: "Friendly staff & prompt service. The loaded fries are a must-try! Great ambience for hanging out late at night. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    name: "Sneha D.",
    platform: "Zomato",
    rating: 5,
    text: "Perfect spot for budget-friendly yet delicious food. The paneer wrap is my absolute favorite. Cozy vibes and great music!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Vikram P.",
    platform: "Google",
    rating: 5,
    text: "Open till 3 AM is a lifesaver! Best mojitos in Dombivli. The owner is really friendly and always ensures great service.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section-padding bg-cream-light">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-warm-orange font-semibold tracking-wide uppercase text-sm">
            Customer Love
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our 4,839+ happy customers
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
            
            {/* Platform Badge */}
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 ${
              reviews[activeIndex].platform === 'Google' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {reviews[activeIndex].platform === 'Google' ? '🔍 Google Review' : '🍽️ Zomato Review'}
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed mb-8 font-light">
              "{reviews[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={reviews[activeIndex].avatar}
                alt={reviews[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover border-4 border-primary/20"
              />
              <div>
                <p className="font-bold text-charcoal">{reviews[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">Verified Customer</p>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              G
            </div>
            <div>
              <p className="font-bold text-charcoal">4.8★</p>
              <p className="text-xs text-muted-foreground">4,839 reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="w-10 h-10 bg-[#E23744] rounded-full flex items-center justify-center text-white font-bold">
              Z
            </div>
            <div>
              <p className="font-bold text-charcoal">4.0★</p>
              <p className="text-xs text-muted-foreground">368 votes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
