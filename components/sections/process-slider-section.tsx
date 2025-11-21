"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGesture } from "@use-gesture/react";
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  // AUTOPLAY INTELIGENTE
  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, paused]);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);

  // PRELOAD DE IMÁGENES SIGUIENTE + ANTERIOR
  useEffect(() => {
    const next = slides[(index + 1) % slides.length].bg;
    const prev = slides[(index - 1 + slides.length) % slides.length].bg;

    const img1 = new window.Image();
    img1.src = next;

    const img2 = new window.Image();
    img2.src = prev;
  }, [index]);

  // SWIPE REALISTA
  const bind = useGesture(
    {
      onDrag: ({ swipe: [swipeX], velocity }) => {
        // Swipe muy suave => no cambia slide
        if (Math.abs(velocity[0] ?? 0) < 0.3) return;

        if (swipeX === -1) goNext();
        if (swipeX === 1) goPrev();
      },
      onDragStart: () => setPaused(true),
      onDragEnd: () => setPaused(false),
    },
    { drag: { threshold: 15 } }
  );

  // ALTURA RESPONSIVA
  const [height, setHeight] = useState("90vh");

  useEffect(() => {
    const calculateHeight = () => {
      const w = window.innerWidth;
      if (w > 1400) return "90vh";
      if (w > 1024) return "80vh";
      if (w > 768) return "75vh";
      return "95vh";
    };

    setHeight(calculateHeight());
    const resize = () => setHeight(calculateHeight());

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="proceso" className="relative w-full overflow-hidden select-none">
      <div
        {...bind()}
        className="relative w-full touch-pan-y"
        style={{ height }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, i) => {
          const isActive = i === index;

          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-1400 ease-out",
                isActive
                  ? "opacity-100 scale-100 z-20"
                  : "opacity-0 scale-105 z-10 pointer-events-none"
              )}
            >
              {/* IMAGEN */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.bg}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className={cn(
                    "object-cover transition-all duration-1800 origin-center will-change-transform",
                    isActive ? "opacity-90 scale-[1.03]" : "opacity-0 scale-[1.07]"
                  )}
                />
              </div>

              {/* DEGRADADOS */}
              <div className="absolute top-0 left-0 bottom-0 w-[55%] bg-linear-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

              {/* TEXTO */}
              <div className="absolute inset-0 flex items-center px-6 z-30">
                <div className="max-w-7xl mx-auto">
                  <div className="max-w-2xl">
                    <span className="text-(--herencia-gold)/40 text-6xl font-bold block mb-2">
                      {slide.number}
                    </span>
                    <p className="text-xs tracking-[0.35rem] uppercase text-(--herencia-gold) mb-4">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-white/75 text-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* BOTONES */}
        <button
          onClick={goPrev}
          className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-40
            h-12 w-12 rounded-full border border-(--herencia-gold)/40
            bg-black/40 backdrop-blur-sm items-center justify-center
            hover:bg-(--herencia-gold)/20 transition"
        >
          <span className="text-(--herencia-gold) text-lg">‹</span>
        </button>

        <button
          onClick={goNext}
          className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 z-40
            h-12 w-12 rounded-full border border-(--herencia-gold)/40
            bg-black/40 backdrop-blur-sm items-center justify-center
            hover:bg-(--herencia-gold)/20 transition"
        >
          <span className="text-(--herencia-gold) text-lg">›</span>
        </button>
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
