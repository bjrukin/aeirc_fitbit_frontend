import { RxDashboard } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { FaWalking } from "react-icons/fa";

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
    icon: <FaRegHeart size={26} />,
    role: ["admin"],
    hasChild: true,
    child: [
      {
        id: 10,
        title: "Doctor",
        path: "/doctor",
        role: ["admin"],
      },
      {
        id: 11,
        title: "Nurse",
        path: "/nurse",
        role: ["admin"],
      },
    ],
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
