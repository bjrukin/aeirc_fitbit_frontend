import CardSkeleton from "./CardSkeleton";
import { Skeleton } from "../../ui/skeleton";
import { SkeletonElement } from "./authSkeleton";

const SkeletonBlock = ({ className }: { className: any }) => (
  <Skeleton className={className} />
);

const SkeletonGroup = () => (
  <div className="flex space-x-5  mt-5">
    <SkeletonBlock className="w-[300px] h-[25px] rounded " />
    <SkeletonBlock className="w-[100px] h-[25px]  rounded" />
  </div>
);

const SkeletonColumn = () => (
  <div>
    {Array(5)
      .fill(null)
      .map((_, i) => (
        <SkeletonBlock
          key={i}
          className={`w-[200px] h-[20px] mt-6 rounded-xl`}
        />
      ))}
  </div>
);

export const SkeletonRow = () => (
  <div className="flex items-center justify-between">
    {Array(4)
      .fill(null)
      .map((_, i) => (
        <SkeletonElement key={i} width={200} height={20} marginTop={5} />
      ))}
  </div>
);

export const DashboardSkeleton = () => {
  const cardSkeletons = Array(4)
    .fill(null)
    .map((_, i) => <CardSkeleton key={i} />);
  return (
    <div className="mx-5 -z-2">
      <div className="flex items-center justify-between">
        <SkeletonBlock className="w-[250px] h-[30px] mt-[0] rounded" />
        <SkeletonGroup />
      </div>
      <div className="flex space-x-8 mt-6">{cardSkeletons}</div>
      <div className="flex items-center justify-between mt-6">
        <SkeletonBlock className="w-[250px] h-[30px] mt-[0] rounded" />
        <SkeletonGroup />
      </div>
      <div className=" flex space-x-4 justify-between border-[1px] pb-5 px-5 mt-5 border-border pt-5 mb-5">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <SkeletonColumn key={i} />
          ))}
      </div>
      <div className="flex items-center justify-between mt-6">
        <SkeletonBlock className="w-[250px] h-[30px] mt-[0] rounded" />
        <SkeletonGroup />
      </div>
    </div>
  );
};
