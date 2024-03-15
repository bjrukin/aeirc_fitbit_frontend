import React, { useState } from "react";
import { navItems } from "../../../constants";
import ToolTip from "../../shared/Tooltip";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

interface SideBarProps {
  showSideNav?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ showSideNav }) => {
  const [showChild, setShowChild] = useLocalStorage({
    key: "showChild",
    defaultValue: false,
  });
  // const buttonClassName =
  //   "h-12 w-full bg-grey-300 text-tertiary-100 text-lg font-semibold text-center py-[18px] hover:bg-[none]";

  // const [value, setValue] = useState(300);
  // const totalValue = 400;
  // const percentage = (value / totalValue) * 100;
  return (
    <>
      <div className="text-[white]  ">
        {/* <div className="pr-6">
          <Button text={"Create New Session"} className={buttonClassName} />
          <Separator className="mt-4" />
        </div> */}
        <div className="pr-6">
          <div className="flex flex-col w-full ml-2 lg:ml-0">
            {navItems.map((item: any) => (
              <>
                {" "}
                {item?.hasChild ? (
                  <div
                    className=" py-7  text-black   px-3 2xl:px-6   w-full rounded hover:text-primary-500  duration-800 ease-in-out  flex items-center space-x-3 cursor-pointer  flex items-center w-full justify-between"
                    onClick={() => setShowChild(!showChild)}
                  >
                    <div className="flex items-center space-x-3">
                      <p className="">{item?.icon}</p>
                      <p className="p-semibold-16 xl:p-semibold-18 2xl:p-semibold-20  hidden lg:block">
                        {item?.title}
                      </p>
                    </div>
                    <div>
                      {showChild ? (
                        <IoChevronUp size={24} />
                      ) : (
                        <IoChevronDown size={24} />
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <NavLink
                      to={item?.path}
                      style={({ isActive }) => ({
                        color: isActive ? "#3E6DF9" : "black",
                        // background: isActive ? "#3E6DF9" : "",
                        borderRadius: "8px",
                        transition: "border-right 1s ease-in-out",
                        // marginBottom: "12px",
                      })}
                    >
                      <motion.div
                        onClick={() => setShowChild(false)}
                        className={
                          " py-7 px-3 2xl:px-6 w-full rounded hover:text-primary-500 duration-800 ease-in-out  flex items-center space-x-3 cursor-pointer "
                        }
                      >
                        <p className="p-semibold-16 xl:p-semibold-18 2xl:p-semibold-20  hidden lg:block">
                          {item?.icon}
                        </p>
                        <p className="p-semibold-16 xl:p-semibold-18 2xl:p-semibold-20  hidden lg:block">
                          {item?.title}
                        </p>
                      </motion.div>
                    </NavLink>
                  </>
                )}
                {/* {showSideNav ? (
                    <p className="">{icon}</p>
                  ) : (
                    <ToolTip content={title}>{icon}</ToolTip>
                  )}
                  {showSideNav && (
                    <p className="p-semibold-16 xl:p-semibold-18 2xl:p-semibold-20  hidden lg:block">
                      {title}
                    </p>
                  )} */}
                {item?.hasChild &&
                  showChild &&
                  item?.child?.map((el: any) => {
                    return (
                      <NavLink
                        to={el?.path}
                        style={({ isActive }) => ({
                          color: isActive ? "#3E6DF9" : "black",
                          // background: isActive ? "#3E6DF9" : " ",
                          borderRadius: "4px",
                          // marginBottom: "12px",
                          marginLeft: "36px",
                        })}
                      >
                        <div className="py-4 flex  px-6 w-full rounded hover:text-primary-500  duration-800 ease-in-out  flex items-center space-x-3 cursor-pointer p-semibold-16 xl:p-semibold-18 2xl:p-semibold-20  hidden lg:block">
                          {el?.title}
                        </div>
                      </NavLink>
                    );
                  })}
              </>
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
