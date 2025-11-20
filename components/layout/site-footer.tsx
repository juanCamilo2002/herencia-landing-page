import {
  MapPin,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-(--herencia-background) text-(--herencia-cream) mt-24">

      {/* 🔸 Franja superior estilo Herencia */}
      <div className="w-full border-t border-b border-(--herencia-gold)/20 py-4 text-center">
        <p className="text-xs tracking-[0.25rem] uppercase text-(--herencia-gold)">
          Elaborado con pasión
        </p>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* ================================
            LOGO + DESCRIPCIÓN
        ================================ */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-(--herencia-wine) to-black border border-(--herencia-gold)" />
            <span className="tracking-[0.35rem] font-semibold text-lg">
              HERENCIA
            </span>
          </div>

          <p className="text-white/70 leading-relaxed">
            Vinos artesanales de tradición familiar, elaborados con
            dedicación y pasión en cada etapa del proceso.
          </p>

          {/* Línea decorativa */}
          <div className="h-0.5 w-24 bg-(--herencia-gold)/40 mt-4 rounded-full" />
        </div>

        {/* ================================
            NAVEGACIÓN
        ================================ */}
        <div className="space-y-4">
          <h4 className="text-(--herencia-gold) text-xs uppercase tracking-wider">
            Navegación
          </h4>

          <nav className="flex flex-col gap-2 text-sm">
            <a href="#inicio" className="hover:text-(--herencia-gold)">Inicio</a>
            <a href="#historia" className="hover:text-(--herencia-gold)">Historia</a>
            <a href="#vinos" className="hover:text-(--herencia-gold)">Nuestros vinos</a>
            <a href="#botella-3d" className="hover:text-(--herencia-gold)">Diseño elegante</a>
            <a href="#proceso" className="hover:text-(--herencia-gold)">Proceso artesanal</a>
            <a href="#contacto" className="hover:text-(--herencia-gold)">Contacto</a>
          </nav>
        </div>

        {/* ================================
            INFORMACIÓN (Íconos lucide)
        ================================ */}
        <div className="space-y-4">
          <h4 className="text-(--herencia-gold) text-xs uppercase tracking-wider">
            Información
          </h4>

          <div className="flex items-center gap-3 text-sm text-white/80">
            <MapPin size={18} className="text-(--herencia-gold)" />
            <span>Rivera, Colombia</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/80">
            <Mail size={18} className="text-(--herencia-gold)" />
            <a
              href="mailto:contacto@herenciavinos.com"
              className="hover:text-(--herencia-gold)"
            >
              contacto@herenciavinos.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/80">
            <Phone size={18} className="text-(--herencia-gold)" />
            <span>+57 300 000 0000</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/80">
            <Instagram size={18} className="text-(--herencia-gold)" />
            <a href="#" className="hover:text-(--herencia-gold)">
              @herencia.vinos
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-6 text-xs text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} HERENCIA — Tradición hecha vino.
      </div>
    </footer>
  );
}
