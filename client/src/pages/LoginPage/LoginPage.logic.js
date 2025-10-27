// Logic for LoginPage
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";
import {redirect, useNavigation} from "react-router-dom";
import {useState} from "react";

export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const apiKey = import.meta.env.VITE_API_KEY;

        const res = await customFetch.post("/auth/login", data, {
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
            },
        });
        const events = res.data.events || [];

        toast.success("Login successful");

        events.forEach((event) => {
            switch (event.type) {
                case "xpEarned":
                    toast.success(`+${event.amount} XP!`);
                    break;
                case "badgeUnlocked":
                    toast.success(`🏅 New badge: ${event.name}`);
                    break;
                case "rewardUnlocked":
                    toast.info(`🎁 Reward unlocked: ${event.name}`);
                    break;
            }
        });
        return redirect("/dashboard");
    } catch (error) {
        // console.log(error);

        toast.error(error?.response?.data?.msg);
        return error;
    }
};

export const useLoginPage = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "Submitting";
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);

    return {isSubmitting, showPassword, togglePassword}
};
