import { useState } from "react";

const tabs = [
  { id: "vente", label: "Obligatoire pour la Vente" },
  { id: "location", label: "Obligatoire pour la Location" },
  { id: "validite", label: "Valide 10 ans" },
];

const WhyDPE = () => {
  const [activeTab, setActiveTab] = useState("vente");

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6">
          Pourquoi le DPE est-il indispensable ?
        </h2>
        
        <p className="section-subtitle mb-10">
          Depuis 2021, le Diagnostic de Performance Énergétique est opposable juridiquement. 
          Il classe votre bien de <span className="text-dpe-a font-semibold">A</span> à <span className="text-dpe-g font-semibold">G</span>. 
          Une erreur peut bloquer votre vente ou vous interdire de louer (passoires thermiques).
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDPE;
