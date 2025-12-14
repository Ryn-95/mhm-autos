import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact - MHM Autos Bagnolet",
  description: "Prenez rendez-vous chez MHM Autos. 14 Rue de l'Épine Prolongée, 93170 Bagnolet.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section className="bg-black min-h-screen">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contactez-nous</h1>
                <p className="text-xl text-white/60">
                  Une question ? Un devis ? Besoin d'un rendez-vous ? 
                  Notre équipe est à votre écoute.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-4 rounded-full h-fit">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Nous trouver</h3>
                    <p className="text-white/60 leading-relaxed">
                      Résidence du Parc de la Noue<br />
                      14 Rue de l'Épine Prolongée<br />
                      93170 Bagnolet
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-4 rounded-full h-fit">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Par téléphone</h3>
                    <p className="text-white/60 mb-2">Du Lundi au Samedi de 09:00 à 19:00</p>
                    <a href="tel:+33771785563" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      07 71 78 55 63
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-4 rounded-full h-fit">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Par email</h3>
                    <a href="mailto:contact@mhmautos.fr" className="text-lg text-white/60 hover:text-white transition-colors">
                      contact@mhmautos.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstname" className="text-white">Prénom</Label>
                    <Input id="firstname" placeholder="Jean" className="bg-black/50 border-white/10 text-white placeholder:text-white/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname" className="text-white">Nom</Label>
                    <Input id="lastname" placeholder="Dupont" className="bg-black/50 border-white/10 text-white placeholder:text-white/20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="jean.dupont@exemple.fr" className="bg-black/50 border-white/10 text-white placeholder:text-white/20" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="06 12 34 56 78" className="bg-black/50 border-white/10 text-white placeholder:text-white/20" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Sujet</Label>
                  <select 
                    id="subject"
                    className="flex h-12 w-full rounded-md border border-white/10 bg-black/50 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="rdv">Demande de Rendez-vous</option>
                    <option value="devis">Demande de Devis</option>
                    <option value="info">Renseignements</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea id="message" placeholder="Détaillez votre demande..." className="min-h-[150px] bg-black/50 border-white/10 text-white placeholder:text-white/20" />
                </div>

                <Button type="submit" className="w-full h-12 bg-white text-black hover:bg-gray-200 text-lg rounded-full">
                  Envoyer le message
                </Button>
              </form>
            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
}
