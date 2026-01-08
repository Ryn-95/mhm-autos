import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative aspect-square", className)}>
      <Image
        src="/logo.png"
        alt="MHM Autos Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};
