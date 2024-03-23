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
export const getParamTypeName = (paramType: any) => {
  switch (paramType) {
    case "sleep_duration":
      return "Sleep Duration";
    case "cvrr_value":
      return "CVRR Value";
    case "blood_ketone_float":
      return "Blood Ketone (Float)";
    case "triglyceride_cholesterol_float":
      return "Triglyceride Cholesterol (Float)";
    case "hrv_value":
      return "HRV Value";
    case "uric_acid":
      return "Uric Acid";
    case "high_lipoprotein_cholesterol_integer":
      return "High Lipoprotein Cholesterol (Integer)";
    case "temperature_value":
      return "Temperature Value";
    case "low_lipoprotein_cholesterol_float":
      return "Low Lipoprotein Cholesterol (Float)";
    case "blood_glucose_value":
      return "Blood Glucose Value";
    case "cholesterol_integer":
      return "Cholesterol (Integer)";
    case "respiratory_rate_value":
      return "Respiratory Rate Value";
    case "blood_sugar_model":
      return "Blood Sugar Model";
    case "step_value":
      return "Step Value";
    case "blood_sugar":
      return "Blood Sugar";
    case "cholesterol_float":
      return "Cholesterol (Float)";
    case "spO2_value":
      return "SpO2 Value";
    case "diastolic_pressure":
      return "Diastolic Pressure";
    case "high_lipoprotein_cholesterol_float":
      return "High Lipoprotein Cholesterol (Float)";
    case "systolic_pressure":
      return "Systolic Pressure";
    case "triglyceride_cholesterol_integer":
      return "Triglyceride Cholesterol ";
    case "low_lipoprotein_cholesterol_integer":
      return "Low Lipoprotein Cholesterol ";
    case "blood_ketone_integer":
      return "Blood Ketone (Integer)";
    case "blood_ketone_model":
      return "Blood Ketone Model";
    case "sleep_end_time":
      return "Sleep End Time";
    case "heart_rate":
      return "Heart Rate";
    case "respiratory_rate":
      return "Respiratory Rate";
    default:
      return paramType; 
  }
};
