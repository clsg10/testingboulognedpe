import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Footer = () => {
  const [openModal, setOpenModal] = useState<"mentions" | "privacy" | null>(null);

  return (
    <>
      {/* CTA Bar */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
            >
              <a href="tel:0184191392" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Appeler
              </a>
            </Button>
            <Button
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              <a href="#lead-form">Commander (à partir de 99€)</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-primary-foreground/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary-foreground">Boulogne DPE & Diagnostic</span>
              <span className="text-sm">© 2024</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Dialog open={openModal === "mentions"} onOpenChange={(open) => setOpenModal(open ? "mentions" : null)}>
                <DialogTrigger className="hover:text-primary-foreground transition-colors">
                  Mentions Légales
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card">
                  <DialogHeader>
                    <DialogTitle>Mentions Légales</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">1. Éditeur du site</h4>
                      <p>Le site est édité par <strong>BOULOGNE DPE & DIAGNOSTIC</strong>.</p>
                      <p className="mt-2"><strong>SIRET :</strong> 100 287 143 00018</p>
                      <p><strong>Siège social :</strong> 9 rue Le Corbusier, 92100 Boulogne-Billancourt</p>
                      <p><strong>Téléphone :</strong> 01 84 19 13 92</p>
                      <p><strong>Activité (APE) :</strong> 71.20B – Analyses, essais et inspections techniques</p>
                      <p><strong>Établissement actif depuis :</strong> 01/07/2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">2. Directeur de la publication</h4>
                      <p>Le représentant légal de BOULOGNE DPE & DIAGNOSTIC.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">3. Hébergement</h4>
                      <p>Le site est hébergé par AWS Europe (Paris).</p>
                      <p>Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxembourg.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">4. Propriété intellectuelle</h4>
                      <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={openModal === "privacy"} onOpenChange={(open) => setOpenModal(open ? "privacy" : null)}>
                <DialogTrigger className="hover:text-primary-foreground transition-colors">
                  Politique de Confidentialité
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card">
                  <DialogHeader>
                    <DialogTitle>Politique de Confidentialité</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">1. Collecte des données</h4>
                      <p>Nous collectons les informations suivantes via notre formulaire de commande :</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Adresse postale du bien à diagnostiquer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">2. Finalité des données</h4>
                      <p>Ces données sont exclusivement utilisées pour :</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>La prise de rendez-vous avec un diagnostiqueur certifié.</li>
                        <li>L'édition de la facture et du rapport DPE.</li>
                        <li>La communication relative à votre commande.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">3. Partage des données</h4>
                      <p>Vos données ne sont transmises qu'au diagnostiqueur partenaire en charge de votre dossier. Nous ne vendons, n'échangeons et ne louons vos données personnelles à aucun tiers à des fins commerciales.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">4. Vos droits (RGPD)</h4>
                      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous au 01 84 19 13 92.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
