"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Vinos", href: "#vinos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-linear-to-br from-(--herencia-wine) to-black border border-(--herencia-gold)" />
          <span className="tracking-[0.35em] font-semibold">HERENCIA</span>
        </Link>

        {/* Nav */}
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

        <Button>Explorar vinos</Button>
      </div>
    </header>
  );
}
