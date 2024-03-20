import React from "react";
import { Drop } from "../../../assets/images";
import { UserCardProps, getTimeInMinutes } from ".";

const UserStepCard: React.FC<UserCardProps> = ({
  paramName,
  paramValue,
  timestamp,
  className,
  imgSrc,
}) => {
  return (
    <>
      <div className="bg-white hover:border-[1px] hover:border-primary-500 curspor-pointer w-full flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <img src={Drop} alt="drop" className="" />
            <p className="font-semibold  text-tertiary-950  text-base">
              {paramName}
            </p>
          </div>
          <p>Today</p>
        </div>

        <div className="pt-[50px]">
          <p className="font-semibold text-xl text-black">{paramValue} steps</p>
          <p className="font-semibold text-lg text-tertiary-950">
            Measured {getTimeInMinutes(timestamp)} Minutes Ago
          </p>
        </div>
      </div>
    </>
  );
};

export default UserStepCard;
