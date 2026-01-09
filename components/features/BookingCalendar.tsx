"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ShieldCheck } from "lucide-react";

export function BookingCalendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#D4AF37", // Gold color to match MHM Autos
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Card className="w-full bg-white border-neutral-100 shadow-xl shadow-neutral-200/50 rounded-[2.5rem] overflow-hidden relative">
      
      <CardHeader className="pt-8 px-8 pb-2 text-center">
        <div className="mx-auto w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mb-4 text-gold border border-neutral-100 shadow-sm">
          <Calendar className="w-6 h-6" />
        </div>
        <CardTitle className="text-3xl font-bold text-neutral-900 tracking-tight">
          Réserver un Créneau
        </CardTitle>
        <CardDescription className="text-neutral-500 text-base max-w-md mx-auto mt-2">
          Sélectionnez la date et l'heure de votre choix. 
          <span className="block font-medium text-gold mt-1">
            ⚠️ Limité à 4 places par jour.
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="w-full h-[700px] md:h-[800px] overflow-hidden">
          <Cal
            calLink="rick/get-rick-rolled" // TODO: Remplacer par votre lien (ex: "mhm-autos/atelier")
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>
        
        {/* Footer Info */}
        <div className="bg-neutral-50 p-6 flex items-center justify-center gap-6 border-t border-neutral-100">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
            <Clock className="w-4 h-4 text-gold" />
            <span>Réponse immédiate</span>
          </div>
          <div className="w-px h-4 bg-neutral-200" />
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Sans engagement</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
