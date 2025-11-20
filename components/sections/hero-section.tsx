"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export function HeroSection() {
  useRevealOnScroll();
  return (
    <section
      id="inicio"
      className="min-h-[90vh] flex items-center px-4 pt-20 md:pt-24 pb-20 relative overflow-hidden reveal"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,30,30,0.35),transparent_70%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">

        {/* Text*/}
        <div className="flex-1 space-y-6 reveal animate-fade-up delay-100">
          <p className="text-xs uppercase tracking-[0.35rem] text-(--herencia-gold)">
            Vinos de tradición familiar
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            El vino guarda la{" "}
            <span className="text-(--herencia-gold)">historia</span> de
            nuestra familia
          </h1>

          <p className="text-white/80 max-w-md">
            Herencia nace de nuestra pasión familiar por el vino.
            Cada botella celebra nuestras raíces y tradición
          </p>

          <div className="flex gap-4">
            <Button>Ver nuestros vinos</Button>
            <Button variant="outline">Conocer la historia</Button>
          </div>
        </div>
        {/* Bottle mockup */}
        <div className="flex-1 flex justify-center min-w-[280px] reveal animate-fade-up delay-200">
          <Image
            src="/images/botella.png"
            alt="Botella Herencia"
            width={450}
            height={600}
            priority
            className="object-contain drop-shadow-2xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}