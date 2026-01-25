import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    initials: "TL",
    name: "Thomas L.",
    location: "Propriétaire à Boulogne",
    text: "Rapide et efficace. J'ai eu mon RDV en 48h comme promis. Le rapport DPE était très complet et professionnel.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    initials: "SB",
    name: "Sarah B.",
    location: "Vente à Issy-les-Moulineaux",
    text: "Le diagnostiqueur était très pro. J'ai reçu mon DPE le lendemain de la visite. Parfait pour ma vente.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    initials: "MD",
    name: "Marc D.",
    location: "Location à Sèvres",
    text: "Enfin un service clair et sans surprise. DPE réalisé rapidement et rapport détaillé. Je recommande vivement.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    initials: "CL",
    name: "Claire L.",
    location: "Propriétaire à Meudon",
    text: "Excellent service client. Très réactif et le diagnostiqueur connaissait parfaitement son métier.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    initials: "PM",
    name: "Pierre M.",
    location: "Vente à Clamart",
    text: "Rapport DPE très détaillé avec des conseils pour améliorer la performance énergétique. Top !",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    initials: "AL",
    name: "Anne L.",
    location: "Location à Boulogne",
    text: "Prise de RDV facile, intervention rapide et professionnelle. Je suis très satisfaite du service.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset when we've scrolled half (since we duplicated the content)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">
          Ce que nos clients disent
        </h2>
        <p className="section-subtitle mb-14">
          Rejoignez plus de 5000 propriétaires satisfaits qui ont choisi la simplicité.
        </p>
      </div>

      {/* Scrolling testimonials */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-hidden cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="floating-card p-6 min-w-[340px] max-w-[340px] flex-shrink-0 hover:scale-[1.02] transition-transform"
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
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;