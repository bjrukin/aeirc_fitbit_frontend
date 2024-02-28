import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdMailUnread } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { FaWalking } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { MdDataSaverOn } from "react-icons/md";
import { IoClipboardOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard size={26} />,
  },
  {
    id: 2,
    title: "Health And Fitness",
    path: "/health",
    icon: <FaRegHeart size={26} />,
  },
  {
    id: 3,
    title: "Activity",
    path: "/activity",
    icon: <FiActivity size={26} />,
  },
  {
    id: 4,
    title: "Sleep",
    path: "/sleep",
    icon: <IoBedOutline size={26} />,
  },
  {
    id: 5,
    title: "Exercise",
    path: "/exercise",
    icon: <FaWalking size={26} />,
  },
  {
    id: 6,
    title: "Trends",
    path: "/trends",
    icon: <MdTrendingUp size={26} />,
  },
  {
    id: 7,
    title: "Reports And Data",
    path: "/reports",
    icon: <MdDataSaverOn size={26} />,
  },
  {
    id: 8,
    title: "Onboarding",
    path: "/onboard",
    icon: <IoClipboardOutline size={26} />,
  },
  {
    id: 9,
    title: "Turbo On Watch",
    path: "/turbo-on-watch",
    icon: <FaCircle size={26} />,
  },
];
