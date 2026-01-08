"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Shield, Zap, Car, Settings, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <motion.div 
            className="absolute inset-0"
            style={{ y }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1652890196230-4fd9acadd0e5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Atelier MHM Autos" 
              fill
              priority
              quality={90}
              className="object-cover opacity-60 scale-105 animate-slow-zoom object-[center_60%]"
              sizes="100vw"
            />
          </motion.div>
        </div>

        <Container className="relative z-20 h-full flex flex-col justify-between py-32 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 md:mt-0"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1]">
              L&apos;EXCELLENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-shimmer">AUTOMOBILE</span>
            </h1>
            <p className="block md:hidden mt-8 text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
              Spécialiste VAG & Multimarques.
              Diagnostic, Réparation, Boîte DSG, Import/Export.
              <span className="block mt-4 text-white font-medium">Votre véhicule mérite le meilleur traitement.</span>
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="hidden md:block text-base md:text-lg text-white/70 max-w-xl mx-auto font-light leading-relaxed">
              Spécialiste VAG & Multimarques.
              Diagnostic, Réparation, Boîte DSG, Import/Export.
              <span className="block mt-4 text-white font-medium">Votre véhicule mérite le meilleur traitement.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 rounded-full bg-gold hover:bg-white text-black font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_rgba(196,154,44,0.5)]">
                  Prendre Rendez-vous
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 px-8 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm text-base tracking-wide transition-all duration-300">
                  Nos Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>

      </section>

      {/* Brands Marquee */}
      <div className="bg-neutral-950 border-y border-white/5 py-8 overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div 
            className="flex gap-16 items-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 pr-16"
            animate={{ x: [0, -1035] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20
            }}
          >
             {[...Array(2)].map((_, i) => (
               <div key={i} className="flex gap-16">
                 <span className="text-2xl font-bold text-white tracking-tighter">AUDI</span>
                 <span className="text-2xl font-bold text-white tracking-tighter">VOLKSWAGEN</span>
                 <span className="text-2xl font-bold text-white tracking-tighter">SKODA</span>
                 <span className="text-2xl font-bold text-white tracking-tighter">SEAT</span>
                 <span className="text-2xl font-bold text-white tracking-tighter">PORSCHE</span>
                 <span className="text-2xl font-bold text-white tracking-tighter">BMW</span>
                 <span className="text-2xl font-bold text-white tracking-tighter">MERCEDES</span>
               </div>
             ))}
          </motion.div>
        </div>
      </div>

      {/* Services Bento Grid */}
      <Section className="bg-black">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nos Expertises</h2>
            <p className="text-white/50">Des solutions techniques avancées pour votre véhicule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card - Diagnostic */}
            <div className="md:col-span-2 row-span-1 bg-neutral-900/50 rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Settings className="w-32 h-32 text-gold" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-4 text-gold">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnostic Électronique</h3>
                  <p className="text-white/60 max-w-md">
                    Recherche de panne complexe avec valises constructeurs dernière génération. 
                    Mise à jour calculateurs et reprogrammation.
                  </p>
                </div>
              </div>
            </div>

            {/* Tall Card - DSG */}
            <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-neutral-900/50 to-black rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
               <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Spécialiste Boîte DSG</h3>
                  <p className="text-white/60">
                    Entretien, réparation et optimisation de boîtes automatiques VAG (DSG6, DSG7, S-Tronic).
                  </p>
                  <Button variant="link" className="text-gold p-0 h-auto justify-start mt-4 group-hover:translate-x-2 transition-transform">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
               </div>
            </div>

            {/* Card - Import/Export */}
            <div className="md:col-span-1 bg-neutral-900/50 rounded-3xl p-8 border border-white/10 group hover:border-gold/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Import / Export</h3>
              <p className="text-white/60">
                Achat et vente de véhicules. Recherche personnalisée en Europe.
              </p>
            </div>

            {/* Card - Mécanique */}
            <div className="md:col-span-1 bg-neutral-900/50 rounded-3xl p-8 border border-white/10 group hover:border-gold/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4 text-green-400">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mécanique Générale</h3>
              <p className="text-white/60">
                Entretien courant, distribution, freinage, suspension sur toutes marques.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Prêt à rouler en toute <span className="text-gold">sérénité</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-16 px-10 rounded-full bg-white text-black font-bold text-xl hover:bg-neutral-200 shadow-xl">
                Prendre Rendez-vous
              </Button>
            </Link>
            <Link href="tel:+33771785563">
               <Button variant="outline" size="lg" className="h-16 px-10 rounded-full border-white/20 text-white hover:bg-white/10 text-xl font-medium">
                 07 71 78 55 63
               </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
