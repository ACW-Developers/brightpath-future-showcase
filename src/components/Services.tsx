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

// Import service images
import webDesignImage from "@/assets/services/jikubali.png";
import softwareDevImage from "@/assets/services/mite.png";
import brandingImage from "@/assets/services/branding.jpg";
import socialMediaImage from "@/assets/services/social-media.jpg";
import digitalMarketingImage from "@/assets/services/digital-marketing.jpg";
import itConsultingImage from "@/assets/services/it-consulting.jpg";
import mobileAppImage from "@/assets/services/mobile-app.jpg";
import ecommerceImage from "@/assets/services/ecommerce.jpg";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom websites that combine stunning design with powerful functionality to create exceptional user experiences.",
    image: webDesignImage
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet your specific business requirements and streamline operations.",
    image: softwareDevImage
  },
  {
    icon: Palette,
    title: "Logo & Business Card Design",
    description: "Professional brand identity design that makes your business memorable and stands out from the competition.",
    image: brandingImage
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media strategies to build your online presence and engage with your target audience.",
    image: socialMediaImage
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing campaigns and SEO optimization to increase visibility and drive qualified traffic.",
    image: digitalMarketingImage
  },
  {
    icon: Headphones,
    title: "IT Consulting & Support",
    description: "Expert technology consulting and reliable support services to keep your business running smoothly.",
    image: itConsultingImage
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    image: mobileAppImage
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with secure payment processing and inventory management systems.",
    image: ecommerceImage
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
                className="service-card group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center animate-glow-pulse">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-space mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;