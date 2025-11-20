"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

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

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setStatus(null);

      if (!executeRecaptcha) {
        console.log("reCAPTCHA not loaded");
        return;
      }

      const recaptchaToken = await executeRecaptcha("contact_submit");

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...data, recaptchaToken }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success")
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        space-y-6 bg-(--herencia-surface)
        border border-white/10 p-8 rounded-3xl 
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        transition-transform duration-300
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
      {/* Botón + feedback */}
      <div className="space-y-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full md:w-auto
            disabled:opacity-70 disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>

        {status === "success" && (
          <p className="text-(--herencia-gold) text-sm">
            ✅ Gracias por escribirnos. Hemos recibido tu mensaje.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm">
            Ocurrió un error al enviar el mensaje. Intenta de nuevo.
          </p>
        )}
      </div>

    </form>
  );
}
