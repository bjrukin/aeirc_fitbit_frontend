import { Skeleton } from "../../ui/skeleton";

interface SkeletonElementProps {
  width?: any;
  height?: Number;
  marginTop?: Number;
}
export const SkeletonBlock = ({ className }: { className: any }) => (
  <Skeleton className={className} />
);

export const SkeletonGroup = () => (
  <div className="flex space-x-5  mt-5">
    <SkeletonBlock className="w-[300px] h-[25px] rounded " />
    <SkeletonBlock className="w-[100px] h-[25px]  rounded" />
  </div>
);

export const SkeletonColumn = () => (
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

export const SkeletonElement: React.FC<SkeletonElementProps> = ({
  width,
  height,
  marginTop,
}) => (
  <Skeleton
    className={`w-[${width}px] h-[${height}px] mt-${marginTop} rounded-xl`}
  />
);
