"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "María Fernández",
    role: "Cliente frecuente",
    image: "/images/testimonials/maria.png",
    message:
      "Herencia es el vino que siempre llevo a la mesa familiar. Se siente la dedicación en cada botella. Es equilibrado, elegante y con un sabor inolvidable.",
  },
  {
    name: "Carlos Gómez",
    role: "Restaurantero",
    image: "/images/testimonials/carlos.png",
    message:
      "Recomendar HERENCIA es fácil: es un vino que transmite calidad y tradición. Mis clientes siempre vuelven a pedirlo.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="
        py-24 px-4 
        border-t border-white/10 
        bg-(--herencia-background)
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-(--herencia-gold)">
            Testimonios
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Voces que cuentan nuestra historia.
          </h2>

          <p className="text-white/80 max-w-xl">
            Lo que dicen quienes ya han hecho de HERENCIA parte de sus momentos más importantes.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="
                group
                rounded-3xl p-8
                bg-(--herencia-surface) 
                border border-white/10
                shadow-[0_0_40px_rgba(0,0,0,0.45)] 
                transition-all duration-300
                hover:border-(--herencia-gold)
                hover:shadow-[0_0_50px_rgba(255,215,0,0.15)]
                hover:-translate-y-1
              "
            >
              {/* FOTO + NOMBRE */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="
                    relative w-16 h-16 rounded-full overflow-hidden
                    border border-(--herencia-gold)/40
                    shadow-[0_0_20px_rgba(0,0,0,0.5)]
                    group-hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]
                    transition-all duration-300
                  "
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold text-(--herencia-gold)">
                    {t.name}
                  </p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>

              {/* MENSAJE */}
              <p className="italic text-white/80 leading-relaxed">
                “{t.message}”
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
