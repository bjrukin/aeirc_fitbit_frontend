import { toast } from "react-hot-toast";

export const toastAlert = (variant: "success" | "error", message: string) => {
  if (variant === "success") {
    return toast.success(message);
  } else if (variant === "error") {
    return toast.error(message);
  } else {
    return null;
  }
};
