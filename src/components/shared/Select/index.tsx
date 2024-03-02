import React from "react";
import { ErrorMessage, FieldProps } from "formik";
import { memo } from "react";
import Select from "react-select";
import { BiErrorCircle } from "react-icons/bi";
import { customStyles } from "../CustomStyle";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: any;
  isMulti?: boolean;
  defaultValue?: any;
  className?: string;
  placeholder?: string;
  label?: string;
  onChangeCallback: any;
  editDiscount: boolean;
}

export const DefaultSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  label,
  isMulti = false,
}: //   onChangeCallback,
//   defaultValue,
CustomSelectProps) => {
  console.log("The options are", field);
  //   const onChange = (selectOptions: any) => {
  //     form.setFieldValue(
  //       field.name,
  //       isMulti
  //         ? (selectOptions as Option[]).map((item: Option) => item.value)
  //         : (selectOptions as Option).value
  //     );
  //   };
  return (
    <div className="">
      <div className="mb-4">
        <label
          className={`text-lg font-medium ${
            form.errors[field.name] &&
            form.touched[field.name] &&
            "text-warning"
          }`}
        >
          {label}
          <span className="text-warning">*</span>
        </label>
      </div>
      <Select
        className={
          form.errors[field.name] && form.touched[field.name]
            ? "error"
            : `${className} `
        }
        name={"distict"}
        // onChange={(newSelectOptions) => {
        //   onChangeCallback(newSelectOptions);
        // }}
        styles={customStyles}
        placeholder={placeholder}
        options={options}
        //   defaultValue={options[defaultValue]}
        // defaultValue={defaultValue ? options[defaultValue] : null}
        isMulti={isMulti}
        classNamePrefix="react-select"
        // menuPortalTarget={document.body}
      />
      <div className="">
        <ErrorMessage
          component="div"
          name={field.name}
          className=" text-warning text-xs inline-block "
        />
      </div>
    </div>
  );
};
