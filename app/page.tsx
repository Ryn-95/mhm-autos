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
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col overflow-hidden rounded-b-[24px] md:rounded-b-[40px] bg-neutral-950">
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
              quality={80}
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
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-semibold text-white tracking-tighter leading-[1.05]">
              Perfection. <br />
              <span className="text-gold/70">Rien de moins.</span>
            </h1>
            <p className="block md:hidden mt-8 text-base text-white/60 max-w-sm mx-auto font-light leading-relaxed">
              L&apos;art de la mécanique de précision. <br />
              Spécialiste VAG & Multimarques.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="hidden md:block text-lg md:text-xl text-white/60 max-w-lg mx-auto font-light leading-relaxed tracking-wide">
              L&apos;art de la mécanique de précision. <br />
              Spécialiste VAG & Multimarques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full pt-4">
              <Button size="lg" className="h-11 px-8 rounded-full bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wide transition-all duration-300" asChild>
                <Link href="/contact">
                  Prendre Rendez-vous
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-8 rounded-full border-white/20 bg-black/20 text-white hover:bg-white hover:text-black backdrop-blur-sm text-sm font-medium tracking-wide transition-all duration-300" asChild>
                <Link href="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>

      </section>

      {/* Brands Marquee */}
      <div className="bg-white py-12 overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div 
            className="flex gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 pr-20"
            animate={{ x: [0, -1035] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30
            }}
          >
             {[...Array(2)].map((_, i) => (
               <div key={i} className="flex gap-20">
                  <span className="text-3xl font-bold text-gold tracking-tighter">AUDI</span>
                  <span className="text-3xl font-bold text-gold tracking-tighter">VOLKSWAGEN</span>
                  <span className="text-3xl font-bold text-gold tracking-tighter">SKODA</span>
                  <span className="text-3xl font-bold text-gold tracking-tighter">SEAT</span>
                  <span className="text-3xl font-bold text-gold tracking-tighter">PORSCHE</span>
                  <span className="text-3xl font-bold text-gold tracking-tighter">BMW</span>
                  <span className="text-3xl font-bold text-gold tracking-tighter">MERCEDES</span>
                </div>
             ))}
          </motion.div>
        </div>
      </div>

      {/* About Section - NEW */}
      <Section className="bg-neutral-50 py-32">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.1]">
                L&apos;excellence n&apos;est pas un acte, <br />
                <span className="text-gold font-medium">c&apos;est une habitude.</span>
              </h2>
              <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                Chez <span className="text-black font-bold">MHM Autos</span>, nous ne réparons pas simplement des véhicules. Nous restaurons des performances. 
                Spécialistes des motorisations complexes et des boîtes DSG, nous appliquons une rigueur chirurgicale à chaque intervention.
              </p>
              <div className="pt-4">
                <Button variant="link" className="text-neutral-900 p-0 h-auto text-lg font-medium hover:text-gold transition-colors" asChild>
                  <Link href="/about">
                    En savoir plus sur notre atelier <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative min-h-[300px] h-[300px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl mt-8 lg:mt-0 block">
               <Image 
                 src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Mécanique de précision"
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 50vw"
                 priority
               />
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Bento Grid */}
      <Section className="bg-white py-32">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-6 tracking-tight">Expertise Technique.</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Une maîtrise absolue des technologies automobiles modernes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
            {/* Large Card - Expertise DSG */}
            <div className="md:col-span-2 row-span-1 bg-neutral-900 rounded-[2rem] p-10 border border-neutral-800 relative overflow-hidden group text-white shadow-2xl">
               <div className="absolute inset-0">
                 <Image
                   src="https://images.unsplash.com/photo-1581715786338-71b33869decd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   alt="Réparation Boîte DSG"
                   fill
                   className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out"
                   sizes="(max-width: 768px) 100vw, 66vw"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
               <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 text-white backdrop-blur-md border border-white/10">
                    <Settings className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Expertise DSG</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-8 text-lg max-w-lg">
                    Réparation et optimisation des boîtes automatiques VAG. Redonnez fluidité et performance à votre transmission.
                  </p>
                  <Button variant="link" className="text-white p-0 h-auto justify-start group-hover:translate-x-2 transition-transform text-lg" asChild>
                    <Link href="/services">
                      En savoir plus <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                    </Link>
                  </Button>
               </div>
            </div>

            {/* Tall Card - Diagnostic */}
            <div className="md:col-span-1 md:row-span-2 bg-neutral-900 rounded-[2rem] p-10 relative overflow-hidden group shadow-2xl text-white">
              <div className="absolute inset-0">
                 <Image
                   src="https://images.unsplash.com/photo-1758411898158-213a318e2442?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   alt="Diagnostic Électronique"
                   fill
                   className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out"
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white backdrop-blur-md border border-white/10 shadow-sm">
                  <Zap className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Diagnostic de Précision</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Analyse approfondie avec valises constructeurs. Identification précise des pannes électroniques complexes.
                  </p>
                </div>
              </div>
            </div>

            {/* Card - Import/Export */}
            <div className="md:col-span-1 bg-neutral-900 rounded-[2rem] p-10 relative overflow-hidden group shadow-2xl text-white">
              <div className="absolute inset-0">
                 <Image
                   src="https://images.unsplash.com/photo-1618849985511-7dbc48d7d2e4?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   alt="Import Auto Premium"
                   fill
                   className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out"
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white backdrop-blur-md border border-white/10 shadow-sm">
                  <Globe className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Sourcing Auto</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Recherche personnalisée et import de véhicules premium.
                  </p>
                </div>
              </div>
            </div>

            {/* Card - Mécanique */}
            <div className="md:col-span-1 bg-neutral-900 rounded-[2rem] p-10 relative overflow-hidden group shadow-2xl text-white">
              <div className="absolute inset-0">
                 <Image
                   src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   alt="Entretien Mécanique"
                   fill
                   className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out"
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white backdrop-blur-md border border-white/10 shadow-sm">
                  <Wrench className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Entretien</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Maintenance rigoureuse respectant les normes constructeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust / Testimonials Section - NEW */}
      <Section className="bg-white py-32 text-neutral-900 overflow-hidden relative">
        <Container className="relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight text-neutral-900">La confiance se mérite.</h2>
             <p className="text-neutral-500 text-lg font-light">
               Chaque jour, de nouveaux conducteurs exigeants nous rejoignent. 
               Une réputation bâtie sur la transparence et la qualité.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  text: "Professionnel, disponible et sympathique. Un grand merci pour votre réactivité. A recommander les yeux fermés. Merci encore", 
                  author: "Fatou Cisse", 
                  date: "il y a 2 ans" 
                },
                { 
                  text: "Au top , très bon mecano, il a réparer ma voiture alors que 3 garages n'avaient pas réussi à trouver la panne. Je le recommande a 1000%", 
                  author: "S-k", 
                  date: "il y a 3 ans" 
                },
                { 
                  text: "Très bon diagnostic, réparation rapide et efficace. Je recommande ce garage pour son sérieux et son professionnalisme.", 
                  author: "Jean-Pierre D.", 
                  date: "il y a 1 an" 
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-neutral-50 border border-neutral-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div>
                    <div className="flex gap-1 mb-4 text-yellow-400">
                      {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                    </div>
                    <p className="text-neutral-600 font-light italic mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">{testimonial.author}</div>
                      <div className="text-xs text-neutral-400">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
           
           <div className="text-center">
             <Button className="rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-300 gap-2 px-8 h-12 shadow-lg" asChild>
               <Link href="https://www.google.com/search?sa=X&sca_esv=8f86c1cd49cc125e&biw=1470&bih=747&aic=0&sxsrf=ANbL-n6CLG7nsSQKQnm293P-RLpY_I_QyQ:1767923265061&q=Mhm%20autos%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDI0NTSxNDYzNDM2Mje1NDQ03MDI-IqRzzcjVyGxtCS_WMGxLLN4ESuaAAD1eAgGPAAAAA&rldimm=9215149361632759111&tbm=lcl&hl=fr-FR&ved=0CBIQ5foLahcKEwigxvanrP2RAxUAAAAAHQAAAAAQCg#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2pjNE5rTTVSRjkwYWtGT1kxYzJWMVJwVEhwWVEzYxAB" target="_blank" rel="noopener noreferrer">
                 <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full p-0.5 border border-neutral-100">
                   <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#EA4335" d="M12 5.04c1.64 0 3.16.6 4.32 1.6l3.24-3.24C17.6 1.56 14.96.52 12 .52c-4.36 0-8.08 2.6-9.88 6.36l3.8 2.96C7.08 7.08 9.32 5.04 12 5.04"/><path fill="#FBBC05" d="M23.52 12.2c0-.84-.08-1.64-.2-2.4H12v4.52h6.44c-.28 1.48-1.12 2.72-2.36 3.56l3.8 2.96c2.24-2.08 3.64-5.16 3.64-8.64"/><path fill="#34A853" d="M12 23.48c3.24 0 5.96-1.08 7.96-2.92l-3.8-2.96c-1.08.72-2.44 1.16-4.16 1.16-2.68 0-4.92-1.8-5.72-4.24l-3.8 2.96c1.8 3.76 5.52 6.36 9.88 6.36"/><path fill="#4285F4" d="M6.28 14.52c-.2-.6-.32-1.24-.32-1.92s.12-1.32.32-1.92l-3.8-2.96C1.04 9.6.52 11.24.52 13s.52 3.4 1.96 5.28l3.8-2.96"/></svg>
                 </span>
                 Voir tous les avis sur Google
               </Link>
             </Button>
           </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <Container className="relative z-10 text-center">
          <div className="space-y-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-neutral-900 tracking-tighter">
              Prêt pour l&apos;exception ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="h-14 px-10 rounded-full bg-black text-white font-medium text-lg hover:bg-neutral-800 shadow-2xl shadow-black/10 transition-all duration-300" asChild>
                <Link href="/contact">
                  Prendre Rendez-vous
                </Link>
              </Button>
               <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-neutral-200 text-neutral-900 hover:bg-neutral-100 text-lg font-medium transition-all duration-300" asChild>
                 <Link href="tel:+33771785563">
                   07 71 78 55 63
                 </Link>
               </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
