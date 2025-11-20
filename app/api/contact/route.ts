import { Resend } from "resend";

import { supabaseServer } from "@/lib/supabase-server";
import { sources } from "next/dist/compiled/webpack/webpack";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken?: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json() as ContactPayload);
    const { name, email, subject, message, recaptchaToken } = body;

    if (!name || !email || !message || !subject) {
      return new Response("Faltan campos.", { status: 400 });
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.log("Falta RECAPTCHA_SECRET_KEY")
      return new Response("Configuración incompleta", { status: 500 });
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();
    const score = recaptchaData?.score ?? 0;

    if (!recaptchaData.success || score < 0.4) {
      console.warn("reCAPTCHA falló o score bajo:", recaptchaData);
      return new Response("Verificación reCAPTCHA fallida.", { status: 400 });
    }

    const { error: supabaseError } = await supabaseServer
      .from("contacts")
      .insert({
        name,
        email,
        subject,
        message,
        source: "landing-herencia"
      })

    if (supabaseError) {
      console.error("Error Supabase:", supabaseError);
    }

    const { error: adminEmailError } = await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: process.env.CONTACT_TO!,
      subject: `Nuevo mensaje – HERENCIA | ${subject}`,
      replyTo: email,
      html: adminEmailTemplate({ name, email, subject, message }),
    });

    if (adminEmailError) {
      console.error("Resend error:", adminEmailError);
      return new Response("Error enviando correo.", { status: 500 });
    }

    const { error: userEmailError } = await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: email!,
      subject: "Gracias por contactarnos – HERENCIA",
      html: userEmailTemplate({ name }),
    });

    if (userEmailError) {
      console.error("Error correo de confirmación:", userEmailError);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response("Error en el servidor.", { status: 500 });
  }
}

function adminEmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <table style="width:100%; max-width:600px; margin:auto; font-family:Arial, sans-serif; background:#111; padding:24px; color:#fff; border-radius:16px;">
      <tr>
        <td style="text-align:center; padding-bottom:20px;">
          <h2 style="color:#D4AF37; margin:0; letter-spacing:4px;">HERENCIA</h2>
          <p style="color:#aaa; margin-top:4px;">Nuevo mensaje desde la web</p>
        </td>
      </tr>

      <tr>
        <td style="font-size:15px; line-height:1.6;">
          <p><strong style="color:#D4AF37;">Nombre:</strong> ${name}</p>
          <p><strong style="color:#D4AF37;">Correo:</strong> ${email}</p>
          <p><strong style="color:#D4AF37;">Asunto:</strong> ${subject}</p>
          <p><strong style="color:#D4AF37;">Mensaje:</strong><br>${message}</p>
        </td>
      </tr>

      <tr>
        <td style="padding-top:24px; font-size:12px; color:#aaa; text-align:center;">
          © ${new Date().getFullYear()} HERENCIA — Tradición hecha vino.
        </td>
      </tr>
    </table>
  `;
}

function userEmailTemplate({ name }: { name: string }) {
  return `
    <table style="width:100%; max-width:600px; margin:auto; font-family:Arial, sans-serif; background:#111; padding:24px; color:#fff; border-radius:16px;">
      <tr>
        <td style="text-align:center; padding-bottom:20px;">
          <h2 style="color:#D4AF37; margin:0; letter-spacing:4px;">HERENCIA</h2>
        </td>
      </tr>

      <tr>
        <td style="font-size:15px; line-height:1.7;">
          <p>Hola <strong>${name}</strong>,</p>
          <p>
            Gracias por escribirnos. Hemos recibido tu mensaje y nuestro equipo 
            se pondrá en contacto contigo lo antes posible.
          </p>
          <p>
            Mientras tanto, te invitamos a seguir disfrutando de los momentos 
            que se brindan, se comparten y se recuerdan.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding-top:24px; font-size:12px; color:#aaa; text-align:center;">
          Con cariño,<br/>
          <span style="color:#D4AF37;">Familia HERENCIA</span>
        </td>
      </tr>
    </table>
  `;
}