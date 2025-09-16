import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforming Ideas into Digital Success";
  
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
    
    return () => clearInterval(timer);
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20 animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Welcome to the Future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space mb-6 animate-slide-in-left">
            <span className="gradient-text animate-gradient-shift">BrightPath</span>
            <br />
            <span className="text-foreground animate-fade-in-delayed">Technologies</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter typing-animation">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl leading-relaxed animate-fade-in-delayed-2">
            Empowering businesses with innovative, reliable, and tailor-made digital solutions that enhance growth, streamline processes, and amplify brand presence in a rapidly evolving digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-slide-in-up">
            <Button size="lg" variant="glass" className="group text-lg px-8 py-6 animate-bounce-subtle hover:animate-glow-pulse">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:shadow-glow transition-all duration-300">
              View Our Work
            </Button>
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