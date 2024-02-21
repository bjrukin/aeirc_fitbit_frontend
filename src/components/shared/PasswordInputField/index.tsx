import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "../Input";

interface PasswordInputFieldProps {
  label: string;
  name: string;
  placeholder: string;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
  label,
  name,
  placeholder,
}) => {
  const [passwordVisibleSwitch, setPasswordVisibleSwitch] =
    React.useState<boolean>(false);
  const handlePasswordVisible = () =>
    setPasswordVisibleSwitch(!passwordVisibleSwitch);

  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        label={label}
        name={name}
        type={`${!passwordVisibleSwitch ? "password" : "text"}`}
      />
      <div>
        {!passwordVisibleSwitch ? (
          <AiOutlineEyeInvisible
            className="absolute top-10 right-4 "
            onClick={handlePasswordVisible}
            size={20}
            color="#4062FF"
          />
        ) : (
          <AiOutlineEye
            className="absolute top-10 right-4 "
            onClick={handlePasswordVisible}
            size={20}
            color="#4062FF"
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(PasswordInputField);
