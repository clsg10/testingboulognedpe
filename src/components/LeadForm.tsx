import { useState } from "react";
import { MapPin, Phone, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  projectType: "vente" | "location";
  codePostal: string;
  telephone: string;
  nomComplet: string;
  email: string;
}

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: "vente",
    codePostal: "",
    telephone: "",
    nomComplet: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: "Commande confirmée !",
      description: "Un expert va vous recontacter sous 48h.",
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div id="lead-form" className="floating-card p-8 w-full max-w-md animate-scale-in">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Demande reçue !</h3>
          <p className="text-muted-foreground">
            Votre commande à 99€ est bien prise en compte. Un expert va vous recontacter d'ici quelques minutes.
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Besoin d'aller plus vite ?</p>
            <a 
              href="tel:0185537886" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              01 85 53 78 86
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="floating-card p-6 md:p-8 w-full max-w-md animate-slide-in-right">
      {/* Badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 bg-dpe-orange/10 text-dpe-orange text-xs font-semibold rounded-full uppercase tracking-wide">
          Offre Spéciale
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-1">
        DPE à Prix Fixe : <span className="text-primary">99€</span>
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Validez votre commande, on vous rappelle pour le RDV.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Type */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Type de projet</Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleInputChange("projectType", "vente")}
              className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                formData.projectType === "vente"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50"
              }`}
            >
              Vente
            </button>
            <button
              type="button"
              onClick={() => handleInputChange("projectType", "location")}
              className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                formData.projectType === "location"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50"
              }`}
            >
              Location
            </button>
          </div>
        </div>

        {/* Code Postal & Telephone */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Code Postal</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="75001"
                value={formData.codePostal}
                onChange={(e) => handleInputChange("codePostal", e.target.value)}
                className="pl-10 h-12 bg-secondary/50 border-border"
                required
                maxLength={5}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Téléphone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="06 12..."
                value={formData.telephone}
                onChange={(e) => handleInputChange("telephone", e.target.value)}
                className="pl-10 h-12 bg-secondary/50 border-border"
                required
              />
            </div>
          </div>
        </div>

        {/* Nom complet */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Nom complet</Label>
          <Input
            type="text"
            placeholder="Jean Dupont"
            value={formData.nomComplet}
            onChange={(e) => handleInputChange("nomComplet", e.target.value)}
            className="h-12 bg-secondary/50 border-border"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Email</Label>
          <Input
            type="email"
            placeholder="jean@exemple.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-12 bg-secondary/50 border-border"
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all group"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Commander mon DPE (99€)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>

        {/* Security note */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Shield className="w-3.5 h-3.5" />
          <span>Paiement sécurisé sur place.</span>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
