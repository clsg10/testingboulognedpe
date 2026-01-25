import { CheckCircle } from "lucide-react";
import LeadForm from "./LeadForm";
import logoOrpi from "@/assets/logo-orpi.png";
import logoCentury21 from "@/assets/logo-century21.png";
import logoLaforet from "@/assets/logo-laforet.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient pt-20 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8 lg:pt-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Diagnostiqueurs Certifiés & Assurés</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Obtenez votre{" "}
              <span className="text-primary">DPE Certifié</span>{" "}
              pour vendre ou louer.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Obligatoire, rapide et conforme. Réservez votre intervention sous 48h. Rapport officiel remis immédiatement après visite.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-10">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-medium">Conforme Loi Climat</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-medium">Valable 10 ans</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-medium">Intervention rapide</span>
              </div>
            </div>

            {/* Partner logos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <img src={logoOrpi} alt="Orpi" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={logoCentury21} alt="Century 21" className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={logoLaforet} alt="Laforêt" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <div className="h-6 w-px bg-border mx-2" />
              <span className="text-xs text-muted-foreground">Recommandé par les agences</span>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
