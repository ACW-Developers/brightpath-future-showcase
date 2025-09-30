import React, { useState } from "react";
import { 
  Globe, 
  Code, 
  Palette, 
  Share2, 
  TrendingUp, 
  Headphones, 
  Smartphone, 
  ShoppingCart,
  Shirt,
  Badge,
  FileText,
  File,
  Printer,
  Rocket,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderServiceModal from "./OrderServiceModal";

const Services = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  // Updated online image URLs for printing services with active links
  const printingServiceImages = {
    main: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    tshirt: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80",
    cap: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    businessCards: "https://images.unsplash.com/photo-1539096566367-0718daf1f9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    documents: "https://images.unsplash.com/photo-1586074299757-dc655f18518c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    banners: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    promotional: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1515&q=80",
    largeFormat: "https://images.unsplash.com/photo-1616007736933-54d2525a2c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  };

  const services = [
    {
      icon: Printer,
      title: "Professional Printing Services",
      description: "Comprehensive printing solutions for all your business and personal needs with premium quality and fast turnaround.",
      image: printingServiceImages.main,
      subServices: [
        {
          icon: Shirt,
          title: "T-Shirt Printing",
          description: "Custom t-shirt printing with high-quality materials and vibrant designs for events, promotions, or personal use.",
          image: printingServiceImages.tshirt
        },
        {
          icon: Badge,
          title: "Cap & Headwear Printing",
          description: "Customized caps and headwear with professional embroidery or printing for branding and merchandise.",
          image: printingServiceImages.cap
        },
        {
          icon: FileText,
          title: "Business Cards & Stationery",
          description: "Elegant business cards, letterheads, and stationery that make a lasting impression on your clients.",
          image: printingServiceImages.businessCards
        },
        {
          icon: File,
          title: "Document Printing & Binding",
          description: "Professional document printing, reports, presentations with various binding options for a polished look.",
          image: printingServiceImages.documents
        },
        {
          icon: TrendingUp,
          title: "Banners & Signage",
          description: "Eye-catching banners, signs, and displays for events, retail spaces, and promotional campaigns.",
          image: printingServiceImages.banners
        },
        {
          icon: ShoppingCart,
          title: "Promotional Products",
          description: "Custom printed promotional items including mugs, pens, bags, and more to boost your brand visibility.",
          image: printingServiceImages.promotional
        },
      ]
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom websites that combine stunning design with powerful functionality to create exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and streamline operations.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      icon: Palette,
      title: "Logo & Business Card Design",
      description: "Professional brand identity design that makes your business memorable and stands out from the competition.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Comprehensive social media strategies to build your online presence and engage with your target audience.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description: "Data-driven marketing campaigns and SEO optimization to increase visibility and drive qualified traffic.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    },
    {
      icon: Headphones,
      title: "IT Consulting & Support",
      description: "Expert technology consulting and reliable support services to keep your business running smoothly.",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing and inventory management systems.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  // Separate printing service from other services
  const printingService = services[0];
  const otherServices = services.slice(1);

  const handleOrderService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsOrderModalOpen(true);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital and printing solutions tailored to elevate your business and drive success.
          </p>
        </div>

        {/* Printing Services Section */}
        <div className="grid grid-cols-1 gap-6 mb-20">
          <div className="service-card group overflow-hidden lg:col-span-4">
            <div className="relative">
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={printingService.image} 
                  alt={printingService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                  <printingService.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold font-space mb-3 text-foreground">
                  {printingService.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {printingService.description}
                </p>
                
                <div className="flex gap-4 mb-6">
                  <Button
                    onClick={() => handleOrderService(printingService.title)}
                    className="futuristic-btn flex items-center gap-2 px-6 py-3"
                  >
                    <Rocket className="w-5 h-5" />
                    Order Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 px-6 py-3 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                  >
                    <Sparkles className="w-5 h-5" />
                    Get Quote
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                  {printingService.subServices.map((subService, subIndex) => {
                    const SubIcon = subService.icon;
                    return (
                      <div 
                        key={subService.title}
                        className="bg-muted/30 rounded-xl p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-md group/sub"
                      >
                        <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
                          <img 
                            src={subService.image} 
                            alt={subService.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                          <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                            <SubIcon className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <h4 className="font-semibold font-space mb-1 text-foreground">
                          {subService.title}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {subService.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Section with Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold font-space mb-4">
            Other <span className="gradient-text">Services</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our additional digital solutions to enhance your business presence and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full">
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
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        onClick={() => handleOrderService(service.title)}
                        className="futuristic-btn flex items-center gap-1 flex-1"
                      >
                        <Rocket className="w-4 h-4" />
                        Order
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                      >
                        <Sparkles className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <OrderServiceModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;