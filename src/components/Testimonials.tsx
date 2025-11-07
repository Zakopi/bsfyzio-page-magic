import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const testimonials = [{
  name: "Jana Nováková",
  text: "Paní Stará mi pomohla zbavit se chronických bolestí zad, které mě trápily roky. Její profesionální a empatický přístup je úžasný. Konečně se mohu vrátit ke sportu!",
  rating: 5
}, {
  name: "Petr Dvořák",
  text: "Po operaci kolene jsem potřeboval kvalitní rehabilitaci. Díky individuálnímu přístupu a moderním metodám jsem se vrátil do formy rychleji, než jsem čekal.",
  rating: 5
}, {
  name: "Marie Svobodová",
  text: "Trpěla jsem problémy s pánevním dnem po porodu. Díky odborné péči a citlivému přístupu se mi podařilo vrátit se k normálnímu životu. Velmi doporučuji!",
  rating: 5
}, {
  name: "Tomáš Horák",
  text: "Profesionální péče na nejvyšší úrovni. Kombinace manuální terapie a cílených cviků mi pomohla vyřešit dlouhodobé potíže s krční páteří. Jsem velmi spokojený.",
  rating: 5
}, {
  name: "Lucie Procházková",
  text: "Úžasná fyzioterapeutka! Pomohla mi nejen s fyzickými potížemi, ale také mi vysvětlila příčiny a naučila mě, jak předcházet dalším problémům. Moc děkuji!",
  rating: 5
}, {
  name: "Martin Černý",
  text: "Po úrazu ramene jsem byl v péči několika terapeutů, ale teprve zde jsem dosáhl skutečného zlepšení. Individuální přístup a odbornost na vysoké úrovni.",
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Reference pacientů
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Přečtěte si, co říkají spokojení pacienti o mých službách
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="relative overflow-hidden border-primary/10 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary animate-scale-in" style={{animationDelay: `${i * 0.1}s`}} />)}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"Po úrazu ramene jsem byl v péči několika terapeutů, ale teprve zde jsem dosáhl skutečného zlepšení. Individuální přístup a odbornost na vysoké úrovni."{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Staňte se dalším spokojeným pacientem
          </p>
        </div>
      </div>
    </section>;
};
export default Testimonials;