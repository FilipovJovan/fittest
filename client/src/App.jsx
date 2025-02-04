import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  Login,
  Register,
  FoodPage,
  ExercisePage,
  Profile,
  DashboardPage,
  Error,
  LandingPage,
  HealthPage,
  DashboardLayoutPage,
  ProgressPage,
  VerificationPage,
  UnsubscribePage,
  EbooksPage,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardPage";
import { action as profileAction } from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "verification",
        element: <VerificationPage />,
      },
      {
        path: "unsubscribe",
        element: <UnsubscribePage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "ebooks",
        element: <EbooksPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <DashboardLayoutPage />,
          },
          {
            path: "diet",
            element: <FoodPage />,
          },
          {
            path: "workout",
            element: <ExercisePage />,
          },
          {
            path: "health",
            element: <HealthPage />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "progress",
            element: <ProgressPage />,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
