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
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out",
          scrolled
            ? "w-full max-w-4xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-gold/5"
            : "w-full max-w-7xl bg-transparent px-0 py-4"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
           <Logo className={cn("transition-all duration-300", scrolled ? "w-10 h-10" : "w-14 h-14")} />
           <span className={cn(
             "font-display font-bold text-white tracking-wider transition-all duration-300",
             scrolled ? "text-lg" : "text-2xl"
           )}>
             MHM <span className="text-gold font-light">AUTOS</span>
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className={cn(
            "flex items-center gap-1 p-1 rounded-full transition-all duration-300",
            scrolled ? "bg-white/5 border border-white/5" : ""
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  pathname === link.href 
                    ? "bg-gold text-black shadow-lg shadow-gold/20" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
           {!scrolled && (
             <div className="flex flex-col items-end text-right mr-2">
                <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">Urgence & RDV</span>
                <span className="text-white font-bold tracking-wider">07 71 78 55 63</span>
             </div>
           )}
           <Link href="/contact">
             <Button 
                size={scrolled ? "default" : "lg"} 
                className={cn(
                  "rounded-full font-bold uppercase tracking-wider transition-all duration-300",
                  scrolled 
                    ? "bg-white text-black hover:bg-gold hover:text-black"
                    : "bg-gold text-black hover:bg-white hover:text-black shadow-lg shadow-gold/20"
                )}
             >
                <Calendar className={cn("w-4 h-4 mr-2")} />
                Rendez-vous
             </Button>
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 z-50"
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-black to-black opacity-50" />
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
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
              className="pt-12 flex flex-col gap-4 w-full px-8 max-w-sm"
            >
              <Button className="w-full bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black h-14 text-lg font-bold rounded-full backdrop-blur-md">
                <Phone className="w-5 h-5 mr-3" />
                07 71 78 55 63
              </Button>
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
