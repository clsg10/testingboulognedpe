import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-boulogne-dpe.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Boulogne DPE & Diagnostic" className="h-12 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg text-foreground">
              Boulogne <span className="text-primary">DPE</span>
            </span>
            <span className="text-xs text-accent font-medium tracking-wide">& DIAGNOSTIC</span>
          </div>
        </a>

        {/* Phone & CTA */}
        <div className="flex items-center gap-4">
          <a href="tel:0184191392" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <div className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground">Une question ?</span>
              <span className="font-semibold text-foreground">01 84 19 13 92</span>
            </div>
          </a>
          
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <a href="#lead-form">
              <span className="hidden sm:inline">Commander mon DPE</span>
              <span className="sm:hidden">Commander</span>
              <span className="ml-2 text-xs opacity-90">À partir de 99€</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
