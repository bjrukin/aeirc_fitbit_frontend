import React from "react";
import { navItems } from "../../../constants";
import ToolTip from "../../shared/Tooltip";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface SideBarProps {
  showSideNav?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ showSideNav }) => {
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
            {navItems.map(({ path, title, icon }) => (
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  color: isActive ? "white" : "black",
                  background: isActive ? "#3E6DF9" : "",
                  borderRadius: "8px",
                  transition: "border-right 1s ease-in-out",
                  marginBottom: "12px",
                })}
              >
                <motion.div
                  className={
                    " py-3  2xl:py-4 3xl:py-6 px-6 w-full rounded hover:bg-primary-500 hover:text-white duration-800 ease-in-out  flex items-center space-x-3 cursor-pointer "
                  }
                >
                  {showSideNav ? (
                    <p className="">{icon}</p>
                  ) : (
                    <ToolTip content={title}>{icon}</ToolTip>
                  )}
                  {showSideNav && (
                    <p className="p-semibold-16 xl:p-semibold-18 2xl:p-semibold-20  hidden lg:block">
                      {title}
                    </p>
                  )}
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
