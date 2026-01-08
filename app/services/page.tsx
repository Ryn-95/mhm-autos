import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Zap, Wrench, Globe, Gauge, PenTool, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Diagnostic Électronique",
    description: "Lecture de codes défauts, recherche de pannes complexes, mise à jour des calculateurs. Nous utilisons les valises officielles.",
    icon: Zap,
    features: ["Valise VAG officielle", "Recherche de panne", "Reprogrammation", "Mise à jour soft"]
  },
  {
    title: "Spécialiste Boîte DSG",
    description: "Expertise complète sur les boîtes automatiques du groupe VAG (DSG6, DSG7, S-Tronic). Réparation mécatronique et embrayage.",
    icon: Settings,
    features: ["Vidange boîte auto", "Remplacement embrayage", "Réparation Mécatronique", "Calibrage"]
  },
  {
    title: "Mécanique Générale",
    description: "Entretien courant et grosses réparations moteur. Distribution, joint de culasse, turbo, injection.",
    icon: Wrench,
    features: ["Distribution", "Freinage", "Amortisseurs", "Vidange moteur"]
  },
  {
    title: "Import / Export",
    description: "Vous cherchez un véhicule spécifique ? Nous le trouvons pour vous en Allemagne ou ailleurs. Démarches administratives incluses.",
    icon: Globe,
    features: ["Recherche personnalisée", "Gestion administrative", "Livraison clé en main", "Garantie"]
  },
  {
    title: "Performance & Optimisation",
    description: "Amélioration des performances de votre véhicule. Stage 1, éthanol E85, suppression FAP/EGR (usage circuit).",
    icon: Gauge,
    features: ["Conversion E85", "Stage 1", "Optimisation conso", "Décalaminage"]
  },
  {
    title: "Carrosserie & Esthétique",
    description: "Redonnez l&apos;éclat du neuf à votre auto. Débosselage, peinture, detailing et protection céramique.",
    icon: PenTool,
    features: ["Peinture complète", "Raccord", "Lustrage", "Rénovation optiques"]
  }
];

export const metadata = {
  title: "Nos Services - MHM Autos Bagnolet",
  description: "Découvrez nos prestations : Diagnostic, Boîte DSG, Mécanique, Import/Export.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <Section className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expertise <span className="text-gold">&</span> Précision
            </h1>
            <p className="text-xl text-white/60">
              Nous intervenons sur tous types de véhicules avec le même niveau d&apos;exigence que les concessions, 
              à des tarifs maîtrisés. Spécialisation groupe VAG.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-neutral-900/50 border-white/10 hover:border-gold/30 transition-all duration-300 group p-8 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300 text-white">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-gold/70" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full rounded-full border-white/10 text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                    Demander un devis
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="mt-24 bg-gradient-to-r from-neutral-900 to-black rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
                <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Garantie Constructeur Préservée</h2>
                <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Nous respectons scrupuleusement les préconisations des constructeurs. 
                Votre garantie officielle reste valable lors de nos interventions.
                </p>
                <Link href="/contact">
                <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black font-bold hover:bg-neutral-200">
                    Prendre Rendez-vous
                </Button>
                </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
