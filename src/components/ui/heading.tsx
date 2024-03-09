import React from "react";

import { Button } from "../shared/Button";
import { GoPlus } from "react-icons/go";

interface HospitalProps {
  mainText?: string;
  subText?: string;
  btnText?: string;
  onClick?: any;
}

const Heading: React.FC<HospitalProps> = ({
  onClick,
  mainText,
  subText,
  btnText,
}) => {
  return (
    <>
      <div className="flex  items-center justify-between  mb-4">
        <div>
          <p className="text-xl lg:text-2xl font-semibold ">{mainText}</p>
          <p className="text-base text-tertiary-10 mt-1 text-sm font-semibold xl:text-xl">
            {subText}
          </p>
        </div>
        <div>
          <Button
            onClick={onClick}
            icon={<GoPlus size={26} />}
            className="w-fit p-4 xl:p-6 bg-primary-500"
            text={btnText}
          />
        </div>
      </div>
    </>
  );
};

export default Heading;
