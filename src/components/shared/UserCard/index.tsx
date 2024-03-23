import React from "react";
import { Drop } from "../../../assets/images";

export interface UserCardProps {
  paramName: string;
  paramValue: string;
  timestamp: string;
  className?: string;
  imgSrc?: string;
}

export const getTimeInMinutes = (data: any) => {
  //@ts-ignore
  return <>{Math.floor((new Date().getTime() - new Date(data)) / 60000)} </>;
};

export const UserCard: React.FC<UserCardProps> = ({
  paramName,
  paramValue,
  timestamp,
  className,
  imgSrc,
}) => (
  <div
    className={`bg-white cursor-pointer hover:border-[1px] hover:border-primary-500 w-full flex flex-col space-y-3 border-[1px] border-tertiary-750 rounded-lg p-6  w-full ${className}`}
  >
    <img src={imgSrc} alt="drop" className="w-8 h-8 " />
    <p className="font-semibold text-tertiary-950 text-base mt-4">
      {paramName}
    </p>
    <div className="pt-[50px]">
      <p className="font-semibold text-xl text-black">{paramValue}</p>
      <p className="font-semibold text-lg text-tertiary-950">
        Measured {getTimeInMinutes(timestamp)} Minutes Ago
      </p>
    </div>
  </div>
);
