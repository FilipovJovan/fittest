import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "noreply@fittestsapp.com",
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Email sending error:", error);
      throw new Error("Failed to send email");
    }

    return data;
  } catch (err) {
    console.error("Unexpected sendEmail error:", err);
    throw err;
  }
};

export default sendEmail;
