import { redirect, useNavigation } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

// Action function for react-router form
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    await customFetch.post("/auth/forgot-password", data, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
    toast.success("Reset link sent to your email");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Error sending reset link");
    return null;
  }
};

// Hook for UI logic
export const useForgotPassword = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return { isSubmitting };
};
