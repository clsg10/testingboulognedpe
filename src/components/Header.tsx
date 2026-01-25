import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M3 9.5L12 4L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground">
              Direct-<span className="text-primary">DPE</span>
            </span>
            <span className="text-xs text-accent font-medium tracking-wide">RAPIDE & CONFORME</span>
          </div>
        </a>

        {/* Phone & CTA */}
        <div className="flex items-center gap-4">
          <a href="tel:0185537886" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <div className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground">Une question ?</span>
              <span className="font-semibold text-foreground">01 85 53 78 86</span>
            </div>
          </a>
          
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <a href="#lead-form">
              <span className="hidden sm:inline">Commander mon DPE</span>
              <span className="sm:hidden">Commander</span>
              <span className="ml-2 text-xs opacity-90">Tarif unique 99€</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
