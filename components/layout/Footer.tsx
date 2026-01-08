import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/Logo";
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-16 h-16" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wider font-display">MHM</span>
                <span className="text-sm font-light text-gold tracking-[0.2em]">AUTOS</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              L&apos;excellence automobile à Bagnolet. Spécialiste VAG (Audi, VW, Skoda). 
              Diagnostic, mécanique de précision et entretien toutes marques.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://snapchat.com/add/maroinemhm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FFFC00] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#FFFC00]"
              >
                {/* Snapchat Icon equivalent or generic */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                   <path d="M12.005 0C12.785 0 13.525 0.32 13.935 0.94C14.345 1.56 14.345 2.45 14.075 3.32C13.885 3.93 13.955 4.35 14.315 4.63C14.735 4.96 15.425 4.98 15.935 4.99C16.925 5.02 18.255 5.06 19.245 5.92C19.745 6.35 19.955 6.94 19.895 7.53C19.825 8.24 19.465 8.79 19.145 9.16C18.775 9.58 18.825 10.02 19.015 10.37C19.255 10.8 19.705 11.02 20.255 11.12C21.435 11.34 22.865 11.61 23.085 12.91C23.185 13.48 23.005 13.98 22.695 14.32C22.255 14.81 21.655 14.99 21.055 15.08C20.455 15.17 19.845 15.19 19.535 15.68C19.345 15.98 19.345 16.42 19.525 16.92C19.805 17.69 20.325 19.13 18.905 20.36C18.175 21 17.155 21.23 16.325 21.14C15.685 21.07 15.185 20.8 14.745 20.57C14.345 20.36 13.965 20.16 13.515 20.16C13.115 20.16 12.765 20.33 12.405 20.51C11.905 20.76 11.335 21.04 10.635 21.12C9.84503 21.2 8.86503 21 8.16503 20.39C6.70503 19.11 7.23503 17.62 7.52503 16.85C7.70503 16.37 7.71503 15.94 7.52503 15.65C7.22503 15.17 6.64503 15.17 6.06503 15.08C5.48503 14.99 4.88503 14.81 4.45503 14.34C4.13503 13.99 3.94503 13.49 4.05503 12.92C4.28503 11.62 5.71503 11.35 6.89503 11.13C7.45503 11.03 7.89503 10.81 8.13503 10.38C8.33503 10.03 8.38503 9.59 8.01503 9.17C7.69503 8.8 7.33503 8.25 7.26503 7.54C7.20503 6.95 7.41503 6.36 7.91503 5.93C8.90503 5.07 10.235 5.03 11.225 5C11.735 4.99 12.425 4.97 12.845 4.64C13.205 4.36 13.275 3.94 13.085 3.33C12.815 2.46 12.815 1.57 13.225 0.95C13.635 0.33 14.375 0.01 15.155 0.01L12.005 0Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#E1306C] hover:text-white transition-all duration-300 border border-white/10 hover:border-[#E1306C]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">Nous Trouver</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <span className="mt-2">
                  14 Rue de l&apos;Épine Prolongée,<br />
                  93170 Bagnolet
                </span>
              </li>
              <li className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-gold/50 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <a href="tel:+33771785563" className="font-medium text-lg">07 71 78 55 63</a>
              </li>
              <li className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <a href="mailto:mhm.auto@hotmail.com">mhm.auto@hotmail.com</a>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4">
              {['Diagnostic Électronique', 'Réparation Boîte DSG', 'Mécanique Générale', 'Achat / Vente', 'Import / Export'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/60 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">Horaires</h3>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center text-white/80 border-b border-white/5 pb-2">
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> Lun - Sam</span>
                  <span className="font-medium">09:00 - 19:00</span>
                </li>
                <li className="flex justify-between items-center text-white/40 pt-1">
                  <span>Dimanche</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-xs">Fermé</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 MHM Autos. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
