import { Skeleton } from "../../ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className=" p-5 w-1/4 h-[130px] rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex justify-between items-center">
        <Skeleton className="w-[120px] h-[15px]  rounded" />
        <Skeleton className="w-[30px] h-[15px]  rounded" />
      </div>
      <Skeleton className="w-[150px] h-[25px] mt-5  rounded" />
      <Skeleton className="w-[120px] h-[15px] mt-3  rounded" />
    </div>
  );
};

export default CardSkeleton;
