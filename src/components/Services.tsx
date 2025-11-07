import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Stethoscope, Shield, Baby, Sparkles } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Bolesti zad",
    description: "Efektivní terapie pro zmírnění bolestí zad a obnovení správné funkce páteře.",
  },
  {
    icon: Heart,
    title: "Funkční poruchy",
    description: "Diagnostika a léčba funkčních poruch pohybového aparátu.",
  },
  {
    icon: Stethoscope,
    title: "Stavy po úrazech a operacích",
    description: "Komplexní rehabilitace pro rychlé a bezpečné zotavení po úrazech a operacích.",
  },
  {
    icon: Shield,
    title: "Prevence degenerativních poruch",
    description: "Preventivní péče zaměřená na prevenci vzniku degenerativních onemocnění.",
  },
  {
    icon: Baby,
    title: "Problematika pánevního dna",
    description: "Speciální terapie pro posílení a regeneraci svalů pánevního dna.",
  },
  {
    icon: Sparkles,
    title: "Bolestivá menstruace a inkontinence",
    description: "Cílená terapie pro zmírnění bolestivé menstruace a řešení inkontinence.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Moje služby
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komplexní fyzioterapeutická péče s individuálním přístupem k každému pacientovi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
