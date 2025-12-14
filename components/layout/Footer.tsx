import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Car, MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl shadow-md">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-900 font-display">
                MHM Autos
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              L'excellence automobile à Bagnolet. 
              Nous prenons soin de votre véhicule avec passion et rigueur.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-neutral-200 text-neutral-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-6 font-display">Services</h3>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link href="/services" className="hover:text-blue-600 transition-colors">Révision Constructeur</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition-colors">Diagnostic Électronique</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition-colors">Freinage Haute Performance</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition-colors">Carrosserie & Peinture</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-6 font-display">Contact</h3>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-blue-600" />
                <span>14 Rue de l'Épine Prolongée,<br />93170 Bagnolet</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-blue-600" />
                <a href="tel:+33771785563" className="hover:text-blue-600 transition-colors font-medium">07 71 78 55 63</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-blue-600" />
                <a href="mailto:contact@mhmautos.fr" className="hover:text-blue-600 transition-colors">contact@mhmautos.fr</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-6 font-display">Horaires</h3>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex justify-between items-center border-b border-neutral-100 pb-2">
                <span>Lundi - Samedi</span>
                <span className="font-medium text-neutral-900">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span>Dimanche</span>
                <span className="text-red-500 font-medium bg-red-50 px-2 py-0.5 rounded-full text-xs">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-medium">
          <p>© {new Date().getFullYear()} MHM Autos. Excellence & Passion.</p>
          <div className="flex gap-8">
            <Link href="/legal" className="hover:text-neutral-900 transition-colors">Mentions Légales</Link>
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">Politique de Confidentialité</Link>
            <Link href="/sitemap" className="hover:text-neutral-900 transition-colors">Plan du site</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
