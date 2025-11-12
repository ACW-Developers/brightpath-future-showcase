import { ArrowRight, Sparkles, Zap, Globe, Shield, Lock, CheckCircle2 } from "lucide-react";
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
          
          {/* Animated Tech SVG Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center animate-fade-in">
            <svg
              className="w-full h-auto max-w-lg"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Shield */}
              <g className="animate-pulse-glow">
                <circle
                  cx="250"
                  cy="250"
                  r="120"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  className="animate-spin-slow"
                  style={{ transformOrigin: 'center' }}
                />
                <circle
                  cx="250"
                  cy="250"
                  r="100"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="1.5"
                  className="animate-spin-slow"
                  style={{ transformOrigin: 'center', animationDirection: 'reverse' }}
                />
                
                {/* Shield Icon */}
                <path
                  d="M 250 200 L 220 220 L 220 270 Q 220 290 250 300 Q 280 290 280 270 L 280 220 Z"
                  fill="url(#gradient3)"
                  className="animate-float"
                />
                
                {/* Checkmark */}
                <path
                  d="M 235 255 L 245 265 L 265 240"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-fade-in-delayed"
                />
              </g>

              {/* Orbiting Data Nodes */}
              <g className="animate-orbit-1" style={{ transformOrigin: '250px 250px' }}>
                <circle cx="250" cy="130" r="8" fill="hsl(var(--primary))" className="animate-pulse" />
                <circle cx="370" cy="250" r="8" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <circle cx="250" cy="370" r="8" fill="hsl(var(--secondary))" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <circle cx="130" cy="250" r="8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              </g>

              {/* Connection Lines */}
              <g opacity="0.3">
                <line x1="250" y1="130" x2="250" y2="170" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" />
                <line x1="370" y1="250" x2="330" y2="250" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <line x1="250" y1="370" x2="250" y2="330" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <line x1="130" y1="250" x2="170" y2="250" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              </g>

              {/* Circuit Pattern */}
              <g opacity="0.2">
                <path d="M 100 100 L 150 100 L 150 150" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-fade-in" />
                <path d="M 400 100 L 350 100 L 350 150" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-fade-in" style={{ animationDelay: '0.2s' }} />
                <path d="M 100 400 L 150 400 L 150 350" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-fade-in" style={{ animationDelay: '0.4s' }} />
                <path d="M 400 400 L 350 400 L 350 350" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-fade-in" style={{ animationDelay: '0.6s' }} />
              </g>

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={150 + Math.cos(i * 30 * Math.PI / 180) * 180}
                  cy={150 + Math.sin(i * 30 * Math.PI / 180) * 180}
                  r="2"
                  fill="hsl(var(--primary))"
                  opacity="0.6"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Tech Icons */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 animate-float">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            
            <div className="absolute bottom-12 left-8 w-16 h-16 rounded-2xl bg-accent/10 backdrop-blur-sm flex items-center justify-center border border-accent/20 animate-float" style={{ animationDelay: '1s' }}>
              <Lock className="w-8 h-8 text-accent" />
            </div>
            
            <div className="absolute top-1/2 -right-4 w-16 h-16 rounded-2xl bg-secondary/10 backdrop-blur-sm flex items-center justify-center border border-secondary/20 animate-float" style={{ animationDelay: '2s' }}>
              <CheckCircle2 className="w-8 h-8 text-secondary" />
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