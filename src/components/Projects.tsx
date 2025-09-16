import { ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project images
import inventorySystemImage from "@/assets/projects/city.png";
import crmPlatformImage from "@/assets/projects/jikubali.png";
import healthcareSystemImage from "@/assets/projects/mite.png";

const projects = [
  {
    title: "Attendance Management System",
    description:
      "A smart attendance management platform designed to streamline tracking of employee and student attendance.",
    image: inventorySystemImage,
    tech: ["Vue.js", "Django", "PostgreSQL", "Hospinnacle"],
    category: "Enterprise Software",
    year: "2024",
    teamSize: "2 developers",
    duration: "1 month",
    features: [
      "Real-time attendance tracking",
      "Automated reporting and analytics",
      "User-friendly dashboard",
      "Multi-role access control (Admin, Staff, Students)",
      "Cloud-based data storage and backup",
    ],
    link: "https://mycityradiusattendance.com/",
  },
  {
    title: "Jikubali Africa Website",
    description:
      "A dynamic and engaging website built for Jikubali Africa to raise awareness on mental health issues.",
    image: crmPlatformImage,
    tech: ["React", "Django", "Postgres"],
    category: "Non-Profit Website",
    year: "2024",
    teamSize: "1 developer",
    duration: "3 weeks",
    features: [
      "Informative pages on mental health awareness",
      "Events and programs section",
      "Blog and resource hub",
      "Contact and support channels",
      "Responsive and user-friendly design",
    ],
    link: "https://jikubaliafrica.org/",
  },
  {
    title: "Mite Explorers Tours and Travel Website",
    description:
      "An interactive tours and travel booking platform designed for seamless trip planning and bookings.",
    image: healthcareSystemImage,
    tech: ["Vue.js", "Django", "PostgreSQL"],
    category: "Travel & Tourism",
    year: "2023",
    teamSize: "2 developers",
    duration: "2 months",
    features: [
      "Online booking system for tours and packages",
      "Destination exploration and details",
      "Travel guides and itineraries",
      "Secure payment integration",
      "Responsive design for mobile and desktop",
    ],
    link: "https://miteexplorers.com",
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful software solutions that have transformed businesses across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 backdrop-blur-md text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold font-space mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>{project.year} • {project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>{project.teamSize}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group"
                    >
                      View Live Demo
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;