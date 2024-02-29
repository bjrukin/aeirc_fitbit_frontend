import React from "react";
import { Skeleton } from "../../ui/skeleton";
interface SkeletonElementProps {
  width?: any;
  height?: Number;
  marginTop?: Number;
}

const SkeletonElement: React.FC<SkeletonElementProps> = ({
  width,
  height,
  marginTop,
}) => (
  <Skeleton
    className={`w-[${width}px] h-[${height}px] mt-${marginTop} rounded-xl`}
  />
);

const SkeletonRow = () => (
  <div className="flex items-center justify-between">
    {Array(4).fill(<SkeletonElement width={200} height={20} marginTop={5} />)}
  </div>
);

export const AuthSkeleton = () => (
  <div className="flex-1 p-4 lg:p-8  lg:px-16  h-full text-black  flex justify-center flex-col">
    <div className="text-center"></div>
    <div className="flex flex-col ">
      <div className=" flex flex-col items-center justify-center mb-5 ">
        <SkeletonElement width={250} height={25} marginTop={0} />
        <SkeletonElement width={150} height={25} marginTop={2} />
        {/* <SkeletonElement width={300} height={15} marginTop={2} />
        <SkeletonElement width={200} height={15} marginTop={2} /> */}
      </div>
      <SkeletonElement width={"full"} height={35} marginTop={5} />
      <SkeletonElement width={"full"} height={35} marginTop={5} />
      <SkeletonElement width={"full"} height={35} marginTop={5} />
      <div className="flex justify-end">
        <SkeletonElement width={100} height={30} marginTop={5} />
      </div>
    </div>
    {/* <SkeletonElement width={500} height={20} marginTop={5} />
    <div className="border-[1px] pb-5 px-5 mt-5 border-border pt-5 mb-5">
      {Array(5).fill(<SkeletonRow />)}
    </div>
    <div className="flex items-center justify-between mt-2 ">
      <SkeletonElement width={200} height={20} marginTop={0} />
      <div className="flex space-x-2 ">
        <SkeletonElement width={80} height={30} marginTop={0} />
        <SkeletonElement width={80} height={30} marginTop={0} />
      </div>
    </div> */}
  </div>
);
