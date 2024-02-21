import React from "react";
import { navItems } from "../../../constants";
import ToolTip from "../../shared/Tooltip";
import { motion } from "framer-motion";

interface SideBarProps {
  showSideNav?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ showSideNav }) => {
  return (
    <div className="h-[42px] flex  flex-col space-y-12  w-full  mr-16 ">
      {navItems?.map((el: any) => (
        <motion.div
          className="h-full w-full rounded px-3 py-2 flex space-x-3 cursor-pointer"
          key={el?.id}
          whileHover={{
            backgroundColor: showSideNav ? "#2D4BB6" : "#2D4BB6",
          }}
          transition={{ duration: 0.5}}
        >
          {showSideNav ? (
            <p> {el?.icon}</p>
          ) : (
            <ToolTip content={el?.title}>{el?.icon}</ToolTip>
          )}
          {showSideNav && <p className="p-medium-18">{el?.title}</p>}
        </motion.div>
      ))}
    </div>
  );
};

export default SideBar;
