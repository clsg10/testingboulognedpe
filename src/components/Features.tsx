import { Award, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Diagnostiqueurs Certifiés",
    description: "Tous nos experts possèdent les certifications obligatoires à jour.",
  },
  {
    icon: FileText,
    title: "Rapport Détaillé & Lisible",
    description: "Comprenez facilement les forces et faiblesses énergétiques de votre bien.",
  },
  {
    icon: Lightbulb,
    title: "Conseils de Rénovation",
    description: "Des recommandations chiffrées pour améliorer votre étiquette.",
  },
];

const dpeClasses = [
  { letter: "A", color: "bg-dpe-a", width: "w-20" },
  { letter: "B", color: "bg-dpe-b", width: "w-24" },
  { letter: "C", color: "bg-dpe-c", width: "w-28" },
  { letter: "D", color: "bg-dpe-d", width: "w-32", label: "Moyenne Française" },
  { letter: "E", color: "bg-dpe-e", width: "w-36" },
  { letter: "F", color: "bg-dpe-f", width: "w-40" },
];

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-14">
          Plus qu'un simple document légal
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <a href="#lead-form">Réserver mon créneau</a>
            </Button>
          </div>

          {/* DPE Scale + Testimonial */}
          <div className="space-y-8">
            {/* DPE Scale */}
            <div className="bg-background rounded-2xl p-6 shadow-sm">
              <div className="space-y-2">
                {dpeClasses.map((dpe) => (
                  <div key={dpe.letter} className="flex items-center gap-3">
                    <div
                      className={`${dpe.width} ${dpe.color} text-white font-bold py-2 px-4 rounded-r-full text-sm flex items-center justify-between`}
                    >
                      <span>{dpe.letter}</span>
                    </div>
                    {dpe.label && (
                      <span className="text-xs text-muted-foreground font-medium">
                        ← {dpe.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
              <p className="text-foreground italic mb-4">
                "Grâce au DPE et aux conseils de Direct-DPE.fr, nous avons su quels travaux prioriser avant la vente."
              </p>
              <p className="text-sm font-medium text-muted-foreground">Sophie M. (Paris)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
