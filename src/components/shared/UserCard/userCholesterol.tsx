import { UserCardProps, getTimeInMinutes } from ".";

export const UserCholesterolCard: React.FC<UserCardProps> = ({
  paramValue,
  paramName,
  timestamp,
}) => (
  <div className=" bg-white cursor-pointer hover:border-[1px] hover:border-primary-500 flex flex-col space-y-3 border-[1px] border-tertiary-750 rounded-lg p-4">
    <p className="font-bold text-xl">{paramValue}</p>
    <p className="font-bold text-lg text-text-green">{paramName}</p>
    <p className="font-semibold text-lg text-tertiary-950">
      Measured {getTimeInMinutes(timestamp)} Minutes Ago
    </p>
  </div>
);
