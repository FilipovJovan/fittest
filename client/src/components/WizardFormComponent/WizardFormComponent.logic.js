// Logic for WizardFormComponent
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export const useWizardFormComponent = ({onFormDataChange, onFinalStep}) => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [step, setStep] = useState(1);
    const [unit, setUnit] = useState("metric");
    const [weightKg, setWeightKg] = useState(70);
    const [heightCm, setHeightCm] = useState(175);
    const [weightLbs, setWeightLbs] = useState(70 * 2.20462);
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(9);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        date: "",
        email: "",
        password: "",
        age: 21,
        gender: "",
        activityLevel: "",
        fitnessGoal: "",
        workoutLevel: 5,
        userValues: {
            weight: 70,
            height: 175,
            muscleInjuries: [],
            jointInjuries: [],
            split: "",
            goal: "none",
            difficultyLevel: "",
            restDays: [],
            equipment: ["barbells", "machines", "dumbbells"],
            workoutType: "hypertrophy",
        },
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const restDayLimits = {
        broSplit5x: 2,
        fullBody2x: 5,
        fullBody3x: 4,
        fullBody4x: 3,
        pushPullLegs3x: 4,
        pushPullLegs6x: 1,
        pushPullLegsUpperLower5x: 2,
        upperLower2x: 5,
        upperLower3x: 4,
        upperLower4x: 3,
    };

    const workoutLevels = {
        broSplit5x: 5,
        fullBody2x: 2,
        fullBody3x: 3,
        fullBody4x: 4,
        pushPullLegs3x: 3,
        pushPullLegs6x: 6,
        pushPullLegsUpperLower5x: 5,
        upperLower2x: 2,
        upperLower3x: 3,
        upperLower4x: 4,
    };

    // Synchronize Metric and Imperial states
    useEffect(() => {
        if (unit === "metric") {
            setWeightLbs(weightKg * 2.20462);
            const inches = heightCm / 2.54;
            setHeightFeet(Math.floor(inches / 12));
            setHeightInches(Math.round(inches % 12));
        } else {
            setWeightKg(weightLbs / 2.20462);
            const totalInches = heightFeet * 12 + heightInches;
            setHeightCm(totalInches * 2.54);
        }
    }, [unit, weightKg, heightCm, weightLbs, heightFeet, heightInches]);

    useEffect(() => {
        if (formData.date) {
            const age = calculateAge(formData.date);
            // console.log("Date:", formData.date);
            // console.log("Age:", age);

            if (!isNaN(age)) {
                setFormData((prevData) => ({
                    ...prevData,
                    age: age.toString(),
                }));

                onFormDataChange({age: age.toString()});

                if (age < 18) {
                    toast.warning("You must be at least 18 years old.");
                }
            }
        }
    }, [formData.date]);

    const toggleRestDay = (day) => {
        setFormData((prevFormData) => {
            const currentRestDays = prevFormData.userValues.restDays || [];
            const maxRestDays = restDayLimits[prevFormData.userValues.split] || 7;

            let updatedRestDays;
            if (currentRestDays.includes(day)) {
                updatedRestDays = currentRestDays.filter((d) => d !== day);
            } else {
                if (currentRestDays.length < maxRestDays) {
                    updatedRestDays = [...currentRestDays, day];
                } else {
                    return prevFormData;
                }
            }

            return {
                ...prevFormData,
                userValues: {
                    ...prevFormData.userValues,
                    restDays: updatedRestDays,
                },
            };
        });
    };

    const toggleMuscleInjury = (muscle) => {
        const currentInjuries = formData.userValues.muscleInjuries || [];
        const isSelected = currentInjuries.includes(muscle);

        const updatedInjuries = isSelected
            ? currentInjuries.filter((m) => m !== muscle) // remove if selected
            : [...currentInjuries, muscle]; // add if not selected

        handleFieldChange("userValues", {
            ...formData.userValues,
            muscleInjuries: updatedInjuries,
        });
    };

    const toggleJointInjury = (joint) => {
        const currentInjuries = formData.userValues.jointInjuries || [];
        const isSelected = currentInjuries.includes(joint);

        const updatedInjuries = isSelected
            ? currentInjuries.filter((m) => m !== joint) // remove if selected
            : [...currentInjuries, joint]; // add if not selected

        handleFieldChange("userValues", {
            ...formData.userValues,
            jointInjuries: updatedInjuries,
        });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        onFormDataChange({[name]: value});
    };

    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    formData.workoutLevel = workoutLevels[formData.userValues.split] || 0;

    const handleUserValuesChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            userValues: {
                ...prevData.userValues,
                [name]: value,
            },
        }));
    };

    const calculateAge = (birthDate) => {
        if (!(birthDate instanceof Date)) return null; // optional safety check

        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    };

    const nextStep = () => {
        // Update formData.userValues with the latest weight and height
        setFormData((prevData) => ({
            ...prevData,
            userValues: {
                ...prevData.userValues,
                weight: unit === "metric" ? weightKg : weightLbs / 2.20462,
                height:
                    unit === "metric"
                        ? heightCm
                        : (heightFeet * 12 + heightInches) * 2.54,
            },
        }));
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        const finalData = {...formData};

        try {
            await onFinalStep(finalData); // Wait for async process
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false); // Optional: keep disabled or re-enable
        }
    };

    const handleUnitChange = (newUnit) => {
        setUnit(newUnit);
    };

    const handleInchesChange = (e) => {
        let inches = parseFloat(e.target.value) || 0;

        if (inches < 0) {
            setHeightInches(0);
            return;
        }

        if (inches >= 12) {
            setHeightFeet((prevFeet) => prevFeet + Math.floor(inches / 12));
            inches = inches % 12;
        }

        setHeightInches(inches);
    };

    const handleWeightKgChange = (value) => {
        const numValue = parseFloat(value) || 0;
        setWeightKg(numValue);
    };

    const handleHeightCmChange = (value) => {
        const numValue = parseFloat(value) || 0;
        setHeightCm(numValue);
    };

    const handleWeightLbsChange = (value) => {
        const numValue = parseFloat(value) || 0;
        setWeightLbs(numValue);
    };

    const handleHeightFeetChange = (value) => {
        const numValue = parseFloat(value) || 0;
        setHeightFeet(numValue);
    };

    const age = formData.date ? calculateAge(new Date(formData.date)) : 0;
    return {
        step,
        formData,
        setFormData,
        nextStep,
        unit,
        handleUnitChange,
        weightKg,
        setWeightKg,
        heightCm,
        setHeightCm,
        weightLbs,
        setWeightLbs,
        heightFeet,
        setHeightFeet,
        heightInches,
        handleInchesChange,
        prevStep,
        handleFieldChange,
        restDayLimits,
        toggleRestDay,
        toggleMuscleInjury,
        toggleJointInjury,
        handleChange,
        togglePassword,
        showPassword,
        age,
        isSubmitting,
        handleSubmit,
        acceptedTerms,
        setAcceptedTerms
    };
};
