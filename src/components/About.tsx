import { CheckCircle } from "lucide-react";

const services = [
  "Bolesti zad",
  "Funkční poruchy",
  "Stavy po úrazech a operacích",
  "Prevence vzniku degenerativních poruch",
  "Problematika pánevního dna",
  "Bolestivá menstruace a inkontinence",
];

const goals = [
  "Individuální přístup",
  "Hledání souvislostí",
  "Pátrání po příčinách",
  "Pomáhat k pohybu bez bolesti",
];

const About = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O mně
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Jsem fyzioterapeutka v praxi od roku 2012, takže už více než 10 let 
              pomáhám lidem zbavit se bolesti, vrátit se k pohybu a znovu se cítit 
              dobře ve svém těle.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Věnuji se širokému spektru potíží pohybového aparátu, jako jsou například:
            </p>

            <div className="space-y-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-foreground mb-4">
              Mým cílem je:
            </p>
            <div className="space-y-3 mb-6">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">👊</span>
                  <span className="text-foreground">{goal}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed italic">
              Fyzioterapie pomáhá lidem vracet radost z pohybu a znovu objevovat sílu 
              vlastního těla. Ráda vám pomohu vašemu tělu znovu naslouchat a vnímat jej.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-medium">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Specializace
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <p className="text-muted-foreground">Let praxe v oboru</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">2012</div>
                    <p className="text-muted-foreground">V praxi od roku</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-3">Speciální zaměření:</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
    </section>
  );
};

export default About;
