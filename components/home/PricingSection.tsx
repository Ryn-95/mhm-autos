"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Truck, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="bg-black py-32 font-sans text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight">
            Choisissez l'abonnement qui <br /> vous convient
          </h2>

          {/* Toggle Switch */}
          <div className="inline-flex bg-[#1C1C1E] p-1 rounded-full relative">
            <div className="relative flex items-center">
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "relative z-10 px-12 py-3 text-sm font-medium rounded-full transition-colors duration-300",
                  isAnnual ? "text-black" : "text-neutral-400 hover:text-white"
                )}
              >
                MHM Plus
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "relative z-10 px-12 py-3 text-sm font-medium rounded-full transition-colors duration-300",
                  !isAnnual ? "text-black" : "text-neutral-400 hover:text-white"
                )}
              >
                MHM One
              </button>
              <motion.div
                className="absolute top-0 bottom-0 bg-white rounded-full shadow-sm"
                initial={false}
                animate={{
                  x: isAnnual ? 0 : "100%",
                  width: "50%"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#111111] rounded-[2.5rem] p-10 md:p-12 border border-white/5 relative overflow-hidden">
          
          {/* Card Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">MHM Plus</h3>
              <p className="text-neutral-500 text-sm">
                3780€ htva (coût de la souscription annuel au service d'abonnement)
              </p>
            </div>
            <Button className="bg-[#2563EB] hover:bg-blue-600 text-white rounded-full px-8 py-6 text-base font-medium transition-all">
              S'abonner à Plus
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Image */}
            <div className="space-y-6">
              <div className="bg-white rounded-[2rem] aspect-square flex items-center justify-center p-8 relative overflow-hidden group">
                 {/* Placeholder for Car Image - Using a clean cutout style if possible */}
                 <img 
                   src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
                   className="w-full h-auto object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                   alt="Luxury Cars"
                 />
              </div>
              <p className="text-neutral-500 text-xs">
                Catégorie 2 - 3480€/mois • 2000km/mois inclus - 1.2€/km supp. (htva)
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="flex flex-col justify-between">
              <ul className="space-y-0">
                {[
                  "Accès aux services d'entretien premium et prioritaire.",
                  "Véhicule de courtoisie catégorie luxe inclus.",
                  "Flexibilité totale : annulation sans frais sous 24h.",
                  "Abonnement partageable pour toute la famille."
                ].map((item, i) => (
                  <li key={i} className="py-6 border-b border-white/10 text-white/90 font-light text-lg flex items-start gap-4">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <div className="flex items-start gap-4 mb-3">
                  <Truck className="w-6 h-6 text-[#2563EB] mt-1" />
                  <h4 className="text-[#2563EB] font-medium text-lg">Service de voiturier</h4>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed pl-10">
                  Nous récupérons votre véhicule où vous le voulez et quand vous le voulez. 
                  Disponible à Bagnolet, Paris et toute l'Île-de-France.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Link */}
          <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-4">
            <Phone className="w-5 h-5 text-[#2563EB]" />
            <div>
              <a href="#" className="text-[#2563EB] font-medium hover:underline block">Appeler un conseiller</a>
              <span className="text-neutral-500 text-sm">Obtenez de l'aide en contactant par téléphone un expert.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
