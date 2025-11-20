"use client";
import { Mail, Phone, MapPin } from "lucide-react";

import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import { ContactForm } from "@/components/contact/contact-form";

export function ContactSection() {
  useRevealOnScroll();

  return (
    <section
      id="contacto"
      className="
        py-28 px-4
        border-t border-white/10
        bg-(--herencia-background)
        reveal animate-fade-up
      "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35rem] text-(--herencia-gold)">
            Contacto
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Estamos aquí para<br /> ayudarte.
          </h2>

          <p className="text-white/80 max-w-md">
            Hablemos sobre pedidos, distribución, eventos corporativos o
            información sobre nuestra producción.
          </p>

          {/* Contact info */}
          <div className="space-y-6 pt-4">

            <div className="flex items-center gap-4">
              <Mail className="text-(--herencia-gold) w-6 h-6" />
              <p className="text-white/80">
                <span className="text-(--herencia-gold) font-semibold">
                  contacto@herenciavinos.com
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-(--herencia-gold) w-6 h-6" />
              <p className="text-white/80">
                <span className="text-(--herencia-gold) font-semibold">
                  +57 300 000 0000
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-(--herencia-gold) w-6 h-6" />
              <p className="text-white/80">Rivera, Colombia</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <ContactForm />
      </div>
    </section>
  );
}
