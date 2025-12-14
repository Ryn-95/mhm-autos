"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Wrench, Shield, Zap, MapPin, CheckCircle2, BadgeCheck, Search, Car, Disc, Thermometer, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { PricingSection } from "@/components/home/PricingSection";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col gap-0 bg-background text-foreground">
      {/* HERO SECTION - BRIGHT & CLEAN */}
      <section ref={ref} className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
           {/* High Key Photography - Clean White Studio Style */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
           <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
        </div>

        {/* Content */}
        <Container className="relative z-20 pt-20">
          <motion.div 
            style={{ y, opacity }}
            className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-neutral-200 backdrop-blur-xl shadow-sm">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-neutral-600 text-xs font-semibold uppercase tracking-widest font-sans">Atelier Premium à Bagnolet</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-neutral-900 font-display"
            >
              MHM AUTOS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-3xl text-neutral-600 max-w-3xl leading-snug font-light"
            >
              La nouvelle référence de l'entretien automobile. <br />
              <span className="font-medium text-neutral-900">Transparence</span>, <span className="font-medium text-neutral-900">Expertise</span> et <span className="font-medium text-neutral-900">Sérénité</span>.
            </motion.p>

            {/* CTA Buttons - Clean Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-sm pt-8"
            >
              <Button size="lg" className="h-14 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-base font-semibold px-8 w-full sm:w-auto shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                Prendre rendez-vous
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full border-neutral-200 bg-white/50 text-neutral-900 hover:bg-white text-base font-medium px-8 w-full sm:w-auto backdrop-blur-sm">
                <Phone className="w-4 h-4 mr-2" />
                07 71 78 55 63
              </Button>
            </motion.div>

          </motion.div>
        </Container>
      </section>

      {/* STATS - CLEAN STRIP */}
      <section className="bg-white py-16 border-y border-neutral-100">
        <Container>
          <div className="flex flex-wrap justify-center md:justify-between gap-12">
             {[
                { label: "Avis Clients", value: "4.9/5", icon: Star },
                { label: "Garantie", value: "Préservée", icon: Shield },
                { label: "Pièces", value: "Origine", icon: CheckCircle2 },
                { label: "Expérience", value: "15 Ans", icon: BadgeCheck }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-4 group cursor-default">
                 <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xl font-bold text-neutral-900 leading-none">{item.value}</span>
                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-wide mt-1">{item.label}</span>
                 </div>
               </div>
             ))}
          </div>
        </Container>
      </section>

      {/* SERVICES - APPLE CARD STYLE */}
      <Section className="bg-neutral-50 relative z-30 py-32">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display">Nos Services</h2>
              <p className="text-neutral-500 text-xl max-w-xl font-light">
                Technologies de pointe et savoir-faire artisanal pour votre véhicule.
              </p>
            </div>
            <Link href="/services" className="group flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Voir tous les services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col justify-between h-[400px]">
               <div>
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                     <Wrench className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-display">Mécanique Générale</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Entretien constructeur, distribution, embrayage. Une précision absolue pour la longévité de votre moteur.
                  </p>
               </div>
               <div className="relative h-40 rounded-2xl overflow-hidden mt-6">
                  <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Mecanique" />
               </div>
            </div>

            {/* Service 2 */}
             <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col justify-between h-[400px]">
               <div>
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                     <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-display">Diagnostic Expert</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Valises multi-marques dernière génération. Recherche de panne électronique complexe et reprogrammation.
                  </p>
               </div>
               <div className="relative h-40 rounded-2xl overflow-hidden mt-6">
                  <img src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?q=80&w=1770&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Diagnostic" />
               </div>
            </div>

            {/* Service 3 */}
             <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col justify-between h-[400px]">
               <div>
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                     <Car className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-display">Carrosserie & Peinture</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Redonnez l'éclat du neuf. Débosselage sans peinture, raccord et peinture complète haute qualité.
                  </p>
               </div>
               <div className="relative h-40 rounded-2xl overflow-hidden mt-6">
                  <img src="https://images.unsplash.com/photo-1626804475297-411d8717b22d?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Carrosserie" />
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHY US - CLEAN & TRUST */}
      <Section className="bg-white py-32">
        <Container>
           <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 font-display leading-tight">
                       L'exigence d'une <br />
                       <span className="text-blue-600">Concession.</span>
                    </h2>
                    <p className="text-xl text-neutral-600 font-light leading-relaxed">
                       Nous appliquons les standards les plus stricts pour l'entretien de votre véhicule. 
                       Sans les délais, sans les prix exorbitants.
                    </p>
                    
                    <ul className="space-y-6">
                       {[
                          "Respect strict du carnet constructeur",
                          "Pièces d'origine ou qualité équivalente",
                          "Transparence totale sur les tarifs",
                          "Véhicule de courtoisie disponible"
                       ].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-lg text-neutral-800 font-medium">
                             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                                <CheckCircle2 className="w-5 h-5" />
                             </div>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>
                 
                 <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
                    <img 
                       src="https://images.unsplash.com/photo-1632823469866-24a96e95b058?q=80&w=2074&auto=format&fit=crop" 
                       className="object-cover w-full h-full" 
                       alt="Atelier Clean" 
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50">
                       <div className="flex items-center justify-between">
                          <div>
                             <p className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">Satisfaction Client</p>
                             <p className="text-3xl font-bold text-neutral-900">4.9/5</p>
                          </div>
                          <div className="flex gap-1">
                             {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </Container>
      </Section>

      {/* PRICING SECTION - DARK MODE CLONE */}
      <PricingSection />

      {/* LOCATION - CLEAN MAP */}
      <Section className="bg-white pt-0 pb-32">
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-neutral-900 rounded-[2.5rem] p-12 text-white flex flex-col justify-between min-h-[500px]">
                  <div>
                     <h2 className="text-4xl font-bold mb-8 font-display">Nous rendre visite</h2>
                     <div className="space-y-8">
                        <div className="flex gap-6">
                           <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                              <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-lg font-semibold mb-1">Adresse</p>
                              <p className="text-white/60 leading-relaxed">Résidence du Parc de la Noue<br />14 Rue de l'Épine Prolongée<br />93170 Bagnolet</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                              <Phone className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-lg font-semibold mb-1">Contact</p>
                              <p className="text-white/60">07 71 78 55 63<br />contact@mhmautos.fr</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="pt-12">
                     <Link href="/contact">
                        <Button className="w-full bg-white text-black hover:bg-gray-100 h-14 rounded-2xl text-lg font-bold">
                           Itinéraire & Horaires
                        </Button>
                     </Link>
                  </div>
               </div>
               
               <div className="rounded-[2.5rem] overflow-hidden border border-neutral-100 shadow-lg h-[500px] relative bg-neutral-100">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.238497886475!2d2.417088776854589!3d48.87274157133379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d4806740611%3A0x70c0c732049e793!2s14%20Rue%20de%20l&#39;Epine%20Prolong%C3%A9e%2C%2093170%20Bagnolet!5e0!3m2!1sfr!2sfr!4v1709664567890!5m2!1sfr!2sfr" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 />
               </div>
            </div>
        </Container>
      </Section>
    </div>
  );
}
