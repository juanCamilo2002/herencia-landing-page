const testimonials = [
  {
    name: "María Fernández",
    role: "Cliente frecuente",
    message:
      "Herencia es el vino que siempre llevo a la mesa familiar. Se siente la dedicación en cada botella. Es equilibrado, elegante y con un sabor inolvidable.",
  },
  {
    name: "Carlos Gómez",
    role: "Restaurantero",
    message:
      "Recomendar HERENCIA es fácil: es un vino que transmite calidad y tradición. Mis clientes siempre vuelven a pedirlo.",
  },
];


export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-24 px-4 border-t border-white/10 bg-(--herencia-background)"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="
                rounded-3xl
                bg-(--herencia-surface)
                border border-white/10
                shadow-[0_0_40px_rgba(0,0,0,0.4)]
                p-8
                transition-transform
                hover:-translate-y-1
                hover:border-(--herencia-gold)
              "
            >
              <p className="italic text-white/80 leading-relaxed">
                “{t.message}”
              </p>
              
              <div className="mt-6">
                <p className="font-semibold text-(--herencia-gold)">
                  {t.name}
                </p>
                <p className="text-white/60 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
