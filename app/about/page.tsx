import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Logo } from "@/components/ui/Logo";
import Image from "next/image";

export const metadata = {
  title: "À Propos - MHM Autos",
  description: "L'histoire et les valeurs de MHM Autos.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tighter">
                Plus qu&apos;un garage, <br />
                <span className="text-gold">une passion.</span>
              </h1>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
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
            <div className="relative group">
                <div className="aspect-square bg-neutral-50 rounded-[3rem] border border-neutral-100 flex items-center justify-center overflow-hidden relative shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-[1.02]">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <Image 
                        src="https://images.unsplash.com/photo-1649628779463-85a16a06c987?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Atelier MHM Autos"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    
                    {/* Stat Cards Overlay - Glassmorphism */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-white/20 group-hover:border-white/30">
                        <div className="flex justify-between text-center relative z-10">
                            <div>
                                <div className="text-xl md:text-3xl font-bold text-white drop-shadow-md">25+</div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase tracking-wider font-medium">Années d&apos;xp</div>
                            </div>
                            <div className="w-px bg-white/20" />
                            <div>
                                <div className="text-xl md:text-3xl font-bold text-white drop-shadow-md">4.4/5</div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase tracking-wider font-medium">Note Google</div>
                            </div>
                            <div className="w-px bg-white/20" />
                            <div>
                                <div className="text-xl md:text-3xl font-bold text-white drop-shadow-md">2500+</div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase tracking-wider font-medium">Véhicules</div>
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
