import { IoChevronDown } from "react-icons/io5";
import { MobileNav } from "./mobileNav";
const Header = () => {
  return (
    <div className=" flex justify-between items-center px-4 lg:px-0 lg:justify-end h-[60px] w-full py-2 shadow-xl">
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
        <IoChevronDown size={22} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
