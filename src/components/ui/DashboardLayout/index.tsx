import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import SideBar from "./sideBar";
import { cn } from "../../../lib/utilis";
import Header from "./header";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [showSideNav, setShowSideNav] = useLocalStorage({
    key: "showSideNav",
    defaultValue: false,
  });

  const handleShowSideBar = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="flex relative">
      <motion.div
        className={cn(
          ` text-white bg-secondary-500  h-screen hidden lg:block`,
          showSideNav ? " w-[260px]" : "w-[130px]"
        )}
        initial={{ width: showSideNav ? "260px" : "120px" }}
        animate={{ width: showSideNav ? "260px" : "120px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="">
          <motion.div
            className={`h-[60px] flex  py-4  pt-6 items-center  cursor-pointer ${
              showSideNav ? "ml-20" : "ml-6"
            }`}
            initial={{ marginLeft: showSideNav ? "80px" : "24px" }}
            animate={{ marginLeft: showSideNav ? "80px" : "24px" }}
            transition={{ duration: 0.5 }}
            onClick={handleShowSideBar}
          >
            <RxHamburgerMenu size={28} />
          </motion.div>
          <div className="mt-16 flex items-center  w-full ml-3 ">
            <SideBar showSideNav={showSideNav} />
          </div>
        </div>
      </motion.div>
      <div
        className={`w-full bg-[white]  rounded-[40px] h-screen ml-0 lg:ml-[-35px]`}
      >
        <Header />
        <div className="ml-4 mt-4"> {children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
