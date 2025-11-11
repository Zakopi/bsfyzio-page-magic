import { CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const services = ["Bolesti zad", "Funkční poruchy", "Stavy po úrazech a operacích", "Prevence vzniku degenerativních poruch", "Problematika pánevního dna", "Bolestivá menstruace a inkontinence"];
const goals = ["Individuální přístup", "Hledání souvislostí", "Pátrání po příčinách", "Pomáhat k pohybu bez bolesti"];
const About = () => {
  const {
    ref: scrollRef,
    isVisible
  } = useScrollAnimation();
  const [yearsCount, setYearsCount] = useState(0);
  const [yearCount, setYearCount] = useState(2000);
  const [patientsCount, setPatientsCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Clear any existing timers
          timersRef.current.forEach(timer => clearInterval(timer));
          timersRef.current = [];

          // Animate years of experience (dynamically calculated from 2012)
          let yearsStart = 0;
          const yearsEnd = new Date().getFullYear() - 2012;
          const yearsDuration = 2000;
          const yearsIncrement = yearsEnd / (yearsDuration / 16);
          const yearsTimer = setInterval(() => {
            yearsStart += yearsIncrement;
            if (yearsStart >= yearsEnd) {
              setYearsCount(yearsEnd);
              clearInterval(yearsTimer);
            } else {
              setYearsCount(Math.floor(yearsStart));
            }
          }, 16);
          timersRef.current.push(yearsTimer);

          // Animate year (2012)
          let yearStart = 2000;
          const yearEnd = 2012;
          const yearDuration = 2000;
          const yearIncrement = (yearEnd - yearStart) / (yearDuration / 16);
          const yearTimer = setInterval(() => {
            yearStart += yearIncrement;
            if (yearStart >= yearEnd) {
              setYearCount(yearEnd);
              clearInterval(yearTimer);
            } else {
              setYearCount(Math.floor(yearStart));
            }
          }, 16);
          timersRef.current.push(yearTimer);

          // Animate patients count (99+)
          let patientsStart = 0;
          const patientsEnd = 99;
          const patientsDuration = 2000;
          const patientsIncrement = patientsEnd / (patientsDuration / 16);
          const patientsTimer = setInterval(() => {
            patientsStart += patientsIncrement;
            if (patientsStart >= patientsEnd) {
              setPatientsCount(patientsEnd);
              clearInterval(patientsTimer);
            } else {
              setPatientsCount(Math.floor(patientsStart));
            }
          }, 16);
          timersRef.current.push(patientsTimer);
        } else {
          // Reset values when leaving viewport
          setYearsCount(0);
          setYearCount(2000);
          setPatientsCount(0);
        }
      });
    }, {
      threshold: 0.3
    });
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
      // Clean up timers on unmount
      timersRef.current.forEach(timer => clearInterval(timer));
    };
  }, []);
  return <section ref={scrollRef} className={`pt-6 pb-12 md:pt-8 md:pb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O mně
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Jsem fyzioterapeutka v praxi od roku 2012, takže už více než {new Date().getFullYear() - 2012} let 
              pomáhám lidem zbavit se bolesti, vrátit se k pohybu a znovu se cítit 
              dobře ve svém těle.
            </p>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Věnuji se širokému spektru potíží pohybového aparátu, jako jsou například:
            </p>

            <div className="space-y-3 mb-8">
              {services.map((service, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-foreground">{service}</span>
                </div>)}
            </div>

            <p className="text-xl font-semibold text-foreground mb-4">
              Mým cílem je:
            </p>
            <div className="space-y-3 mb-6">
              {goals.map((goal, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-foreground">{goal}</span>
                </div>)}
            </div>

            
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-medium">
              <div className="bg-card rounded-xl p-8" ref={statsRef}>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Specializace
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {yearsCount}+
                    </div>
                    <p className="text-lg text-muted-foreground">Let praxe v oboru</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {yearCount}
                    </div>
                    <p className="text-lg text-muted-foreground">V praxi od roku</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {patientsCount}+
                    </div>
                    <p className="text-lg text-muted-foreground">Spokojených pacientů</p>
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium mb-3">Speciální zaměření:</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Problematika pánevního dna, bolestivá menstruace, inkontinence, 
                      bolestivý pohlavní styk, funkční potíže pohybového systému 
                      spojené s těhotenstvím a porodem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;