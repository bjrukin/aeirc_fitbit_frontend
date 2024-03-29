import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";

export const loginUser: any = createAsyncThunk(
  "auth/login",
  async (val: any) => {
    try {
      const response = await Service.post("/auth/login", val);
      const data = response?.data;
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(data?.data?.access)
      );
      // toastAlert("success", "User Successfully logged in.");
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

// export const loginUser = createAsyncThunk("auth/login", async (val: any) => {
//   try {
//     const { isLoading, data, error } = useFetch("", "POST", val);
//     if (isLoading) {
//       console.log("Loading...");
//     } else if (error) {
//       console.log("Error:", error);
//       throw error;
//     } else {
//       console.log("Data:", data);
//       window.localStorage.setItem("userToken", data.token);
//       return data;
//     }
//   } catch (error) {
//     console.log("The error is", error);
//     throw error;
//   }
// });
