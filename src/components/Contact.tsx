import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+420 XXX XXX XXX",
    link: "tel:+420XXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@bsfyzio.cz",
    link: "mailto:info@bsfyzio.cz",
  },
  {
    icon: MapPin,
    title: "Adresa",
    content: "Praha, Česká republika",
    link: "#",
  },
  {
    icon: Clock,
    title: "Ordinační hodiny",
    content: "Po-Pá: 8:00 - 18:00",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Máte dotazy nebo chcete se objednat? Neváhejte mě kontaktovat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Napište mi</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Jméno a příjmení
                    </label>
                    <Input id="name" placeholder="Vaše jméno" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="vas@email.cz" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Telefon
                    </label>
                    <Input id="phone" type="tel" placeholder="+420 XXX XXX XXX" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Zpráva
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Popište prosím váš dotaz nebo zdravotní problém..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" variant="hero">
                    Odeslat zprávu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-foreground">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="border-2 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">První konzultace zdarma</h3>
                <p className="mb-4 text-primary-foreground/90">
                  Objednejte se na první konzultaci a společně probereme váš zdravotní stav 
                  a nastavíme individuální terapeutický plán.
                </p>
                <Button variant="accent" size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Objednat se nyní
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
