import React from "react";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  Login,
  Register,
  FoodPage,
  WorkoutPage,
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
  AllMealsPage,
  MacrosPage,
  DayPage,
  WeekPage,
  SetsPerMusclePage,
  VolumePerMusclePage,
  WeeklyVolumePage,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
  PrivacyPolicy,
  TermsAndConditions,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardPage";
import { action as profileAction } from "./pages/Profile";
import { action as forgotPasswordAction } from "./pages/ForgotPassword";
//import { loader as FoodLoader } from "./pages/FoodPage";

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
        path: "/verify-email/:verificationToken",
        element: <VerifyEmail />,
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
        path: "/forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
      },
      { path: "/reset-password", element: <ResetPassword /> },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "ebooks",
        element: <EbooksPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
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
            //loader: FoodLoader,
            children: [
              {
                path: "macros",
                element: <MacrosPage />,
              },
              {
                path: "all-meals",
                element: <AllMealsPage />,
              },
            ],
          },
          {
            path: "workout",
            element: <WorkoutPage />,
            children: [
              {
                path: "week/:weekId",
                element: <WeekPage />,
              },
              {
                path: "week/:weekId/day/:dayNumber/exercise/:exerciseId",
                element: <DayPage />,
              },
            ],
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
            children: [
              { path: "sets", element: <SetsPerMusclePage /> },
              { path: "volume", element: <VolumePerMusclePage /> },
              { path: "weekly", element: <WeeklyVolumePage /> },
            ],
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
