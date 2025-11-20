import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message || !subject) {
            return new Response("Faltan campos.", { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM!,
            to: process.env.CONTACT_TO!,
            subject: `Nuevo mensaje – HERENCIA | ${subject}`,
            replyTo: email,
            html: emailTemplate({ name, email, subject, message }),
        });

        if (error) {
            console.error("Resend error:", error);
            return new Response("Error enviando correo.", { status: 500 });
        }

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return new Response("Error en el servidor.", { status: 500 });
    }
}

function emailTemplate({ name, email, subject, message }: any) {
    return `
    <table style="width:100%; max-width:600px; margin:auto; font-family:Arial, sans-serif; background:#111; padding:24px; color:#fff; border-radius:16px;">
      <tr>
        <td style="text-align:center; padding-bottom:20px;">
          <h2 style="color:#D4AF37; margin:0; letter-spacing:4px;">HERENCIA</h2>
        </td>
      </tr>

      <tr>
        <td style="font-size:16px; line-height:1.6;">
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
