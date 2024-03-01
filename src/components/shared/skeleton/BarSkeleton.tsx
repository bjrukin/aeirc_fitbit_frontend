import { Skeleton } from "../../ui/skeleton";

const BarSkeleton = ({ height }: { height: number }) => (
  <Skeleton className={`flex-grow w-[30px] h-[${height}px] rounded`} />
);
export default BarSkeleton;
