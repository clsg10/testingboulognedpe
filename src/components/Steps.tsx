import { ShoppingCart, ClipboardCheck, Mail } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ShoppingCart,
    title: "Commandez",
    description: "Validez votre commande en 30 secondes pour bloquer le tarif unique de 99€.",
  },
  {
    number: "2",
    icon: ClipboardCheck,
    title: "Intervention",
    description: "Notre diagnostiqueur certifié se déplace pour analyser le bâti, l'isolation et le chauffage.",
  },
  {
    number: "3",
    icon: Mail,
    title: "Réception",
    description: "Votre DPE officiel et ses recommandations vous sont envoyés par email sous 24h à 48h.",
  },
];

const Steps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">
          Un DPE conforme en 3 étapes simples
        </h2>
        <p className="section-subtitle mb-14">
          Nous nous occupons de toute la partie technique.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number badge */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
