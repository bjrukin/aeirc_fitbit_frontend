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
    role: ["admin"],
  },
  {
    id: 2,
    title: "Hospital Staff",
    path: "/staff",
    icon: <FaRegHeart size={26} />,
    role: ["admin"],
  },
  {
    id: 3,
    title: "Hospital",
    path: "/hospital",
    icon: <FiActivity size={26} />,
    role: ["admin"],
  },
  {
    id: 4,
    title: "Watch Users",
    path: "/users",
    icon: <IoBedOutline size={26} />,
    role: ["admin"],
  },
  {
    id: 5,
    title: "User Reports",
    path: "/exercise",
    icon: <FaWalking size={26} />,
    role: ["admin"],
  },
  // {
  //   id: 6,
  //   title: "Trends",
  //   path: "/trends",
  //   icon: <MdTrendingUp size={26} />,
  // },
  // {
  //   id: 7,
  //   title: "Reports And Data",
  //   path: "/reports",
  //   icon: <MdDataSaverOn size={26} />,
  // },
  // {
  //   id: 8,
  //   title: "Onboarding",
  //   path: "/onboard",
  //   icon: <IoClipboardOutline size={26} />,
  // },
  // {
  //   id: 9,
  //   title: "Turbo On Watch",
  //   path: "/turbo-on-watch",
  //   icon: <FaCircle size={26} />,
  // },
];

export const HospitalFormStep = [
  { id: 1, title: "Hospital Details", subtitle: "Step 1" },
  { id: 2, title: "Additional Details", subtitle: "Step 2" },
];
export const MedicalPersonalFormStep = [
  { id: 1, title: "Basic Personal Info", subtitle: "Step 1" },
  { id: 2, title: "Contact And Id Details", subtitle: "Step 2" },
  { id: 3, title: "Address Details", subtitle: "Step 3" },
];
