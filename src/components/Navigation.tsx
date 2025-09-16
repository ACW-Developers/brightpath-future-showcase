import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
  ];

  const scrollToId = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    // Wait one frame so the menu can close and layout can settle
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold font-space gradient-text">
              BrightPath
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              <Button variant="glass">
                Contact Us
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button p-2"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    // let anchor handle immediate jump if you want, or use scrollToId for smooth
                    // document.getElementById(item.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ))}

              <div className="px-3 py-2">
                <Button
                  variant="glass"
                  className="w-full"
                  onClick={() => scrollToId("contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
