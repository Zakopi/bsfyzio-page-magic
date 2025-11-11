import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapist-new.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const smoothScrollTo = (elementId: string, duration: number = 1500) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smoother animation
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Hero = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section ref={ref} className={`relative min-h-[85vh] flex items-center bg-gradient-to-br from-background via-background to-primary/5 pb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">B.S.FYZIO profesionální fyzioterapie</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">Fyzioterapie pomáhá lidem vracet radost z pohybu a znovu objevovat sílu vlastního těla. Ráda pomohu vašemu tělu znovu naslouchat a vnímat jej.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="default" 
                className="text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => smoothScrollTo('kontakt', 1500)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Objednat se
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => smoothScrollTo('sluzby', 1500)}
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