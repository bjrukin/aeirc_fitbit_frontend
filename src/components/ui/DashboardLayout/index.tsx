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
          ` fixed text-white bg-secondary-500  h-screen hidden lg:block`,
          showSideNav ? " w-[180px]" : "w-[80px]"
        )}
        initial={{ width: showSideNav ? "180px" : "80px" }}
        animate={{ width: showSideNav ? "180px" : "80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="">
          <motion.div
            className={` h-[60px] bg-[#eeeeee] flex  py-4  pt-6 items-center cursor-pointer border-r border-gray-200`}
            initial={{ paddingLeft: showSideNav ? "80px" : "24px" }}
            animate={{ paddingLeft: showSideNav ? "80px" : "24px" }}
            transition={{ duration: 0.5 }}
            onClick={handleShowSideBar}
          >
            <RxHamburgerMenu
              size={35}
              color="black"
              className="rounded-full bg-gray-200 text-white p-2"
            />
          </motion.div>
          <div className="mt-16 flex items-center  w-full ml-3 ">
            <SideBar showSideNav={showSideNav} />
          </div>
        </div>
      </motion.div>
      <motion.div
       initial={{ marginLeft: showSideNav ? "180px" : "80px" }}
       animate={{ marginLeft: showSideNav ? "180px" : "80px" }}
       transition={{ duration: 0.5 }}
    
        // className={`w-full bg-[white]  rounded-[40px] h-screen ml-0 lg:ml-[-35px]`}
        className={`w-full bg-[white]  rounded-[40px] h-screen`}
      >
        <Header />
        <div className="mt-4 px-4 bg-[#eeeeee] h-screen"> 
        dasdddddddddddd
        {children}</div>
      </motion.div>
    </div>
  );
};

export default DashboardLayout;
