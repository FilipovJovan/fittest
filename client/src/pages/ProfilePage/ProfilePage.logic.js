// Logic for ProfilePage
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";

export const action = async ({request}) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // If any of the fields like injuries can have multiple values (like checkboxes)
    // make sure they are arrays:
    data.muscleInjuries = formData.getAll("muscleInjuries");
    data.jointInjuries = formData.getAll("jointInjuries");

    // console.log("Final data to send:", data);

    try {
        const response = await customFetch.patch(
            "/generate-custom/workout/user-values",
            data,
            {
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json",
                },
            }
        );

        // console.log("Response:", response.data);
        toast.success("Profile updated successfully");
    } catch (error) {
        console.error("Error:", error);
        toast.error(error?.response?.data?.message || "Failed to update profile");
    }

    return null;
};

export const useProfilePage = (props) => {
    const [workout, setWorkout] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);

    useEffect(() => {
        const fetchWorkout = async () => {
            const apiKey = import.meta.env.VITE_API_KEY;
            try {
                const response = await customFetch.get(
                    "/generate-custom/workout/get-workout",
                    {headers: {"x-api-key": apiKey}}
                );
                setWorkout(response.data.workoutProgram);
            } catch (error) {
                console.error("Failed to fetch workout:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkout();
    }, []);
    const muscleInjuryOptions = [
        "chest",
        "back",
        "triceps",
        "biceps",
        "traps",
        "shoulders",
        "abs",
        "quadriceps",
        "hamstrings",
        "calves",
        "forearm",
        "none",
    ];

    const jointInjuryOptions = [
        "elbow",
        "wrist",
        "knee",
        "ankle",
        "lower back",
        "none",
    ];

    const {user} = useOutletContext();
    const {
        name,
        lastName,
        email,
        password,
        date,
        weight,
        height,
        muscleInjuries,
        jointInjuries,
        split,
        utcOffset,
    } = user;
    return {
        lastName,
        name,
        loading,
        workout,
        user,
        email,
        showPassword,
        togglePassword,
        muscleInjuryOptions,
        jointInjuryOptions
    };
};
