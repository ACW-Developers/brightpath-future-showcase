import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Welcome to the Future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space mb-6">
            <span className="gradient-text">BrightPath</span>
            <br />
            <span className="text-foreground">Technologies</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter">
            Transforming Ideas into Digital Success
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses with innovative, reliable, and tailor-made digital solutions that enhance growth, streamline processes, and amplify brand presence in a rapidly evolving digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="glass" className="group text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:border-primary">
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