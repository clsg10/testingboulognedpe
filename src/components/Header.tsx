import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-boulogne-dpe.png";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Company Info */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Boulogne DPE & Diagnostic" className="h-24 md:h-28 w-auto" />
          </a>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-lg md:text-xl text-foreground">
              BOULOGNE <span className="text-primary">DPE</span> & DIAGNOSTIC
            </span>
            <div className="flex flex-col text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
              <span>9 rue Le Corbusier, 92100 Boulogne-Billancourt</span>
              <a href="tel:0184191392" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Phone className="w-3 h-3 text-primary" />
                <span className="font-medium">01 84 19 13 92</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA - Desktop only */}
        <div className="hidden md:flex items-center gap-4">
            
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#lead-form">
                Commander mon DPE
                <span className="ml-2 text-xs opacity-90">À partir de 99€</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3 safe-area-bottom">
        <div className="flex items-center gap-3">
          <a 
            href="tel:0184191392" 
            className="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-secondary rounded-xl text-foreground font-semibold transition-all active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Appeler
          </a>
          <a 
            href="#lead-form"
            className="flex-1 flex items-center justify-center py-4 px-4 bg-primary rounded-xl text-primary-foreground font-semibold transition-all active:scale-95"
          >
            Commander (99€)
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
