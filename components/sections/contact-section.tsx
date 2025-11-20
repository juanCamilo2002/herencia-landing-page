"use client";

import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export function ContactSection() {
  useRevealOnScroll();
  return (
    <section
      id="contacto"
      className="
        py-24 px-4
        border-t border-white/10
        bg-linear-to-b from-(--herencia-surface) to-(--herencia-background)
        reveal animate-fade-up delay-300
      "
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.35rem] text-(--herencia-gold)">
          Contacto
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Haz parte de nuestra <span className="text-(--herencia-gold)">HERENCIA</span>
        </h2>

        {/* Description */}
        <p className="text-white/80 max-w-xl mx-auto">
          Si deseas conocer más sobre nuetros vinos, realizar pedidos para tu
          restaurante o para tus eventos, estaremos encantados de atenderte.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-white/80 text-sm mt-8">
          <p>
            Escribenos al correo:{" "}
            <span className="font-semibold text-(--herencia-gold)">
              contacto@herenciavinos.com
            </span>
          </p>

          <p>
            WhatsApp:{" "}
            <span className="font-semibold text-(--herencia-gold)">
              +57 300 000 0000
            </span>
          </p>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="
            bg-(--herencia-wine)
            hover:bg-(--herencia-wine-light)
            text-(--herencia-cream)
            rounded-full mt-6
          " 
        >
          Contactar ahora
        </Button>

        {/* Location */}
        <div className="mt-8 text-xs text-white/60">
          <p>Rivera, Colombia</p>
          <p className="mt-1">@herencia.vinos</p>
        </div>
      </div>

    </section>
  );
}