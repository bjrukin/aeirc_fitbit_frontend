import React from "react";
import { FieldHookConfig, useField } from "formik";
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
  const [field] = useField(props);
  return (
    <div className="mb-3">
      <label className="p-regular-18 " htmlFor="">
        {label}:
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className={cn(
          "flex h-10 autocomplete-off w-full mt-[2px] rounded-md border border-grey-400 bg-background px-3 py-2 text-sm ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-secondary-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        autoComplete="off"
        {...field}
      />
    </div>
  );
};
export default React.memo(Input);
