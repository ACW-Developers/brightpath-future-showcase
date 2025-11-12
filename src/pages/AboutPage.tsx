import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Shield, Award, Users2, TrendingUp, Clock, Globe2 } from "lucide-react";

const stats = [
  { icon: Users2, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Projects Completed" },
  { icon: Clock, value: "2+", label: "Years Experience" },
  { icon: Globe2, value: "3+", label: "Countries Served" },
];

const achievements = [
  {
    icon: Shield,
    title: "ISO Certified Quality",
    description: "Committed to maintaining the highest standards in software development and service delivery."
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized for innovation and excellence in digital transformation solutions."
  },
  {
    icon: TrendingUp,
    title: "98% Client Satisfaction",
    description: "Consistently delivering solutions that exceed client expectations and drive business growth."
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden hero-bg">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 animate-fade-in-up">
              About <span className="gradient-text animate-gradient-shift">BrightPath</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed">
              Transforming businesses through innovative technology and creative digital solutions since 2024.
            </p>
          </div>
        </section>

        {/* Main About Content */}
        <About />
        {/* Stats Section */}
        <section className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:animate-bounce-subtle" />
                    <div className="text-3xl md:text-4xl font-bold font-space gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 animate-text-glow">
                Our <span className="gradient-text animate-gradient-shift">Achievements</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Recognition and milestones that showcase our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.title}
                    className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold font-space mb-4 cyber-glow">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 relative about-bg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 animate-text-glow">
                Why <span className="gradient-text animate-gradient-shift">Choose Us</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold font-space mb-3 text-primary">Client-Centric Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We prioritize your business goals and work collaboratively to deliver solutions that align with your vision and objectives.
                  </p>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold font-space mb-3 text-secondary">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leveraging the latest technologies and industry best practices to create future-proof solutions.
                  </p>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold font-space mb-3 text-accent">Proven Track Record</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Successfully delivered 100+ projects across various industries with exceptional results.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                  <div className="relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1770&q=80"
                      alt="Team collaboration"
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
