import { Router } from "express";
const router = Router();
import {
  forgotPassword,
  login,
  logout,
  register,
  resetPassword,
  verifyEmail,
  resendVerificationEmail,
  checkVerification,
} from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

router.post("/signup-newsletter");
router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.get("/logout", logout);
router.get("/verify-email/:verificationToken", verifyEmail);
router.post("/resend-verification-email", resendVerificationEmail);
router.get("/check-verification-status", checkVerification);

export default router;
