"use client";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import Image from "next/image";

export function StorySection() {
  useRevealOnScroll();
  return (
    <section
      id="historia"
      className="py-24 px-6 md:px-24 border-t border-white/10 bg-(--herencia-surface) reveal"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* ============================
            TEXT COLUMN
        ============================ */}
        <div className="flex-1 space-y-6 reveal animate-fade-up delay-100">
          <p className="text-xs uppercase tracking-[0.36rem] text-(--herencia-gold)">
            Nuestra historia
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Un legado familiar que se sirve
            <span className="text-(--herencia-gold)"> en cada copa.</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            HERENCIA nació como un proyecto familiar construido con paciencia,
            dedicación y amor por el vino. Cada botella representa años de aprendizaje,
            tradición y el deseo de compartir un pedazo de nuestra historia con quienes
            aprecian los sabores auténticos y llenos de carácter.
          </p>

          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Desde nuestros comienzos, hemos trabajado en ediciones pequeñas -cada una
            cuidada al detalle- para mantener la esencia artesanal y el respeto por el
            proceso natural del vino. No buscamos producir en masa: buscamos producir
            algo que trascienda.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div>
              <p className="text-2xl font-semibold text-(--herencia-gold)">+10</p>
              <p className="text-xs text-white/70">Años de tradición</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-(--herencia-gold)">Familiar</p>
              <p className="text-xs text-white/70">Proyecto construido en casa</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-(--herencia-gold)">Ediciones</p>
              <p className="text-xs text-white/70">Producciones limitadas</p>
            </div>
          </div>
        </div>

        {/* ============================
            IMAGE COLUMN
        ============================ */}

        <div className="
            relative 
            w-full max-w-md 
            h-64 sm:h-72 md:h-80 lg:h-88
            rounded-3xl overflow-hidden 
            shadow-2xl border border-white/10
          "
        >
          <Image
            src="/images/story-image.jpg"
            alt="Fotografía de la familia Herencia"
            fill
            className="object-cover"
            priority
          />

          <div className="
              absolute bottom-0 left-0 right-0 
              bg-linear-to-br from-black/60 to-transparent
              backdrop-blur-sm
              p-4
            "
          >
            <p className="text-(--herencia-gold) text-sm font-medium">
              Fotografía familiar
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}