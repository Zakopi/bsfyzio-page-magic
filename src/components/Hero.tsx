import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapist-new.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section ref={ref} className={`relative min-h-[85vh] flex items-center bg-gradient-to-br from-background via-background to-primary/5 pb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-foreground">B.S.FYZIO profesionální fyzioterapie</h1>
            <p className="text-lg md:text-xl italic text-primary/80 mb-6 font-light">„I malou změnou dokážeme ovlivnit velké věci"</p>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">Fyzioterapie pomáhá lidem vracet radost z pohybu a znovu objevovat sílu vlastního těla. Ráda pomohu vašemu tělu znovu naslouchat a vnímat jej.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="default" 
                className="text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Objednat se
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Zjistit více
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110" />
              <img src={heroImage} alt="Profesionální fyzioterapeutka" className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-elegant border-[6px] border-accent/60" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;