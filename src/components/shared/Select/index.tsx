import { ErrorMessage, FieldProps } from "formik";
import Select from "react-select";
import { customStyles } from "../CustomStyle";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: any;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  editDiscount: boolean;
  name: string;
  defaultValue: any;
  onChangeCallback?: (selectedOption: any) => void;
}

export const DefaultSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  label,
  defaultValue,
  isMulti = false,
  onChangeCallback,
}: //   onChangeCallback,
//   defaultValue,
CustomSelectProps) => {
  const onChange = (selectedOptions: any) => {
    if (selectedOptions === null) {
      form.setFieldValue(field.name, "");
    } else {
      form.setFieldValue(
        field.name,
        isMulti
          ? (selectedOptions as Option[]).map((item: Option) => item.label)
          : (selectedOptions as Option).label
      );
    }
    if (onChangeCallback) {
      onChangeCallback(selectedOptions);
    }
  };

  // const onChange = (selectedOptions: any) => {
  //   if (selectedOptions === null) {
  //     form.setFieldValue(field.name, "");
  //   } else {
  //     form.setFieldValue(
  //       field.name,
  //       isMulti ? (selectedOptions as Option[]) : (selectedOptions as Option)
  //     );
  //   }
  //   if (onChangeCallback) {
  //     onChangeCallback(selectedOptions);
  //   }
  // };
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
        name={field.name}
        styles={customStyles}
        placeholder={placeholder}
        options={options}
        isClearable={true}
        onChange={onChange}
        defaultValue={defaultValue}
        isMulti={isMulti}
        classNamePrefix="react-select"
        menuPortalTarget={document.body}
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
