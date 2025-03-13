"use server";
import nodemailer from "nodemailer";

interface EmailData {
  email: string;
  subject: string;
  message: string;
  phone: string;
  name: string;
}

export async function sendEmail(data: EmailData) {
  const { email, subject, message, name, phone } = data;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "gabriel_rodrigues_perez@hotmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact" <gabriel_rodrigues_perez@hotmail.com>',
      to: "gabriel_rodrigues_perez@hotmail.com",
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #3ddb80; border-bottom: 2px solid #3ddb80; padding-bottom: 10px;">New Contact Form Submission</h3>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #3ddb80;">
            <p style="margin: 10px 0;"><strong style="color: #3ddb80;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #3ddb80;">Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #3ddb80;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #3ddb80;">Subject:</strong> ${subject}</p>
            <p style="margin: 10px 0;"><strong style="color: #3ddb80;">Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message}
            </div>
          </div>
        </div>
      `,
    });

    return { success: true, message: "Email enviado com sucesso!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Erro ao enviar e-mail." };
  }
}
