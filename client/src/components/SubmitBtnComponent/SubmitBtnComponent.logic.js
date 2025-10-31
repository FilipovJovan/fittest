// Logic for SubmitBtnComponent
import {useNavigation} from "react-router-dom";

export const useSubmitBtnComponent = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return {isSubmitting};
};
