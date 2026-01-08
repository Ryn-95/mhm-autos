import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Logo } from "@/components/ui/Logo";

export const metadata = {
  title: "À Propos - MHM Autos",
  description: "L'histoire et les valeurs de MHM Autos.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Plus qu&apos;un garage, <br />
                <span className="text-gold">une passion.</span>
              </h1>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Fondé avec la volonté de proposer une alternative premium aux concessions, 
                  MHM Autos s&apos;est imposé comme la référence à Bagnolet pour l&apos;entretien 
                  des véhicules allemands et premium.
                </p>
                <p>
                  Notre atelier est équipé des dernières technologies de diagnostic et d&apos;outillage 
                  spécifique pour intervenir sur les systèmes les plus complexes (Boîtes DSG, 
                  Gestion électronique, Systèmes hybrides).
                </p>
                <p>
                  Nous croyons en une relation de confiance. Ici, pas de réparation inutile. 
                  Nous vous expliquons chaque intervention et vous validons chaque étape.
                </p>
              </div>
            </div>
            <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-neutral-900 to-black rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden relative">
                    {/* Abstract Car Silhouette or Logo Art */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 to-transparent opacity-50" />
                    <Logo className="w-64 h-64 opacity-20" />
                    
                    {/* Stat Cards Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between text-center">
                            <div>
                                <div className="text-3xl font-bold text-white">10+</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Années d&apos;xp</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">4.9/5</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Avis Clients</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">2500+</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Véhicules</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
