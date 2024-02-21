import React from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { cn } from "../../../lib/utilis";
interface IProps {
  label?: string | number;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  className?: string;
}
const Input = ({
  label,
  placeholder,
  type,
  readOnly,
  className,
  ...props
}: IProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div className="h-[95px]">
      <label
        className={` capitalize  p-regular-18 ${
          meta.error && meta.touched ? "text-warning" : ""
        } ${label} `}
        htmlFor=""
      >
        {label}:
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className={cn(
          `mt-1 flex h-10 autocomplete-off w-full rounded-md border border-grey-400 bg-background px-3 py-2 text-sm ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-secondary-400 disabled:cursor-not-allowed disabled:opacity-50 ${
            meta.error && meta.touched
              ? "focus-within:ring-0 border-[1px] border-[red]  focus-within:ring-warning focus-within:outline-none text-warning placeholder:text-warning"
              : ""
          }`,
          className
        )}
        autoComplete="off"
        {...field}
      />
      <div className="relative">
        {/* {meta.touched && meta.error && (
          <BiErrorCircle
            size={17}
            color="#fff"
            className="absolute top-2 mx-2"
          />
        )} */}

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
