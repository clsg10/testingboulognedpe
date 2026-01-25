import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Le DPE est-il obligatoire pour toutes les ventes ?",
    answer: "Oui, le DPE doit être présenté dès la mise en vente (ou location) de tout logement, sauf exceptions très rares (logements provisoires, monuments historiques sans chauffage, etc).",
  },
  {
    question: "Combien de temps le diagnostic est-il valable ?",
    answer: "Le DPE est valable 10 ans. Attention, les DPE réalisés entre 2013 et 2017 ne sont plus valables depuis 2023.",
  },
  {
    question: "Combien coûte un DPE ?",
    answer: "Chez Direct-DPE.fr, c'est simple : 99€ TTC, prix unique, peu importe la surface ou la localisation de votre bien. Pas de mauvaise surprise.",
  },
  {
    question: "Que se passe-t-il si mon DPE est F ou G ?",
    answer: "Vous pouvez toujours vendre, mais vous avez l'obligation d'effectuer un audit énergétique complémentaire. Pour la location, les biens G+ sont interdits depuis 2023.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">
          Questions Fréquentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border border-border data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
