import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">B.S. Fyzio</h3>
            <p className="text-background/80 leading-relaxed">
              Profesionální fyzioterapeutická péče s individuálním přístupem. 
              Pomohu vám vrátit se do formy a žít bez bolesti.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sluzby" className="text-background/80 hover:text-background transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#o-mne" className="text-background/80 hover:text-background transition-colors">
                  O mně
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/80 hover:text-background transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#cenik" className="text-background/80 hover:text-background transition-colors">
                  Ceník
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sledujte mě</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/b.s.fyzio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:sokolova.b@email.cz"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} B.S. Fyzio. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
