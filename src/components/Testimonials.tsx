import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Kwame Osei",
    role: "CEO, Jikubali Africa",
    company: "Jikubali Africa",
    rating: 5,
    text: "BrightPath Technologies transformed our digital presence across 12 African markets. Their custom software solution increased our operational efficiency by 300%. The team's expertise and cultural understanding are unmatched.",
  },
  {
    name: "Naledi Mbeki",
    role: "Marketing Director, Mite Explorers",
    company: "Mite Explorers",
    rating: 5,
    text: "Working with BrightPath was a game-changer for our tourism platform. They delivered a robust, scalable solution that exceeded our expectations. Our online bookings increased by 250% within the first quarter.",
  },
  {
    name: "Chinedu Okoro",
    role: "Founder, MyCityRadius",
    company: "MyCityRadius",
    rating: 5,
    text: "The mobile app developed by BrightPath has revolutionized how urban Africans discover local services. The user experience is exceptional, and the technical implementation is flawless. Highly recommended!",
  },
  {
    name: "Amina Diallo",
    role: "Operations Manager, Unashamed",
    company: "Unashamed",
    rating: 5,
    text: "BrightPath delivered our content management system on time and within budget. The solution has streamlined our operations and improved audience engagement significantly across the continent.",
  },
  {
    name: "Tendai Moyo",
    role: "CTO, Wakafreight Forwarders",
    company: "Wakafreight Forwarders",
    rating: 5,
    text: "Their logistics optimization software helped us achieve a 400% increase in delivery efficiency. BrightPath truly understands how to drive business growth through technology in African contexts.",
  },
  {
    name: "Fatou Camara",
    role: "Brand Manager, Jikubali Africa",
    company: "Jikubali Africa",
    rating: 5,
    text: "The brand identity and website design created by BrightPath perfectly captured our pan-African vision. Our brand recognition has improved dramatically, and customer engagement is at an all-time high.",
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
                <div className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary/20 flex items-center justify-center bg-primary/10">
                  <User className="w-8 h-8 text-primary" />
                </div>
                
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
                <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                <p className="text-muted-foreground text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 glass-card px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">African Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">24+</div>
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