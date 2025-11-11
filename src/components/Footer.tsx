import { Facebook, Instagram, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">B.S.FYZIO</h3>
            <p className="text-background/80 leading-relaxed">
              Profesionální fyzioterapeutická péče s individuálním přístupem. 
              Pomohu vám vrátit se do formy a žít bez bolesti.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt & Ordinace</h4>
            <ul className="space-y-2 text-background/80">
              <li>EliteFyzio s.r.o. Ostrava</li>
              <li>Rehapron s.r.o. Bílovec</li>
              <li className="pt-2">Tel: 605 271 925</li>
              <li>
                
              </li>
              <li>
                <a href="https://www.rehapron.cz" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">E-mail: </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sledujte mě</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/b.s.fyzio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:sokolova.b@email.cz" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>© 2025 Vytvořil <a href="mailto:jiri.zakopal@gmail.com" className="underline hover:text-background/60 transition-colors">Jiří Zakopal</a>. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;