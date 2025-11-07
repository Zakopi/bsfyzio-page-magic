import { CheckCircle } from "lucide-react";

const highlights = [
  "Více než 5 let praxe v oboru fyzioterapie",
  "Individuální přístup k každému pacientovi",
  "Moderní terapeutické metody a postupy",
  "Kontinuální vzdělávání a certifikace",
  "Spolupráce s lékaři a ortopédy",
  "Příjemné a profesionální prostředí",
];

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O mně
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Jsem kvalifikovaný fyzioterapeut s dlouholetými zkušenostmi v oboru. 
              Specializuji se na léčbu pohybového aparátu a rehabilitaci po úrazech a operacích.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Věřím, že každý pacient je jedinečný a zaslouží si individuální přístup. 
              Kombinuji klasické fyzioterapeutické metody s moderními postupy pro dosažení 
              nejlepších výsledků.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-medium">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Proč si vybrat moje služby?
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-muted-foreground">Spokojených pacientů</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <p className="text-muted-foreground">Úspěšnost léčby</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <p className="text-muted-foreground">Let zkušeností</p>
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
