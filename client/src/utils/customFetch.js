import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "/api/v1";
// console.log("API Base URL is:", baseURL);

const customFetch = axios.create({
  baseURL,
  withCredentials: true,
});

export default customFetch;
