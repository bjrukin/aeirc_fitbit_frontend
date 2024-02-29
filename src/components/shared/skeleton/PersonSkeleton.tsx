import React from "react";
import { Skeleton } from "../ui/skeleton";

const PersonSkeleton = () => {
  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex space-x-4 items-center">
        <Skeleton className="w-[40px] h-[40px] mt-3  rounded-full" />
        <div>
          <Skeleton className="w-[150px] h-[25px]   rounded" />
          <Skeleton className="w-[150px] h-[20px] mt-2   rounded" />
        </div>
      </div>
      <div>
        <Skeleton className="w-[150px] h-[30px] mt-2  rounded" />
      </div>
    </div>
  );
};

export default PersonSkeleton;
