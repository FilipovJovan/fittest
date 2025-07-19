import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customError.js";
import { createJWT } from "../utils/tokenUtils.js";
import crypto from "crypto";
import { Resend } from "resend";
import sendEmail from "../utils/sendEmail.js";
import dotenv from "dotenv";
dotenv.config();

console.log("Resend API Key:", process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export const register = async (req, res) => {
  const calculateAge = (birthDateString) => {
    const [day, month, year] = birthDateString.split(".").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  const birthDate = req.body.date;
  if (!birthDate) {
    return res.status(400).json({ msg: "Birth date is required" });
  }

  const age = calculateAge(birthDate);
  if (age < 18) {
    return res.status(400).json({ msg: "User must be at least 18 years old" });
  }

  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  const verificationToken = crypto.randomBytes(32).toString("hex");

  user.emailVerificationToken = verificationToken;
  user.emailVerificationTokenExpiry = Date.now() + 3600000;
  await user.save();

  const localVerificationEmail = `http://localhost:5173/verify-email/${verificationToken}?email=${user.email}`;
  const verificationUrl = `https://fittestsapp.com/verify-email/${verificationToken}?email=${user.email}`;

  const mailOptions = {
    from: "noreply@fittestsapp.com",
    to: user.email,
    subject: "Verify your email to get started with Fittest",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
      <img src="https://fittestsapp.com/assets/logo-RMM5KPhj.png " alt=Fittest Logo" style="width: 120px; margin-bottom: 20px; border-radius: 12px" margin: auto />

      <h2>Welcome to Fittest! 🎉</h2>
      <p>We're excited to have you on board. To get started, please verify your email address by clicking the button below:</p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #0E7CFF; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold;">
          Verify Email
        </a>
      </div>

      <p>If the button above doesn’t work, you can copy and paste this URL into your browser:</p>
      <p style="word-break: break-all; color: #555;">${verificationUrl}</p>

      <hr style="margin: 40px 0;" />
      <p style="font-size: 13px; color: #888;">If you didn't create a Fittest account, you can safely ignore this email.</p>
      <p style="font-size: 13px; color: #888;">Need help? Contact us at <a href="mailto:support@fittests.com">support@fittests.com</a></p>
    </div>
  `,
    text: `Welcome to Fittest!

    We're excited to have you. Please verify your email by visiting this link: ${verificationUrl}

    If you didn't sign up for Fittest, feel free to ignore this message.

    Need help? Reach out to fittestsapp@gmail.com.`,
  };

  try {
    await resend.emails.send(mailOptions);
    console.log("Verification email sent successfully!");
    res.status(201).json({
      msg: "User created. Please check your email for verification.",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error sending verification email:", error);
    res.status(500).json({ msg: "Failed to send verification email" });
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" });
    throw new UnauthenticatedError("Invalid credentials");
  }

  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Incorrect password" });
    throw new UnauthenticatedError("Incorrect password");
  }

  // NEW: Check if the user's email is verified
  if (!user.isVerified) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      msg: "Please verify your email before logging in.",
    });
    throw new UnauthenticatedError("Email not verified");
  }

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Add this
  });

  res.status(StatusCodes.OK).json({ msg: "User logged in" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};

export const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({
    emailVerificationToken: verificationToken,
  });

  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid or expired verification token" });
  }

  if (user.emailVerificationTokenExpiry < Date.now()) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid or expired verification token" });
  }

  user.isVerified = true;
  //console.log(user.isVerified);

  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpiry = undefined;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email successfully verified" });
};

export const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ msg: "Email already verified" });
    }

    const verificationToken = crypto.randomBytes(40).toString("hex");
    user.emailVerificationToken = verificationToken;
    user.emailVerificationTokenExpiry = Date.now() + 3600000;
    await user.save();

    const localVerificationEmail = `http://localhost:5173/verify-email/${verificationToken}?email=${email}`;
    const verificationUrl = `https://fittestsapp.com/verify-email/${verificationToken}?email=${email}`;

    const mailOptions = {
      from: "noreply@fittestsapp.com",
      to: user.email,
      subject: "Verify your email to get started with Fittest",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <img src="https://fittestsapp.com/assets/logo-RMM5KPhj.png " alt=Fittest Logo" style="width: 120px; margin-bottom: 20px; border-radius: 12px" margin: auto />
  
        <h2>Welcome to Fittest! 🎉</h2>
        <p>Here is your verification token!</p>
  
        <div style="text-align: center; margin: 30px 0;">
          <a href="${localVerificationEmail}" style="background-color: #0E7CFF; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold;">
            Verify Email
          </a>
        </div>
  
        <p>If the button above doesn’t work, you can copy and paste this URL into your browser:</p>
        <p style="word-break: break-all; color: #555;">${verificationUrl}</p>
  
        <hr style="margin: 40px 0;" />
        <p style="font-size: 13px; color: #888;">If you didn't create a Fittest account, you can safely ignore this email.</p>
        <p style="font-size: 13px; color: #888;">Need help? Contact us at <a href="mailto:support@fittests.com">support@fittests.com</a></p>
      </div>
    `,
      text: `Welcome to Fittest!
  
      We're excited to have you. Please verify your email by visiting this link: ${verificationUrl}
  
      If you didn't sign up for Fittest, feel free to ignore this message.
  
      Need help? Reach out to fittestsapp@gmail.com.`,
    };

    // Send the email
    try {
      await resend.emails.send(mailOptions);
      console.log("Verification email sent successfully!");
      res.status(201).json({
        msg: "Email verification has been sent again. Please check it.",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Error sending verification email:", error);
      res.status(500).json({ msg: "Failed to send verification email" });
    }

    res.status(200).json({ msg: "Verification email sent" });
  } catch (err) {
    console.error("Error resending verification email:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const checkVerification = async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json({ isVerified: user.isVerified });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (!email) return res.status(400).json({ msg: "Email is required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const resetToken = crypto.randomBytes(32).toString("hex");
  const tokenExpiration = Date.now() + 1000 * 60 * 15;

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = tokenExpiration;
  await user.save();

  const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`;

  await sendEmail({
    to: email,
    subject: "Reset Your Fittest Password",
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="text-align: center;">
          <img src="https://fittestsapp.com/assets/logo-RMM5KPhj.png" alt="Fittest Logo" width="120" style="margin-bottom: 20px; border-radius: 20px" />
          <h2 style="color: #333;">Reset Your Password</h2>
        </div>
  
        <p style="font-size: 16px; color: #555;">
          We received a request to reset your Fittest password. Click the button below to choose a new one. This link will expire in <strong>15 minutes</strong>.
        </p>
  
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #007bff; color: #fff; text-decoration: none; padding: 14px 24px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
            Reset Password
          </a>
        </div>
  
        <p style="font-size: 14px; color: #999;">
          If you didn’t request this, you can safely ignore this email.
        </p>
      </div>
  
      <div style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
        © ${new Date().getFullYear()} Fittest. All rights reserved.
      </div>
    </div>
    `,
  });
  console.log("sent");

  res.status(200).json({ msg: "Reset link sent to your email" });
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  console.log("Received reset:", req.body);
  if (!token || !password) {
    return res.status(400).json({ msg: "Token and password are required" });
  }

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ msg: "Token is invalid or has expired" });
  }

  const hashedPassword = await hashPassword(password);
  user.password = hashedPassword;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200).json({ msg: "Password has been reset successfully" });
};
