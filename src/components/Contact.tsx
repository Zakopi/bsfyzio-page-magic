import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const contactInfo = [{
  icon: Phone,
  title: "Telefon",
  content: "605 271 925",
  link: "tel:+420605271925"
}, {
  icon: Mail,
  title: "Email",
  content: "sokolova.b@email.cz",
  link: "mailto:sokolova.b@email.cz"
}, {
  icon: MapPin,
  title: "Ostrava",
  content: "EliteFyzio s.r.o. • Po, St, Čt: 7:00 - 14:00",
  link: "#"
}, {
  icon: MapPin,
  title: "Bílovec",
  content: "Rehapron s.r.o. • Út: 12:00 - 18:00",
  link: "https://www.rehapron.cz"
}];
const Contact = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="kontakt" ref={ref} className={`py-20 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Máte dotazy nebo chcete se objednat? Neváhejte mě kontaktovat
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return <Card key={index} className="border-2 hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-foreground">
                          {info.title}
                        </h3>
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}

            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;