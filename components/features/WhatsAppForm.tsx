"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Car, Calendar, Wrench } from "lucide-react";

export function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "33771785563"; // 07 71 78 55 63 format international
    
    const text = `
*Nouveau Rendez-vous MHM Autos* 🚗

👤 *Nom:* ${formData.name}
🚘 *Véhicule:* ${formData.vehicle}
🔧 *Service:* ${formData.service}
📝 *Message:* ${formData.message}

_Envoyé depuis le site web_
    `.trim();

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <Card className="w-full bg-neutral-900/50 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Prendre Rendez-vous</CardTitle>
        <CardDescription className="text-white/60">
          Remplissez ce formulaire pour être redirigé vers WhatsApp avec votre demande pré-remplie.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Votre Nom</Label>
            <Input 
              id="name" 
              placeholder="Jean Dupont" 
              className="bg-black/50 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="vehicle" className="text-white">Véhicule (Marque & Modèle)</Label>
              <div className="relative">
                <Car className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                <Input 
                  id="vehicle" 
                  placeholder="ex: Audi A3, Golf 7..." 
                  className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50"
                  required
                  value={formData.vehicle}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service" className="text-white">Type de Service</Label>
              <div className="relative">
                <Wrench className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                <select 
                  id="service"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Choisir une prestation...</option>
                  <option value="Diagnostic">Diagnostic Électronique</option>
                  <option value="Révision">Révision / Entretien</option>
                  <option value="Boite DSG">Problème Boîte DSG</option>
                  <option value="Freinage">Freinage</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Message (Optionnel)</Label>
            <Textarea 
              id="message" 
              placeholder="Détaillez votre problème ou vos disponibilités..." 
              className="min-h-[100px] bg-black/50 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-black font-bold text-lg h-12 rounded-full shadow-lg shadow-gold/20 transition-all duration-300">
            <Send className="w-5 h-5 mr-2" />
            Envoyer sur WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
