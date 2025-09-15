import { Target, Eye, Heart, Users, Lightbulb, Zap } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously bringing fresh, creative, and effective ideas to our clients."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest quality in every solution delivered."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building trust through honesty, transparency, and accountability."
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Prioritizing client growth and satisfaction above all."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with clients and within our team to achieve outstanding results."
  },
  {
    icon: Zap,
    title: "Adaptability",
    description: "Embracing change and leveraging technology to stay ahead."
  }
];

const About = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* About Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              About <span className="gradient-text">BrightPath</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At BrightPath Technologies, we believe that every business deserves a powerful digital presence. We are a dynamic team of designers, developers, and strategists passionate about delivering solutions that go beyond expectations.
              </p>
              <p>
                From creating stunning websites and custom software to designing impactful brand identities and managing your digital footprint, we partner with you to turn your vision into reality.
              </p>
              <p>
                Our approach is simple: we listen, we innovate, and we deliver. Whether you are a startup, a growing business, or an established enterprise, our solutions are designed to scale with you.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold font-space">Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To empower businesses and individuals by providing innovative, reliable, and tailor-made digital solutions that enhance growth, streamline processes, and amplify brand presence in a rapidly evolving digital world.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold font-space">Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be a leading digital solutions partner recognized for creativity, innovation, and customer-centric services, driving business success across industries and borders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold font-space mb-6">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do and shape our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="glass-card p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold font-space mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;