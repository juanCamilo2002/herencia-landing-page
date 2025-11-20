export function SiteFooter() {
  return (
    <footer
      className="
        border-t border-white/10
        bg-(--herencia-background)
        text-(--herencia-cream)
        py-12 px-4
        mt-24
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* LOGO + DESCRIPTION */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-linear-to-br from-(--herencia-wine) to-black border border-(--herencia-gold)"></div>
            <span className="tracking-[0.35rem] font-semibold">HERENCIA</span>
          </div>

          <p>
            Vinos artesanales de tradición familiar, elaborados con dedicación
            y pasión en cada etapa del proceso
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-(--herencia-gold) text-xs uppercase tracking-wider">
            Navegación
          </span>

          <a href="#inicio" className="hover:text-(--herencia-gold) transition-colors">
            Inicio
          </a>
          <a href="#historia" className="hover:text-(--herencia-gold) transition-colors">
            Historia
          </a>
          <a href="#vinos" className="hover:text-(--herencia-gold) transition-colors">
            Nuestros vinos
          </a>
          <a href="#proceso" className="hover:text-(--herencia-gold) transition-colors">
            Proceso artesanal
          </a>
          <a href="#contacto" className="hover:text-(--herencia-gold) transition-colors">
            Contacto
          </a>
        </div>

        {/* SOCIAL + LOCATION */}
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <span className="text-(--herencia-gold) text-xs uppercase tracking-wider">
              Ubicación
            </span>
            <p className="text-white/70 mt-1">Cali, Colombia</p>
          </div>

          <div>
            <span className="text-(--herencia-gold) text-xs uppercase tracking-wider">
              Redes sociales
            </span>
            <p className="text-white/70 mt-1">@herencia.vinos</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-xs text-white/40">
        © {new Date().getFullYear()} HERENCIA. Todos los derechos reservados.
      </div>
    </footer>
  );
}