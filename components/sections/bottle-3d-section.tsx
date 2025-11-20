"use client";
import BottleViewer from "../3d/BottleViewer";
import Image from "next/image";

export function Bottle3DSection() {
  return (
    <section
      id="botella-3d"
      className="py-32 px-4 bg-(--herencia-background) text-center"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-xs uppercase tracking-[0.35rem] text-(--herencia-gold)">
          Interactivo
        </p>

        {/* 🔥 Texto desktop */}
        <h2 className="hidden md:block text-3xl md:text-4xl font-bold mt-2 mb-6">
          Explora la botella en 3D
        </h2>

        {/* 🔥 Texto móvil */}
        <h2 className="md:hidden text-3xl font-bold mt-2 mb-6">
          Observa la botella en movimiento
        </h2>

        {/* 🔥 Texto desktop */}
        <p className="hidden md:block text-white/70 max-w-xl mx-auto mb-10">
          Gira la botella y descubre cada detalle de nuestra edición especial.
        </p>

        {/* 🔥 Texto móvil */}
        <p className="md:hidden text-white/70 max-w-xl mx-auto mb-10">
          Una vista animada de nuestra edición especial.
        </p>

        {/* 📱 MOBILE: GIF animado */}
        <div className="md:hidden flex justify-center">
          <Image
            src="/images/botella.png"
            alt="Botella girando"
            width={350}
            height={350}
            className="drop-shadow-2xl rounded-2xl"
          />
        </div>

        {/* 🖥️ DESKTOP: Modelo 3D */}
        <div className="hidden md:block h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-lg">
          <BottleViewer />
        </div>
      </div>
    </section>
  );
}
