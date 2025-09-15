import { Linkedin, Github, Twitter } from "lucide-react";

// Import team images
import ceoImage from "@/assets/team/ceo.jpg";
import creativeDirectorImage from "@/assets/team/creative-director.jpg";
import leadDeveloperImage from "@/assets/team/lead-developer.jpg";
import marketingSpecialistImage from "@/assets/team/marketing-specialist.jpg";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: ceoImage,
    description: "Visionary leader with 15+ years in tech innovation and digital transformation.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Martinez",
    role: "Creative Director",
    image: creativeDirectorImage,
    description: "Award-winning designer specializing in brand identity and user experience.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: leadDeveloperImage,
    description: "Full-stack architect with expertise in cutting-edge web technologies.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Emily Johnson",
    role: "Marketing Specialist",
    image: marketingSpecialistImage,
    description: "Digital marketing expert driving growth through data-driven strategies.",
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate professionals dedicated to bringing your digital vision to life with expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass-card group text-center overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-space mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.socials.linkedin}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    <a 
                      href={member.socials.twitter}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-primary" />
                    </a>
                    <a 
                      href={member.socials.github}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                    >
                      <Github className="w-4 h-4 text-primary" />
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