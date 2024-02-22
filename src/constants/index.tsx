import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdMailUnread } from "react-icons/io";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome size={26} />,
  },
  {
    id: 2,
    title: "Profile",
    path: "/profile",
    icon: <IoPersonSharp size={26} />,
  },
  {
    id: 3,
    title: "Health",
    path: "/health",
    icon: <FaHeart size={26} />,
  },
  {
    id: 4,
    title: "Setting",
    path: "/setting",
    icon: <IoMdSettings size={26} />,
  },
  {
    id: 5,
    title: "Message",
    path: "/message",
    icon: <IoMdMailUnread size={26} />,
  },
];
