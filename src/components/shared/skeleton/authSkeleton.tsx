import React from "react";
import { Skeleton } from "../../ui/skeleton";
interface SkeletonElementProps {
  width?: any;
  height?: Number;
  marginTop?: Number;
}

 export const SkeletonElement: React.FC<SkeletonElementProps> = ({
  width,
  height,
  marginTop,
}) => (
  <Skeleton
    className={`w-[${width}px] h-[${height}px] mt-${marginTop} rounded-xl`}
  />
);

export const AuthSkeleton = () => (
  <div className="flex-1 p-4 lg:p-8  lg:px-16  h-full text-black  flex justify-center flex-col">
    <div className="text-center"></div>
    <div className="flex flex-col ">
      <div className=" flex flex-col items-center justify-center mb-5 ">
        <SkeletonElement width={250} height={25} marginTop={0} />
        <SkeletonElement width={150} height={25} marginTop={2} />
      </div>
      <SkeletonElement width={"full"} height={35} marginTop={5} />
      <SkeletonElement width={"full"} height={35} marginTop={5} />
      <SkeletonElement width={"full"} height={35} marginTop={5} />
      <div className="flex justify-end">
        <SkeletonElement width={100} height={30} marginTop={5} />
      </div>
    </div>
  </div>
);
