import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationEmail = async (email, token) => {
  const url = `http://localhost:5000/verify/${token}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your email",
    text: `Please verify your email by clicking on the following link: ${url}`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendBulkEmails = async (emails, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    bcc: emails,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
