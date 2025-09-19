import { Linkedin, Github, Twitter } from "lucide-react";

// Using an online image for David Irihose
import ceoImage from "@/assets/team/David.png";
const teamMembers = [
  {
    name: "David Irihose",
    role: "CEO & Founder",
    image: ceoImage,
    description: "Visionary leader with 2+ years in tech innovation and digital transformation. David brings a unique combination of technical expertise and business strategy to drive our company's mission forward.",
    detailedDescription: "With a background in software engineering and business development, David founded our company with a vision to bridge the gap between cutting-edge technology and practical business solutions. ",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const Team = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visionary leadership driving innovation and excellence in digital solutions.
          </p>
        </div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass-card group overflow-hidden w-full max-w-4xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section - Enhanced */}
                <div className="lg:w-2/5 relative">
                  <div className="relative h-80 lg:h-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                      <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">DI</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section - Enhanced */}
                <div className="lg:w-3/5 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold font-space mb-2">{member.name}</h3>
                    <p className="text-primary text-lg font-medium mb-4">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {member.detailedDescription}
                  </p>
                  
                  {/* Enhanced Social Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={member.socials.linkedin}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group/social"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover/social:scale-110 transition-transform" />
                    </a>
                    <a 
                      href={member.socials.twitter}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group/social"
                    >
                      <Twitter className="w-5 h-5 text-primary group-hover/social:scale-110 transition-transform" />
                    </a>
                    <a 
                      href={member.socials.github}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group/social"
                    >
                      <Github className="w-5 h-5 text-primary group-hover/social:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;