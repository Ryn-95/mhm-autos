import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { BookingCalendar } from "@/components/features/BookingCalendar";
import { MapPin, Phone, Mail, Clock, Shield } from "lucide-react";

export const metadata = {
  title: "Contact & Rendez-vous - MHM Autos",
  description: "Prenez rendez-vous chez MHM Autos Bagnolet. Créneaux limités.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">Contactez-nous</h1>
                <p className="text-xl text-neutral-500 font-light">
                  Réservez votre créneau d'atelier directement en ligne.
                  Attention, les places sont limitées à 4 par jour pour garantir la qualité.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="p-6 bg-white border-neutral-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Notre Adresse</h3>
                    <p className="text-neutral-500 font-light">
                      14 Rue de l&apos;Épine Prolongée<br />
                      93170 Bagnolet, France
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-neutral-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Téléphone</h3>
                    <p className="text-neutral-500 mb-2 font-light">Du Lundi au Samedi, 09h - 19h</p>
                    <a href="tel:+33771785563" className="text-xl font-bold text-neutral-900 hover:text-neutral-600 transition-colors">
                      07 71 78 55 63
                    </a>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-neutral-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 text-neutral-900">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Email</h3>
                    <a href="mailto:mhm.auto@hotmail.com" className="text-neutral-500 hover:text-neutral-900 transition-colors font-light">
                      mhm.auto@hotmail.com
                    </a>
                  </div>
                </Card>
              </div>
              
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="flex items-center gap-3 mb-4 text-neutral-900">
                  <Shield className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider">Engagement Qualité</span>
                </div>
                <p className="text-neutral-500 text-sm font-light">
                  Nous nous engageons à vous fournir un devis clair avant toute intervention. 
                  Transparence et honnêteté sont nos maîtres-mots.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:sticky lg:top-32 h-fit">
              <BookingCalendar />
            </div>

          </div>
        </Container>
      </Section>

      {/* Map Section - Redesigned */}
      <Section className="pb-32">
        <Container>
            <div className="h-[400px] w-full bg-neutral-100 rounded-[3rem] overflow-hidden shadow-lg border border-neutral-200 relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.221528434724!2d2.4168!3d48.8722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzE5LjkiTiAywrAyNScwMC_InRQ!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Carte de localisation MHM Autos à Bagnolet"
                    className="opacity-100"
                />
                
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=MHM+Autos+14+Rue+de+l'Epine+Prolongee+93170+Bagnolet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                >
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-neutral-900">MHM Autos</p>
                        <p className="text-xs text-neutral-500 group-hover:text-gold transition-colors">Ouvrir dans Maps</p>
                    </div>
                </a>
            </div>
        </Container>
      </Section>
    </div>
  );
}
