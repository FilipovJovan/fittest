import React from "react";

import { FaBowlFood } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdHealthAndSafety } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaChartBar } from "react-icons/fa";

const links = [
  { text: "Dashboard", path: ".", icon: <MdDashboard /> },
  { text: "Workout", path: "workout", icon: <CgGym /> },
  { text: "Diet", path: "diet", icon: <FaBowlFood /> },
  { text: "Progress", path: "progress", icon: <FaChartBar /> },
  { text: "Profile", path: "profile", icon: <ImProfile /> },
];

export default links;
