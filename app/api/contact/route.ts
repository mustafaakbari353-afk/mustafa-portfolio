import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "لطفاً همه فیلدها را پر کنید." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `پیام جدید از ${name}`,
      text: `
نام: ${name}

ایمیل: ${email}

پیام:
${message}
      `,
    });

    return Response.json({
      success: true,
      message: "پیام با موفقیت ارسال شد.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "ارسال پیام با مشکل مواجه شد." },
      { status: 500 }
    );
  }
}