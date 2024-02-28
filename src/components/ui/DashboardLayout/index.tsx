import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import SideBar from "./sideBar";
import { cn } from "../../../lib/utilis";
import Header from "./header";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { CgArrowLeft } from "react-icons/cg";
import { Logo } from "../../../assets/images";

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
    <div className="w-full flex relative bg-[#eeeeee]">
      <motion.div
        className={cn(
          ` fixed text-black border-r-[1px] border-b-[1px] overflow-auto  h-screen hidden lg:block`,
          showSideNav ? " w-[388px]" : "w-[80px]"
        )}
        initial={{ width: showSideNav ? "388px" : "80px" }}
        animate={{ width: showSideNav ? "388px" : "80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#eeeeee]">
          <div className=" flex items-center justify-between p-4 border-t-0 border-l-0  border-[1px] ">
            <div className="flex space-x-3 items-center ">
              <img src={Logo} alt="" className="h-[35px] w-[35px]" />
              <p className="p-bold-24">FitPulse</p>
            </div>
            <div className="bg-black rounded p-2 cursor-pointer">
              <CgArrowLeft color="white" size={24}/>
            </div>
          </div>
          {/* <motion.div
            className={` h-[60px] flex  py-4  pt-6 items-center cursor-pointer border-r border-gray-200`}
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
          </motion.div> */}
          <div className=" w-full">
            <SideBar showSideNav={showSideNav} />
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ marginLeft: showSideNav ? "180px" : "80px" }}
        animate={{ marginLeft: showSideNav ? "180px" : "80px" }}
        transition={{ duration: 0.5 }}
        // className={`w-full bg-[white]  rounded-[40px] h-screen ml-0 lg:ml-[-35px]`}
        className={`w-full bg-[white]  rounded-[40px] h-screen`}
      >
        <Header />
        <div className="mt-4 px-4 bg-[#eeeeee] h-screen">
          dasdddddddddddd
          {children}
        </div>
      </motion.div> */}
    </div>
  );
};

export default DashboardLayout;
