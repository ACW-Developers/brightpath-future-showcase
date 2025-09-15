import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
