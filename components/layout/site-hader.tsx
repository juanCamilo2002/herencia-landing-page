"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Vinos", href: "#vinos" },
  { label: "Diseño elegante", href: "#botella-3d"},
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Deshabilitar scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const goToWines = () => {
    router.push("#vinos");
    setOpen(false);
  }
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-linear-to-br from-(--herencia-wine) to-black border border-(--herencia-gold)" />
            <span className="tracking-[0.35em] font-semibold">HERENCIA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-(--herencia-gold) transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button onClick={goToWines}>
              <Link href="#vinos">Explorar vinos</Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white "
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ================================
          MOBILE OVERLAY — FULLSCREEN
      ================================ */}
      {open && (
        <div
          className="
            fixed inset-0
            z-99999
            bg-black/95 backdrop-blur-xl
            flex flex-col p-6
          "
        >
          {/* Close Button */}
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Nav Items */}
          <div className="mt-20 flex flex-col gap-8 text-2xl font-light">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-(--herencia-gold) transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Button className="mt-10 text-lg py-6 rounded-full" onClick={goToWines}>
              Explorar vinos
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
