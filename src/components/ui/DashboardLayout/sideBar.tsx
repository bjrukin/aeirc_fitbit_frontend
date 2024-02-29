import React, { useState } from "react";
import { navItems } from "../../../constants";
import ToolTip from "../../shared/Tooltip";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../../shared/Button";
import { Separator } from "../separator";
import { Avatar, AvatarImage } from "../avatar";
import { AvatarImages } from "../../../assets/images";
import { MdOutlineLogout } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

interface SideBarProps {
  showSideNav?: boolean;
}

// const SideBar: React.FC<SideBarProps> = ({ showSideNav }) => {
//   return (
//     <div className="py-4 pl-6">
//       <div>
//         {" "}
//         <div className="pr-6">
//           <Button
//             text={"Create New Session"}
//             className="h-12 w-full bg-grey-300 text-tertiary-100 text-lg font-semibold text-center py-[18px] hover:bg-[none]"
//           />
//           <Separator className="mt-4" />
//         </div>
//         <div className="pr-0">
//           <p className="text-black mt-4 mb-8 text-lg font-medium">
//             Menu Options
//           </p>
//           <div className="flex  flex-col w-full ">
//             {navItems?.map((el: any) => (
//               <NavLink
//                 to={el?.path}
//                 style={({ isActive }) => {
//                   return {
//                     color: isActive ? "#3E6DF9" : "#000",
//                     borderRightWidth: isActive ? "3px" : "0",
//                     borderRightColor: "#3E6DF9",
//                     borderRightHeight: isActive ? "3px" : "0",
//                     transition: "border-right 1s ease-in-out",
//                   };
//                 }}
//               >
//                 <div className="">
//                   <motion.div
//                     className="h-full py-4 w-full rounded  flex space-x-3 cursor-pointer"
//                     key={el?.id}
//                     whileHover={{
//                       color: "#3E6DF9",
//                     }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     {showSideNav ? (
//                       <p> {el?.icon}</p>
//                     ) : (
//                       <ToolTip content={el?.title}>{el?.icon}</ToolTip>
//                     )}
//                     {showSideNav && (
//                       <p className="p-semibold-20">{el?.title}</p>
//                     )}
//                   </motion.div>
//                 </div>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <Avatar>
//             <AvatarImage src={AvatarImages} alt="avatar" />
//           </Avatar>
//           <div>
//             <p className="p-semibold-18">Sumit Ghimire</p>
//             <p className="text-grey-500">User Name</p>
//           </div>
//         </div>
//         <MdOutlineLogout size={26} color="red"  className="cursor-pointer"/>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

const SideBar: React.FC<SideBarProps> = ({ showSideNav }) => {
  // const buttonClassName =
  //   "h-12 w-full bg-grey-300 text-tertiary-100 text-lg font-semibold text-center py-[18px] hover:bg-[none]";

  // const [value, setValue] = useState(300);
  // const totalValue = 400;
  // const percentage = (value / totalValue) * 100;
  return (
    <>
      <div className="text-[white] max-h-screen">
        {/* <div className="pr-6">
          <Button text={"Create New Session"} className={buttonClassName} />
          <Separator className="mt-4" />
        </div> */}
        <div className="pr-6">
          <div className="flex flex-col w-full">
            {navItems.map(({ path, title, icon }) => (
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  color: "white",
                  background: isActive ? "#576494" : "",
                  borderRadius: "8px",
                  transition: "border-right 1s ease-in-out",
                  marginBottom: "12px",
                })}
              >
                <motion.div
                  className={
                    " py-4 px-6 w-full rounded  flex space-x-3 cursor-pointer hover:bg-[#576494] duration-800 ease-in-out "
                  }
                  // whileHover={{ background: "#576494" }}
                  // transition={{ duration: 0.4 }}
                >
                  {showSideNav ? (
                    <p>{icon}</p>
                  ) : (
                    <ToolTip content={title}>{icon}</ToolTip>
                  )}
                  {showSideNav && <p className="p-semibold-20">{title}</p>}
                </motion.div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="px-6">
        <div className="mt-[87px]">
          <p className="text-black text-lg mb-1">Basic Insights</p>
          <Card className="bg-[#FFFFFF] border-none ">
            <CardHeader>
              <CardDescription className="text-lg">
                Daily Calorie Burn
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <div>
                <input
                  type="range"
                  min="0"
                  max={totalValue}
                  value={value}
                  className="custom-slider"
                  style={{
                    width: "300px",
                    height: "10px",
                    borderRadius: "10px",
                    background: `linear-gradient(to right, ${"#93CF7E"} ${percentage}%, gray ${percentage}%)`,
                    appearance: "none",
                  }}
                  disabled
                />
                <p>Percentage</p>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="flex items-center justify-between  pb-9 pt-4 ">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={AvatarImages} alt="avatar" />
            </Avatar>
            <div>
              <p className="p-semibold-18">Sumit Ghimire</p>
              <p className="text-grey-500">User Name</p>
            </div>
          </div>
          <MdOutlineLogout size={26} color="red" className="cursor-pointer" />
        </div>
      </div> */}
    </>
  );
};

export default SideBar;
