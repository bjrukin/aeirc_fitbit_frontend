import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const findOptionValue = (options: any[], value: string) => {
  return options?.find((option) => option?.label === value)?.value;
};
export const findLabelValuePair = (option: any) => {
  console.log("option", option);
  return {
    label: option?.name,
    value: option?.id,
  };
};
