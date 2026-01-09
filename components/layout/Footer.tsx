import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/Logo";
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden rounded-t-[24px] md:rounded-t-[40px]">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8 text-white" />
              <span className="text-xl font-semibold text-white tracking-wide font-display">MHM <span className="text-gold">AUTOS</span></span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              L&apos;art de la mécanique de précision. <br /> Spécialiste VAG & Multimarques.
              <br />Votre véhicule mérite l&apos;exception.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex gap-16 flex-wrap">
            <div className="space-y-4">
              <h4 className="text-white text-xs font-medium uppercase tracking-wider opacity-40">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/services" className="hover:text-white transition-colors">Diagnostic</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Boîte DSG</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Mécanique</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
               <h4 className="text-white text-xs font-medium uppercase tracking-wider opacity-40">Contact</h4>
               <ul className="space-y-2 text-sm text-white/60">
                 <li><a href="tel:+33771785563" className="hover:text-white transition-colors">07 71 78 55 63</a></li>
                 <li><a href="mailto:mhm.auto@hotmail.com" className="hover:text-white transition-colors">mhm.auto@hotmail.com</a></li>
                 <li>Bagnolet, 93170</li>
               </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
          <p>© 2026 MHM Autos. Designed for excellence.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Légal</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
