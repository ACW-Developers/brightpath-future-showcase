import { 
  Globe, 
  Code, 
  Palette, 
  Share2, 
  TrendingUp, 
  Headphones, 
  Smartphone, 
  ShoppingCart 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom websites that combine stunning design with powerful functionality to create exceptional user experiences."
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet your specific business requirements and streamline operations."
  },
  {
    icon: Palette,
    title: "Logo & Business Card Design",
    description: "Professional brand identity design that makes your business memorable and stands out from the competition."
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media strategies to build your online presence and engage with your target audience."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing campaigns and SEO optimization to increase visibility and drive qualified traffic."
  },
  {
    icon: Headphones,
    title: "IT Consulting & Support",
    description: "Expert technology consulting and reliable support services to keep your business running smoothly."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with secure payment processing and inventory management systems."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and drive success in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card p-6 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 animate-glow-pulse">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-space mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;