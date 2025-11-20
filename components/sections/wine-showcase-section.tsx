"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

const wines = [
  {
    name: "Herencia Reserva",
    type: "Vino Tinto",
    year: "2021",
    image: "/images/products/wine-tinto.png",
    description:
      "Notas profundas de frutos rojos y roble. Un vino con carácter, ideal para acompañar ocasiones especiales.",
    details: {
      variety: "Cabernet Sauvignon (90%), Syrah (10%)",
      alcohol: "13.8% Vol.",
      service: "16–18°C",
      pairing:
        "Carnes a la parrilla, pastas con salsa roja, quesos maduros, cocina especiada.",
      presentation: "750 ml",
      edition: "Edición limitada – 480 botellas.",
    },
  },
  {
    name: "Herencia Blanco",
    type: "Vino Blanco",
    year: "2022",
    image: "/images/products/wine-white.png",
    description:
      "Ligero, fresco y cítrico, perfecto para días cálidos y platos suaves.",
    details: {
      variety: "Chardonnay (70%), Sauvignon Blanc (30%)",
      alcohol: "12.5% Vol.",
      service: "8–10°C",
      pairing: "Mariscos, pescados, ensaladas frescas, sushi, aves.",
      presentation: "750 ml",
      edition: "Serie Especial – 520 botellas.",
    },
  },
  {
    name: "Herencia Rosé",
    type: "Vino Rosé",
    year: "2022",
    image: "/images/products/wine-rose.png",
    description:
      "Aromático y balanceado, con matices de frutilla y frambuesa. Ideal para compartir al atardecer.",
    details: {
      variety: "Garnacha (60%), Pinot Noir (40%)",
      alcohol: "12% Vol.",
      service: "10–12°C",
      pairing: "Picnic, tablas de quesos suaves, comida mediterránea, postres frutales.",
      presentation: "750 ml",
      edition: "Cosecha de verano – 350 botellas.",
    },
  },
];

export function WineShowcaseSection() {
  useRevealOnScroll();

  return (
    <section
      id="vinos"
      className="py-28 px-4 border-t border-white/10 bg-(--herencia-background) reveal"
    >
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ============================
            HEADER ORIGINAL
        ============================ */}
        <div className="space-y-4 max-w-3xl mx-auto text-center reveal animate-fade-up delay-75">
          <p className="text-xs uppercase tracking-[0.35rem] text-(--herencia-gold)">
            Nuestros vinos
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Cada etiqueta cuenta una historia distinta
          </h2>

          <p className="text-white/80 max-w-xl mx-auto">
            Seleccionamos con cuidado cada uva y cada proceso para asegurar vinos
            que hablen por sí mismos. Calidad, identidad y tradición en cada edición.
          </p>
        </div>

        {/* ============================
            SHOWCASE EDITORIAL PREMIUM
        ============================ */}
        <div className="space-y-32">
          {wines.map((wine, index) => (
            <div
              key={wine.name}
              className={`
                group
                flex flex-col md:flex-row items-center gap-16 
                reveal animate-fade-up
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* ============================
                  BOTELLA (protagonista)
              ============================ */}
              <div className="flex-1 flex justify-center relative">
                {/* FONDO ESTÁTICO (halo vino tinto) */}
                <div
                  className="
                    absolute inset-0 
                    bg-[radial-gradient(circle,rgba(90,0,0,0.45),transparent_70%)]
                    blur-3xl opacity-70
                  "
                ></div>

                {/* BOTELLA CON ZOOM INDEPENDIENTE */}
                <div
                  className="
                    relative z-10
                    transition-transform duration-700 ease-out 
                    group-hover:scale-[1.08]
                  "
                >
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    width={420}
                    height={720}
                    className="object-contain drop-shadow-2xl select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* ============================
                  TEXTO Y FICHA TÉCNICA
              ============================ */}
              <div className="flex-1 space-y-6">
                <span className="text-xs uppercase tracking-[0.35rem] text-(--herencia-gold)">
                  {wine.type}
                </span>

                <h3 className="text-4xl font-bold">{wine.name}</h3>

                <p className="text-white/60 text-sm">Cosecha {wine.year}</p>

                <p className="text-white/80 leading-relaxed max-w-md">
                  {wine.description}
                </p>

                {/* FICHA TECNICA */}
                <div className="space-y-1 pt-3 text-white/70 text-sm">
                  <p>
                    <span className="text-(--herencia-gold)">Variedad:</span>{" "}
                    {wine.details.variety}
                  </p>
                  <p>
                    <span className="text-(--herencia-gold)">Alcohol:</span>{" "}
                    {wine.details.alcohol}
                  </p>
                  <p>
                    <span className="text-(--herencia-gold)">Servicio:</span>{" "}
                    {wine.details.service}
                  </p>
                  <p>
                    <span className="text-(--herencia-gold)">Maridaje:</span>{" "}
                    {wine.details.pairing}
                  </p>
                  <p>
                    <span className="text-(--herencia-gold)">Presentación:</span>{" "}
                    {wine.details.presentation}
                  </p>
                  <p>
                    <span className="text-(--herencia-gold)">Edición:</span>{" "}
                    {wine.details.edition}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="
                    border-(--herencia-gold)/40 
                    text-(--herencia-gold)
                    hover:bg-(--herencia-gold) hover:text-black
                    transition-all mt-4
                  "
                >
                  Consultar disponibilidad
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
