import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";

export const registerUser: any = createAsyncThunk(
  "auth/register",
  async (val) => {
    try {
      // const response = await Service.post("/auth/register", val);
      const response = await Service.post("/user/signup", val);
      console.log("The res is", response);
      const data = response?.data;
      toastAlert("success", "User Successfully Registered.");
      return data;
    } catch (error: any) {
      toastAlert(
        "error",
        error?.response?.data?.message ?? "Something went wrong."
      );
      console.log("The error is", error);
      return "Error while signing in";
    }
  }
);
