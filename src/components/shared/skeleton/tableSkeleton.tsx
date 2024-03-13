import { SkeletonBlock } from "./skeletonutilis";

export const TableSkeleton = () => {
  return (
    <>
      <div className=" flex space-x-4 justify-between  px-5">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <>
              <div className="flex flex-col">
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <SkeletonBlock
                      key={i}
                      className={`w-[200px] h-[20px] mt-6 rounded-xl`}
                    />
                  ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
};
