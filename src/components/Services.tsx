import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Users, Zap, Dumbbell, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Individuální fyzioterapie",
    description: "Personalizovaný terapeutický plán přizpůsobený vašim potřebám a cílům.",
  },
  {
    icon: Heart,
    title: "Manuální terapie",
    description: "Šetrné techniky pro uvolnění svalového napětí a zlepšení mobility kloubů.",
  },
  {
    icon: Zap,
    title: "Terapie bolesti",
    description: "Cílené metody pro zmírnění akutní i chronické bolesti pohybového aparátu.",
  },
  {
    icon: Dumbbell,
    title: "Sportovní fyzioterapie",
    description: "Prevence zranění a optimální příprava pro sportovní výkony.",
  },
  {
    icon: Users,
    title: "Pooperační rehabilitace",
    description: "Komplexní péče po operacích pro rychlé a bezpečné zotavení.",
  },
  {
    icon: Stethoscope,
    title: "Preventivní péče",
    description: "Odborné poradenství pro udržení zdraví a prevenci problémů.",
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
