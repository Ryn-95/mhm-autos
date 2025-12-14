"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Avis", href: "/#reviews" },
  { name: "À Propos", href: "/about" },
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
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "relative w-full max-w-5xl rounded-full border transition-all duration-300",
          scrolled
            ? "bg-white/80 border-neutral-200 backdrop-blur-xl shadow-lg py-3 px-6"
            : "bg-white/60 border-transparent backdrop-blur-md py-4 px-6"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className={cn("text-lg font-bold tracking-tight", scrolled ? "text-neutral-900" : "text-neutral-900")}>
              MHM Autos
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === link.href 
                    ? "text-blue-600 bg-blue-50 font-semibold" 
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
             <Button size="sm" variant="ghost" className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full h-9 px-4">
                <Phone className="w-4 h-4 mr-2" />
                07 71 78 55 63
             </Button>
             <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full h-9 px-5 shadow-lg shadow-blue-600/20">
                <Calendar className="w-4 h-4 mr-2" />
                Rendez-vous
             </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-3xl p-6 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center p-4 rounded-2xl text-lg font-medium transition-colors",
                    pathname === link.href 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button className="w-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 rounded-xl h-12 text-base shadow-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl h-12 text-base shadow-lg shadow-blue-600/20">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
