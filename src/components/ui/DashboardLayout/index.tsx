import React from "react";
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
    defaultValue: true,
  });
  console.log("show side nav", showSideNav);
  const handleShowSideBar = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="w-full flex relative">
      <motion.div
        className={cn(
          ` fixed text-white border-r-[1px]  overflow-auto  h-screen hidden lg:block `,
          showSideNav ? " w-[388px]" : "w-[80px]"
        )}
        initial={{ width: showSideNav ? "388px" : "80px" }}
        animate={{ width: showSideNav ? "388px" : "80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-secondary-500 h-screen">
          <div className=" flex items-center justify-between  px-8">
            <div className="flex space-x-3 items-center py-6 ">
              <img src={Logo} alt="" className="h-[35px] w-[35px]" />
              <p className="p-bold-24">Healthfit Nepal</p>
            </div>
            <motion.div
              className={`bg-black rounded p-2 cursor-pointer`}
              // initial={{ paddingLeft: showSideNav ? "80px" : "24px" }}
              // animate={{ paddingLeft: showSideNav ? "80px" : "24px" }}
              // transition={{ duration: 0.5 }}
              // onClick={handleShowSideBar}
            >
              <CgArrowLeft color="white" size={24} />
            </motion.div>
          </div>
          {/* <motion.div
            className={` h-[60px] flex  py-4  pt-6 items-center cursor-pointer`}
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
          <div className=" w-full mt-11">
            <SideBar showSideNav={showSideNav} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ marginLeft: showSideNav ? "388px" : "80px" }}
        animate={{ marginLeft: showSideNav ? "388px" : "80px" }}
        transition={{ duration: 0.5 }}
        // className={`w-full bg-[white]  rounded-[40px] h-screen ml-0 lg:ml-[-35px]`}
        className={`w-full bg-[#F3F3F3]`}
      >
        <div className="fixed z-10  w-full  pr-[388px] ">
          <Header />
        </div>

        <div className="p-4 -z-2 mt-[72px]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardLayout;
