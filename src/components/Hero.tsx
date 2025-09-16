import { ArrowRight, Sparkles, Play, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/team/Irihose.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforming Ideas into Digital Success";
  const imageRef = useRef(null);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    // Intersection Observer for image animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-float-in");
        }
      },
      { threshold: 0.1 }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      clearInterval(timer);
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Particles Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="animate-fade-in-up max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 mb-4 border border-white/20 animate-glow-pulse">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Welcome to the Future</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold font-space mb-4 animate-slide-in-left">
              <span className="gradient-text animate-gradient-shift">BrightPath</span>
              <br />
              <span className="text-foreground animate-fade-in-delayed">Technologies</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter typing-animation">
              {typedText}
              <span className="animate-blink">|</span>
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-fade-in-delayed-2 hidden md:block">
              Empowering businesses with innovative, reliable, and tailor-made digital solutions that enhance growth, streamline processes, and amplify brand presence in a rapidly evolving digital world.
            </p>

            <p className="text-base text-muted-foreground mb-6 leading-relaxed animate-fade-in-delayed-2 block md:hidden">
              Empowering businesses with innovative and reliable digital solutions for growth and visibility.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 items-start animate-slide-in-up">
            {/* Get Started → scroll to #services */}
            <Button
              size="lg"
              variant="glass"
              className="group text-lg px-6 py-3 animate-bounce-subtle hover:animate-glow-pulse"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
            </Button>

            {/* View Our Work → scroll to #projects */}
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-6 py-3 border-primary/50 hover:border-primary hover:shadow-glow transition-all duration-300"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Work
            </Button>
          </div>
          </div>
          
          {/* Futuristic Image Section */}
          <div 
            ref={imageRef}
            className="relative w-full lg:w-1/2 flex justify-center items-center opacity-0 translate-x-20"
          >
            {/* Main Image Container */}
            <div className="relative w-80 h-900 md:w-96 md:h-96 rounded-2xl overflow-hidden transform perspective-1000 rotate-y-10 group hover:rotate-y-0 transition-all duration-700">
              {/* Using a high-quality futuristic image from Unsplash */}
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${heroBg})`,
                }}
              />
              
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/2 to-purple-500/10 animate-pulse-slow group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-500/30 blur-xl animate-float-1 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-purple-500/30 blur-xl animate-float-2 group-hover:scale-125 transition-transform duration-700" />
              
              {/* Holographic Grid Overlay */}
              <div className="absolute inset-0 opacity-20 bg-grid-pattern animate-grid-move" />

            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute -top-8 -right-4 w-14 h-14 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 animate-float-3 group-hover:-translate-y-2 transition-transform duration-700">
              <Zap className="w-6 h-6 text-blue-400 group-hover:animate-spin duration-1000" />
            </div>
            
            <div className="absolute -bottom-6 left-0 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30 animate-float-4 group-hover:translate-y-2 transition-transform duration-700">
              <Globe className="w-5 h-5 text-purple-400 group-hover:rotate-180 transition-transform duration-1000" />
            </div>
            
            {/* Connection Lines */}
            <div className="absolute top-1/2 -left-10 w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-500/50 group-hover:w-24 transition-all duration-700" />
            <div className="absolute bottom-1/4 -right-10 w-20 h-0.5 bg-gradient-to-l from-transparent to-purple-500/50 group-hover:w-24 transition-all duration-700" />
            
            {/* Animated Orbital Rings */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-400/20 rounded-full animate-orbit-1"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-400/20 rounded-full animate-orbit-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-accent/20 blur-xl float-delayed" />
      <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full bg-secondary/20 blur-xl float" />
    </section>
  );
};

export default Hero;