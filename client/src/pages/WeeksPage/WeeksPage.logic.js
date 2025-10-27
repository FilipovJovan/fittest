// Logic for WeeksPage
import {useNavigate} from "react-router-dom";

export const useWeeksPage = () => {
  const navigate = useNavigate();
  return {navigate};
};
