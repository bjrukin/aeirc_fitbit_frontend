import { BiCheckDouble } from "react-icons/bi";
import React from "react";
interface StepProps {
  currentStep?: number;
  stepNumber?: any;
  title?: string;
  subtitle?: string;
}

const Step: React.FC<StepProps> = ({
  currentStep,
  stepNumber,
  title,
  subtitle,
}) => (
  <div className="mt-11 flex space-x-5 items-center">
    <div
      className={`h-[60px] relative rounded-full w-[60px] bg-tertiary-750 border-[3px] ${
        currentStep === stepNumber
          ? " border-primary-500 "
          : currentStep === stepNumber + 1
          ? " bg-[#3E6DF9] border-primary-500 "
          : " bg-tertiary-750"
      }`}
    >
      <span
        className={`${
          currentStep === stepNumber + 1
            ? "absolute top-[12px] left-[13px] "
            : "absolute top-[14px] left-[22px] text-lg font-semibold"
        }`}
      >
        {currentStep === stepNumber + 1 ? (
          <BiCheckDouble size={30} color="white" />
        ) : (
          stepNumber + 1
        )}
      </span>
    </div>
    <div>
      <p className="text-tertiary-350 mb-2">{`Step ${stepNumber + 1}`}</p>
      <p className="text-lg font-medium">{title}</p>
    </div>
  </div>
);

export default Step;
