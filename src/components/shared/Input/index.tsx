import React from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { cn } from "../../../lib/utilis";
interface IProps {
  label?: string | number;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  className?: string;
  labelClassName?: any;
  required?: boolean;
}
const Input = ({
  label,
  labelClassName,
  placeholder,
  type,
  readOnly,
  className,
  required,
  ...props
}: IProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  const handleWheel = (e: any) => {
    if (type === "number") {
      e.target?.blur();
    }
  };

  return (
    <div className="h-[95px]">
      <label
        className={` capitalize  font-semibold  ${
          meta.error && meta.touched ? "text-warning" : ""
        }  ${labelClassName} `}
        htmlFor={`${label}`}
      >
        {required ? (
          <span>
            {label} <span style={{ color: "red" }}>*</span>
          </span>
        ) : (
          `${label}:`
        )}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        onWheel={handleWheel}
        className={cn(
          `mt-4 flex h-11 autocomplete-off w-full rounded-md border border-tertiary-350 bg-background px-3 py-2 text-sm ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-secondary-400 disabled:cursor-not-allowed disabled:opacity-50 w-full ${
            meta.error && meta.touched
              ? "focus-within:ring-0 border-[1px] border-[red]  focus-within:ring-warning focus-within:outline-none text-warning placeholder:text-warning"
              : ""
          }`,
          className
        )}
        autoComplete="off"
        {...field}
      />
      <div className="relative ">
        <ErrorMessage
          component="div"
          name={field.name}
          className=" text-warning  text-xs inline-block   rounded-sm"
        />
      </div>
    </div>
  );
};
export default React.memo(Input);
