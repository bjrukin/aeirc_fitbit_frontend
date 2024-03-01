import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { MobileNav } from "./mobileNav";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/slice/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-white border-b border-gray-300 flex justify-between items-center px-4 lg:px-0 lg:justify-end h-[72px] w-full  ">
      <div className="lg:hidden cursor-pointer">
        <MobileNav />
      </div>
      <div className="pr-2 lg:pr-10 flex items-center  space-x-4">
        <div className="h-9 w-9 rounded-full  text-xl bg-black text-white pl-3 pt-1">
          S
        </div>
        <div className="hidden lg:block">
          <p className="p-semibold-14">Sumit Ghimire</p>
          <p className="p-medium-12 text-grey-500">23 years old</p>
        </div>
        <div className="relative">
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoChevronUp size={22} className="cursor-pointer" />
            ) : (
              <IoChevronDown size={22} className="cursor-pointer" />
            )}
          </div>
          {isOpen && (
            <div className="border-[1px] border-black absolute top-9 right-0 p-2 px-4 rounded cursor-pointer">
              <p
                className="text-black"
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
