import React from "react";
import { Skeleton } from "../ui/skeleton";
import CardSkeleton from "./CardSkeleton";
import PersonSkeleton from "./PersonSkeleton";
import BarSkeleton from "./BarSkeleton";

export const DashboardSkeleton = () => {
  const cardSkeletons = new Array(4).fill(<CardSkeleton />);
  const barSkeletonHeights = [200, 150, 220, 180, 150, 200, 220, 180];
  const BarSkeletons = barSkeletonHeights.map((height: any, index: any) => (
    <BarSkeleton height={height} key={index} />
  ));
  const PersonSkeletons = new Array(3).fill(<PersonSkeleton />);
  return (
    <div className="mx-5 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="w-[250px] h-[30px] mt-[0] rounded" />
          <div className="flex space-x-5  mt-5">
            <Skeleton className="w-[100px] h-[25px]  rounded " />
            <Skeleton className="w-[100px] h-[25px]  rounded " />
          </div>
        </div>
        <div className="flex space-x-5  mt-5">
          <Skeleton className="w-[300px] h-[25px] rounded " />
          <Skeleton className="w-[100px] h-[25px]  rounded" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {cardSkeletons}
      </div>
      <div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
          <div className="rounded-xl border bg-card text-card-foreground shadow p-5">
            <Skeleton className="w-[150px] h-[25px] rounded" />
            <div className="flex-1 mt-8 flex space-x-8 flex-grow  items-end">
              {BarSkeletons}
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow p-5">
            <div>
              <Skeleton className="w-[150px] h-[20px]  rounded" />
              <Skeleton className="w-[300px] h-[20px] mt-3  rounded" />
              {PersonSkeletons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
