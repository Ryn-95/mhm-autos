import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Shield, Star, Users, History } from "lucide-react";

export const metadata = {
  title: "À Propos - MHM Autos",
  description: "Découvrez l'histoire et les valeurs de MHM Autos, votre garage de confiance à Bagnolet.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Notre Histoire</h1>
            <p className="text-xl text-white/60">
              Depuis plus de 15 ans, MHM Autos s'impose comme la référence de la réparation automobile à Bagnolet, 
              alliant expertise technique et service client irréprochable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
             <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1530046339160-71153320c0b6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Atelier MHM Autos" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="space-y-6">
               <h2 className="text-3xl font-bold text-white">L'Excellence au Service de Votre Véhicule</h2>
               <p className="text-white/70 text-lg leading-relaxed">
                 Chez MHM Autos, nous croyons que chaque véhicule mérite une attention particulière. 
                 Notre atelier, situé au cœur de Bagnolet, est équipé des dernières technologies de diagnostic 
                 pour répondre aux exigences des véhicules modernes.
               </p>
               <p className="text-white/70 text-lg leading-relaxed">
                 Notre équipe de mécaniciens qualifiés est formée en permanence aux nouvelles technologies 
                 (hybride, électrique, systèmes d'aide à la conduite).
               </p>
             </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-neutral-900 border-t border-white/5">
        <Container>
          <h2 className="text-3xl font-bold text-white text-center mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Confiance",
                text: "Transparence totale sur les tarifs et les réparations effectuées."
              },
              {
                icon: Star,
                title: "Qualité",
                text: "Utilisation de pièces d'origine ou de qualité équivalente."
              },
              {
                icon: Users,
                title: "Proximité",
                text: "Un accueil chaleureux et une écoute attentive de vos besoins."
              },
              {
                icon: History,
                title: "Expérience",
                text: "Plus de 15 ans d'expertise au service de votre sécurité."
              }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-black rounded-2xl border border-white/5">
                <div className="bg-blue-500/10 p-4 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/60">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
