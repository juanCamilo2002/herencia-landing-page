"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 0,
    number: "01",
    subtitle: "PROCESO ARTESANAL",
    title: "Un proceso cuidado, de principio a fin",
    description:
      "No se trata solo de producir vino. Es una filosofía que respeta el tiempo, la dedicación y la autenticidad en cada etapa. Un trabajo que refleja la pasión de nuestra familia por hacer las cosas bien.",
    bg: "/images/process/uvas.png",
  },
  {
    id: 1,
    number: "02",
    subtitle: "SELECCIÓN",
    title: "Selección de la uva",
    description:
      "Trabajamos con pequeños productores y viñedos aliados que garantizan uvas de excelente calidad. Cada grano es escogido cuidadosamente.",
    bg: "/images/process/uvas.png",
  },
  {
    id: 2,
    number: "03",
    subtitle: "VINIFICACIÓN",
    title: "Proceso artesanal",
    description:
      "Vinificamos cada edición en pequeños lotes, respetando el carácter de cada cosecha y manteniendo un control absoluto en todas las etapas.",
    bg: "/images/process/barrica.png",
  },
  {
    id: 3,
    number: "04",
    subtitle: "CRIANZA",
    title: "Crianza y embotellado",
    description:
      "Nuestros vinos se reposan el tiempo justo para que cada botella alcance la pureza, personalidad y balance que caracterizan a HERENCIA.",
    bg: "/images/process/botella.png",
  },
];

export function ProcessSliderSection() {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
  }, [index]);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section id="proceso" className="relative w-full overflow-hidden">
      <div className="relative min-h-[95vh] w-full">

        {/* --- SLIDES --- */}
        {slides.map((slide, i) => {
          const isActive = i === index;

          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-1600 ease-out",
                isActive ? "opacity-100 scale-100 z-20" : "opacity-0 scale-105 z-10"
              )}
            >
              <Image
                src={slide.bg}
                alt=""
                fill
                className={cn(
                  "object-cover transition-all duration-2000",
                  isActive ? "opacity-90 scale-105" : "opacity-0 scale-110"
                )}
              />

              {/* Degradado lateral */}
              <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-transparent" />

              {/* --- CONTENEDOR DEL TEXTO --- */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-2xl">

                    {/* Número grande */}
                    <span className="text-(--herencia-gold)/40 text-6xl font-bold block mb-2 tracking-tight">
                      {slide.number}
                    </span>

                    {/* Subtítulo */}
                    <p className="text-xs tracking-[0.35rem] uppercase text-(--herencia-gold) mb-4">
                      {slide.subtitle}
                    </p>

                    {/* Título */}
                    <h2 className="text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight">
                      {slide.title}
                    </h2>

                    {/* Descripción */}
                    <p className="text-white/75 text-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Botón PREV */}
        <button
          onClick={goPrev}
          className="
          hidden md:flex
          absolute left-10 top-1/2 -translate-y-1/2 z-40
          h-12 w-12 rounded-full border border-(--herencia-gold)/40
          bg-black/40 backdrop-blur-sm items-center justify-center
          hover:bg-(--herencia-gold)/20 transition
        "
        >
          <span className="text-(--herencia-gold) text-lg">‹</span>
        </button>

        {/* Botón NEXT */}
        <button
          onClick={goNext}
          className="
          hidden md:flex
          absolute right-10 top-1/2 -translate-y-1/2 z-40
          h-12 w-12 rounded-full border border-(--herencia-gold)/40
          bg-black/40 backdrop-blur-sm items-center justify-center
          hover:bg-(--herencia-gold)/20 transition
        "
        >
          <span className="text-(--herencia-gold) text-lg">›</span>
        </button>
        {/* TAP ZONES SOLO PARA MÓVILES */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 z-20 md:hidden"
          onClick={goPrev}
        />

        <div
          className="absolute inset-y-0 right-0 w-1/2 z-20 md:hidden"
          onClick={goNext}
        />
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-3 pb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-3 w-3 rounded-full transition-all",
              index === i
                ? "bg-(--herencia-gold) scale-125 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
                : "bg-white/25 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
