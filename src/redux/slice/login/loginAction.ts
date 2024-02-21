import { createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../../../hooks/useFetch";

// export const loginUser: any = createAsyncThunk(
//   "auth/login",
//   async (val: any) => {
//     try {
//       const response = await Service.post("", val);
//       const data = response?.data;
//       window.localStorage.setItem("userToken", "token");
//       return data;
//     } catch (error) {
//       console.log("The error is", error);
//       return "Error while logging in";
//     }
//   }
// );

export const loginUser = createAsyncThunk("auth/login", async (val: any) => {
  try {
    const { isLoading, data, error } = useFetch("", "POST", val);
    if (isLoading) {
      console.log("Loading...");
    } else if (error) {
      console.log("Error:", error);
      throw error;
    } else {
      console.log("Data:", data);
      window.localStorage.setItem("userToken", data.token);
      return data;
    }
  } catch (error) {
    console.log("The error is", error);
    throw error;
  }
});
