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
              <Button
              size="lg"
              variant="glass"
              className="hidden md:flex group text-lg px-6 py-3 animate-bounce-subtle hover:animate-glow-pulse"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
            </Button>


              <Button
                size="lg"
                variant="outline"
                className="text-lg px-6 py-3 border-primary/50 hover:border-primary hover:shadow-glow transition-all duration-300"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Advanced Animated SVG Design */}
          <div className="relative animate-float-slow">
            {/* Main Container */}
            <div className="relative w-[450px] h-[450px]">
              {/* Outer Hexagon Ring */}
              <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 400 400">
                <polygon
                  points="200,20 350,100 350,280 200,360 50,280 50,100"
                  fill="none"
                  stroke="url(#hexGradient)"
                  strokeWidth="2"
                  strokeDasharray="15 5"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Middle Triangular Ring - Counter Rotate */}
              <svg className="absolute inset-0 animate-spin-reverse" viewBox="0 0 400 400" style={{ animationDuration: "20s" }}>
                <polygon
                  points="200,80 320,280 80,280"
                  fill="none"
                  stroke="url(#triGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="10 8"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="triGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner Square Ring */}
              <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 400 400" style={{ animationDuration: "15s" }}>
                <rect
                  x="120"
                  y="120"
                  width="160"
                  height="160"
                  fill="none"
                  stroke="url(#squareGradient)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient id="squareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Multi-Layer Orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Outer glow layer */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-secondary/30 animate-pulse-glow blur-xl" />
                  {/* Middle rotating layer */}
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/70 to-accent/40 animate-spin-slow" style={{ animationDuration: "12s" }} />
                  {/* Inner core */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center shadow-2xl shadow-primary/50">
                    <Shield className="w-16 h-16 text-white animate-pulse" />
                  </div>
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping-slow" />
                  <div className="absolute inset-4 rounded-full border-2 border-accent/30 animate-ping-slow" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>

              {/* Orbiting Tech Icons with Enhanced Animation */}
              {[
                { Icon: Lock, delay: 0, orbit: 160 },
                { Icon: CheckCircle2, delay: 2, orbit: 160 },
                { Icon: Globe, delay: 4, orbit: 160 },
                { Icon: Zap, delay: 6, orbit: 160 }
              ].map(({ Icon, delay, orbit }, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                  style={{
                    animation: `orbit ${16}s linear infinite`,
                    animationDelay: `${delay}s`,
                    transformOrigin: "50% 50%",
                  }}
                >
                  <div className="glass-card p-4 rounded-2xl animate-bounce-subtle shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              ))}

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/60 rounded-full animate-float-slow"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}

              {/* Corner Tech Accents */}
              <div className="absolute -top-10 -left-10 w-28 h-28 border-2 border-primary/40 rounded-full animate-ping-slow" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36 border-2 border-accent/40 rounded-full animate-ping-slow" style={{ animationDelay: "1s" }} />
              <div className="absolute top-10 -right-10 w-20 h-20 border-2 border-secondary/30 rotate-45 animate-spin-slow" style={{ animationDuration: "25s" }} />
              <div className="absolute -bottom-10 left-10 w-24 h-24 border-2 border-primary/30 rotate-12 animate-pulse-glow" />
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