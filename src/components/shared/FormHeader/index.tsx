import React from "react";
import Step from "../Step";
interface FormHeaderProps {
  title?: string;
  currentStep?: any;
  data?: any;
}

const Formheader: React.FC<FormHeaderProps> = ({
  title,
  currentStep,
  data,
}) => {
  return (
    <>
      <div className="bg-white w-[350px] rounded-lg px-4 py-6">
        <div>
          <p className="p-semibold-20">{title}</p>
          <p className="p-semibold-16 text-tertiary-800 mt-6 ">
            Fields Marked <span className="text-warning">*</span> Are Required
            And Can't Be Left Empty
          </p>
        </div>
        {data.map((step: any, index: any) => (
          <Step
            key={index}
            currentStep={currentStep}
            stepNumber={index}
            title={step.title}
            subtitle={step.subtitle}
          />
        ))}
      </div>
    </>
  );
};

export default Formheader;
