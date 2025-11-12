import { Shield, Fingerprint, Scan, Database, Lock, CheckCircle2, Smartphone, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ElectronicVerification = () => {
  const verificationSystems = [
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Advanced fingerprint and facial recognition systems for secure identity verification with real-time processing.",
      features: ["Multi-factor authentication", "Live detection", "Database integration"]
    },
    {
      icon: QrCode,
      title: "QR Code Verification",
      description: "Dynamic QR code generation and scanning solutions for event management, product authentication, and access control.",
      features: ["Encrypted QR codes", "Real-time validation", "Custom branding"]
    },
    {
      icon: Scan,
      title: "Document Verification",
      description: "AI-powered document scanning and verification for IDs, certificates, and official documents with fraud detection.",
      features: ["OCR technology", "Forgery detection", "Cloud storage"]
    },
    {
      icon: Database,
      title: "Data Management Systems",
      description: "Comprehensive database solutions for storing, managing, and retrieving verification records with high security.",
      features: ["Encrypted storage", "Backup systems", "Fast retrieval"]
    },
    {
      icon: Smartphone,
      title: "Mobile Verification",
      description: "Mobile-first verification apps for on-the-go authentication with offline capabilities and cloud sync.",
      features: ["iOS & Android", "Offline mode", "Push notifications"]
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Smart access control with electronic locks, RFID cards, and mobile credentials for buildings and facilities.",
      features: ["Multi-level access", "Audit trails", "Remote management"]
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-primary/20">
            <Shield className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Secure & Reliable</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
            <span className="gradient-text">Electronic Verification</span>
            <br />
            <span className="text-foreground">Systems</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge electronic verification systems that ensure security, accuracy, and efficiency 
            in identity management, access control, and document authentication.
          </p>
        </div>

        {/* Verification Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {verificationSystems.map((system, index) => (
            <Card
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-500 p-8 border border-border/50 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <system.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold font-space mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {system.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {system.description}
                </p>
              </div>

              <div className="space-y-2">
                {system.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="glass-card p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-3xl font-bold font-space mb-4 text-foreground">
              Ready to Secure Your Systems?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive electronic verification solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group text-lg px-8 py-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request a Demo
                <Shield className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:border-primary"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default ElectronicVerification;
