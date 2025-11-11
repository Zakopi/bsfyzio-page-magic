import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Hero className="my-0" />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>;
};
export default Index;