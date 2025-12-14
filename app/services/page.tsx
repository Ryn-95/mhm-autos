import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Disc, Activity, Car, Thermometer, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "revision",
    title: "Révision & Entretien",
    description: "Vidange, filtres, niveaux. Maintenez votre garantie constructeur avec nos révisions certifiées.",
    icon: Wrench,
    features: ["Vidange huile synthèse", "Remplacement filtres", "Mise à niveau liquides", "Diagnostic sécurité 50 points"]
  },
  {
    id: "freinage",
    title: "Freinage",
    description: "Votre sécurité est notre priorité. Contrôle et remplacement de plaquettes et disques.",
    icon: Disc,
    features: ["Plaquettes de frein", "Disques de frein", "Liquide de frein", "Contrôle ABS/ESP"]
  },
  {
    id: "diag",
    title: "Diagnostic Électronique",
    description: "Recherche de panne complexe avec valises multi-marques dernière génération.",
    icon: Activity,
    features: ["Lecture codes défauts", "Reprogrammation", "Mise à jour calculateurs", "Recherche de panne électrique"]
  },
  {
    id: "carrosserie",
    title: "Carrosserie & Peinture",
    description: "Redonnez l'éclat du neuf à votre véhicule. Débosselage, peinture et réparation collision.",
    icon: Car,
    features: ["Débosselage sans peinture", "Raccord peinture", "Remplacement pièces", "Lustrage complet"]
  },
  {
    id: "climatisation",
    title: "Climatisation",
    description: "Entretien et recharge de votre système de climatisation pour un confort optimal.",
    icon: Thermometer,
    features: ["Recharge gaz R134a/1234yf", "Désinfection habitacle", "Filtre habitacle", "Recherche de fuite"]
  },
  {
    id: "pneus",
    title: "Pneumatiques",
    description: "Vente, montage et équilibrage de pneus toutes marques. Géométrie 3D.",
    icon: Layers,
    features: ["Montage & Équilibrage", "Géométrie & Parallélisme", "Réparation crevaison", "Permutation"]
  }
];

export const metadata = {
  title: "Nos Services - MHM Autos Bagnolet",
  description: "Découvrez nos prestations : révision, freinage, diagnostic, carrosserie à Bagnolet.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Expertise & Précision</h1>
            <p className="text-xl text-white/60">
              Nous intervenons sur tous types de véhicules avec le même niveau d'exigence que les concessions, 
              à des tarifs maîtrisés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-neutral-900 border-white/10 hover:border-blue-500/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-white/60 text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-white/80">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center bg-white/5 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Besoin d'un devis spécifique ?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour une estimation précise. 
              Nos devis sont clairs, détaillés et sans surprise.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full">
                Demander un devis
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
