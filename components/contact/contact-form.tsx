"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSchema = z.object({
  name: z.string().min(2, "Ingresa un nombre válido"),
  email: z.string().email("Correo inválido"),
  subject: z.string().min(3, "El asunto es obligatorio"),
  message: z.string().min(10, "El mensaje debe ser más largo"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        space-y-6 bg-(--herencia-surface)
        border border-white/10 p-8 rounded-3xl 
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
      "
    >
      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Nombre</Label>
          <Input placeholder="Tu nombre" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label>Correo electrónico</Label>
          <Input placeholder="correo@ejemplo.com" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* SUBJECT */}
      <div>
        <Label>Asunto</Label>
        <Input placeholder="Motivo del mensaje" {...register("subject")} />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <Label>Mensaje</Label>
        <Textarea
          rows={5}
          placeholder="Cuéntanos más detalles..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* SUBMIT */}
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>

      {isSubmitSuccessful && (
        <p className="text-(--herencia-gold) text-sm mt-2">
          ¡Mensaje enviado correctamente!
        </p>
      )}
    </form>
  );
}
