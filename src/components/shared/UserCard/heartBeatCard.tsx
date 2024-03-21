import React from "react";
import { Drop } from "../../../assets/images";
import { SimpleLineChart } from "../Chart/linechart";

export interface UserCardProps {
  paramName: string;
  paramValue: string;
  timestamp: string;
  className?: string;
  imgSrc?: string;
}

export const getTimeInHours = (data: any) => {
  return (
    //@ts-ignore
    <>{Math.floor((new Date().getTime() - new Date(data)) / (60000 * 60))} </>
  );
};

export const HeartBeatCard: React.FC<UserCardProps> = ({
  paramName,
  paramValue,
  timestamp,
  imgSrc,
}) => (
  <div>
    <div className="cursor-pointer p-6   hover:border-[1px] hover:border-primary-500 border-[1px] border-tertiary-750  rounded-lg bg-white ">
      <div className="flex space-x-4 items-center">
        <img src={imgSrc} alt="drop" className="w-8 h-8 " />
        <p className="font-semibold text-tertiary-950 text-base ">
          {paramName}
        </p>
      </div>
      <div className="pt-[50px]">
        <p className="font-semibold text-3xl text-black"> {paramValue}BPM</p>
        <p className="font-semibold text-lg text-black">
          Measured {getTimeInHours(timestamp)} Hours Ago
        </p>
      </div>
      <div className="mt-3">
        <SimpleLineChart variant={"secondary"} />
      </div>
    </div>
  </div>
);
