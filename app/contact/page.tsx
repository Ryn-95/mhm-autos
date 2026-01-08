import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { WhatsAppForm } from "@/components/features/WhatsAppForm";
import { MapPin, Phone, Mail, Clock, Shield } from "lucide-react";

export const metadata = {
  title: "Contact & Rendez-vous - MHM Autos",
  description: "Prenez rendez-vous chez MHM Autos Bagnolet via WhatsApp ou téléphone.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contactez-nous</h1>
                <p className="text-xl text-white/60">
                  Une urgence ? Un devis ? Notre équipe vous répond rapidement.
                  Privilégiez WhatsApp pour une réponse immédiate.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="p-6 bg-neutral-900/50 border-white/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Notre Adresse</h3>
                    <p className="text-white/70">
                      14 Rue de l&apos;Épine Prolongée<br />
                      93170 Bagnolet, France
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-neutral-900/50 border-white/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Téléphone</h3>
                    <p className="text-white/70 mb-2">Du Lundi au Samedi, 09h - 19h</p>
                    <a href="tel:+33771785563" className="text-xl font-bold text-white hover:text-gold transition-colors">
                      07 71 78 55 63
                    </a>
                  </div>
                </Card>

                <Card className="p-6 bg-neutral-900/50 border-white/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <a href="mailto:mhm.auto@hotmail.com" className="text-white/70 hover:text-white transition-colors">
                      mhm.auto@hotmail.com
                    </a>
                  </div>
                </Card>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 to-black border border-white/10">
                <div className="flex items-center gap-3 mb-4 text-gold">
                  <Shield className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider">Engagement Qualité</span>
                </div>
                <p className="text-white/60 text-sm">
                  Nous nous engageons à vous fournir un devis clair avant toute intervention. 
                  Transparence et honnêteté sont nos maîtres-mots.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:sticky lg:top-32 h-fit">
              <WhatsAppForm />
            </div>

          </div>
        </Container>
      </Section>

      {/* Map Section (Placeholder) */}
      <div className="h-[400px] w-full bg-neutral-900 grayscale opacity-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/20 font-bold text-2xl">Carte Google Maps Intégrée</p>
        </div>
        {/* In a real scenario, embed Google Maps iframe here */}
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.221528434724!2d2.4168!3d48.8722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzE5LjkiTiAywrAyNScwMC_InRQ!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} 
            allowFullScreen 
            loading="lazy"
        />
      </div>
    </div>
  );
}
