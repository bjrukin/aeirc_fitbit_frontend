import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";

export const editData: any = createAsyncThunk(
  "users/edit",
  async (val: any) => {
    console.log("val", val);
    try {
      const response = await Service.get(`/hospitals/${val}`);
      const data = response?.data?.data;
      console.log("The edit  data is", data);
      return data;
    } catch (error: any) {
      console.log("The error is", error);
      toastAlert(
        "error",
        error?.response?.data?.detail ?? "Something went wrong."
      );
      return "Error while logging in";
    }
  }
);
