import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Rodriguez",
    role: "CEO, TechStart Solutions",
    company: "TechStart Solutions",
    rating: 5,
    text: "BrightPath Technologies transformed our digital presence completely. Their custom software solution increased our operational efficiency by 300%. The team's expertise and dedication are unmatched.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jennifer Kim",
    role: "Marketing Director, GrowthCorp",
    company: "GrowthCorp",
    rating: 5,
    text: "Working with BrightPath was a game-changer for our e-commerce platform. They delivered a robust, scalable solution that exceeded our expectations. Our online sales increased by 250% within the first quarter.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c1e4?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Thompson",
    role: "Founder, InnovateLab",
    company: "InnovateLab",
    rating: 5,
    text: "The mobile app developed by BrightPath has revolutionized how our clients interact with our services. The user experience is exceptional, and the technical implementation is flawless. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager, HealthFirst",
    company: "HealthFirst Medical",
    rating: 5,
    text: "BrightPath delivered our healthcare management system on time and within budget. The HIPAA-compliant solution has streamlined our operations and improved patient care significantly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Robert Wilson",
    role: "CTO, FinanceFlow",
    company: "FinanceFlow Inc",
    rating: 5,
    text: "Their digital marketing strategies and SEO optimization helped us achieve a 400% increase in organic traffic. BrightPath truly understands how to drive business growth through technology.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Zhang",
    role: "Brand Manager, StyleHub",
    company: "StyleHub Fashion",
    rating: 5,
    text: "The brand identity and website design created by BrightPath perfectly captured our vision. Our brand recognition has improved dramatically, and customer engagement is at an all-time high.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their experience working with BrightPath Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 text-center relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              <div className="mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary/20"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div>
                <h4 className="font-semibold font-space text-foreground">{testimonial.name}</h4>
                <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                <p className="text-muted-foreground text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 glass-card px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;