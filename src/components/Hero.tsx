import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-physio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Profesionální fyzioterapie
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed">
            Individuální přístup, moderní metody a péče o vaše zdraví. 
            Pomohu vám vrátit se do formy a žít bez bolesti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="hero" className="text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Objednat se
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              Zjistit více
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
