
import React from "react";
import { Star, UserCircle2 } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Video Editor",
      quote: "This tool has completely transformed how I analyze footage. The frame-by-frame breakdowns help me spot details I would have missed otherwise.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Sarah J.",
      role: "AI Researcher",
      quote: "Perfect for creating training data for visual language models. The second-by-second approach ensures we capture every meaningful frame.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Michael T.",
      role: "Content Creator",
      quote: "I use this for analyzing my YouTube videos and improving my content. The detailed breakdowns have helped me refine my production quality.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Users Are Saying</h2>
          <p className="text-cyber-text opacity-80 max-w-2xl mx-auto">
            See how Video Second-by-Second Analysis GPT is helping professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-cyber-dark border border-cyber-accent2 border-opacity-40 flex items-center justify-center">
                  <UserCircle2 className="w-8 h-8 text-cyber-accent2" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-cyber-text">{testimonial.name}</h4>
                  <p className="text-sm text-cyber-accent2">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-cyber-accent3 fill-cyber-accent3' : 'text-cyber-text opacity-30'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="relative">
                <span className="absolute -top-2 -left-2 text-4xl text-cyber-accent1 opacity-50">"</span>
                <p className="text-cyber-text opacity-90 relative z-10 pl-4">
                  {testimonial.quote}
                </p>
                <span className="absolute -bottom-4 -right-2 text-4xl text-cyber-accent1 opacity-50">"</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
