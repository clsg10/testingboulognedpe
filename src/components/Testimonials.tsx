import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "TL",
    name: "Thomas L.",
    location: "Propriétaire à Lyon",
    text: "Rapide et efficace. J'ai eu mon RDV en 48h comme promis. Le prix fixe de 99€ est imbattable et sans surprise.",
  },
  {
    initials: "SB",
    name: "Sarah B.",
    location: "Vente à Bordeaux",
    text: "Le diagnostiqueur était très pro. J'ai reçu mon DPE le lendemain de la visite. Parfait pour ma vente.",
  },
  {
    initials: "MD",
    name: "Marc D.",
    location: "Location à Paris",
    text: "Enfin un site clair sans devis caché. 99€ payé, DPE réalisé. Je recommande pour la simplicité.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">
          Ce que nos clients disent
        </h2>
        <p className="section-subtitle mb-14">
          Rejoignez plus de 5000 propriétaires satisfaits qui ont choisi la simplicité.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="floating-card p-6 hover:scale-[1.02] transition-transform animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-dpe-d text-dpe-d" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
