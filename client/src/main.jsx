import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

import { AuthProvider } from "../context/AuthContext.jsx"; // ✅ Add this
import { WorkoutProvider } from "../context/WorkoutContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {/* ✅ Auth should wrap everything else */}
      <WorkoutProvider>
        <App />
        <ToastContainer position="top-center" />
      </WorkoutProvider>
    </AuthProvider>
  </React.StrictMode>
);
