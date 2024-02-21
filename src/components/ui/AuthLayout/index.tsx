import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex">
      <div className=" hidden md:block md:w-[55%] lg:w-[60%] ">
        <div className="bg-secondary-400 w-full h-full ">
          {/* <img
        src={Banner}
        alt=""
        className="w-full h-full object-fill rounded-xl"
      /> */}
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
