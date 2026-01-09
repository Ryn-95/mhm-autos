"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname !== '/';
  const isDarkText = isLightPage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300",
      // On retire l'invisibilité globale pour garder le logo/burger accessibles
    )}>
      <motion.div
        initial={{ y: -100, opacity: 0, maxWidth: "80rem" }}
        animate={{ 
            y: 0, 
            opacity: 1,
            visibility: "visible",
            
            maxWidth: scrolled ? "56rem" : "80rem",
            backgroundColor: scrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0)",
            // La bordure est gérée ici : transparente si pas scrollé, visible si scrollé
            borderColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
            paddingTop: scrolled ? "12px" : "16px",
            paddingBottom: scrolled ? "12px" : "16px",
            paddingLeft: scrolled ? "24px" : "0px",
            paddingRight: scrolled ? "24px" : "0px",
            boxShadow: scrolled ? "0 25px 50px -12px rgba(212, 175, 55, 0.05)" : "none",
            // On gère le flou via le style directement pour l'animer ou le désactiver
            backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 20,
            mass: 0.8
        }}
        className={cn(
          "relative flex items-center justify-between rounded-full w-full z-50",
          // On retire 'border' et 'backdrop-blur-xl' d'ici car ils créaient le contour fantôme
          // On laisse motion gérer les styles
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
           <Logo className={cn("transition-all duration-300", (isDarkText && !isOpen) ? "text-black" : "text-white", scrolled ? "w-8 h-8" : "w-10 h-10")} />
           <span className={cn(
             "font-display font-semibold tracking-wide transition-all duration-300",
             (isDarkText && !isOpen) ? "text-black" : "text-white",
             scrolled ? "text-base" : "text-lg"
           )}>
             MHM <span className="text-gold">AUTOS</span>
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
          <div className={cn(
            "flex items-center gap-1 p-1 rounded-full transition-all duration-300",
            scrolled ? "bg-white/5 border border-white/5" : ""
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300",
                  pathname === link.href 
                    ? (isDarkText ? "bg-black text-white shadow-lg shadow-black/10" : "bg-white text-black shadow-lg shadow-white/10")
                    : (isDarkText ? "text-black/70 hover:text-black hover:bg-black/5" : "text-white/70 hover:text-white hover:bg-white/5")
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="/contact">
             <Button 
                size={scrolled ? "default" : "lg"} 
                className={cn(
                  "rounded-full font-bold uppercase tracking-wider transition-all duration-300",
                  scrolled 
                    ? "bg-white text-black hover:bg-gold hover:text-black"
                    : (isDarkText 
                        ? "bg-gold text-black hover:bg-black hover:text-white shadow-lg shadow-gold/20"
                        : "bg-gold text-black hover:bg-white hover:text-black shadow-lg shadow-gold/20")
                )}
             >
                <Calendar className={cn("w-4 h-4 mr-2")} />
                Rendez-vous
             </Button>
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 z-50", (isDarkText && !isOpen) ? "text-black" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8 text-gold" /> : <Menu className="w-8 h-8" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-black to-black opacity-50 pointer-events-none" />
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="relative z-50"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-display font-bold uppercase tracking-tight transition-colors",
                    pathname === link.href 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-gold to-white" 
                      : "text-white/50 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-12 flex flex-col gap-4 w-full px-8 max-w-sm relative z-50"
            >
              <a href="tel:0771785563" className="w-full">
                <Button className="w-full bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black h-14 text-lg font-bold rounded-full backdrop-blur-md">
                  <Phone className="w-5 h-5 mr-3" />
                  07 71 78 55 63
                </Button>
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full bg-gold text-black hover:bg-gold-light h-14 text-lg font-bold rounded-full shadow-xl shadow-gold/20">
                  <Calendar className="w-5 h-5 mr-3" />
                  Prendre rendez-vous
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
