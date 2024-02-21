import { createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../../../hooks/useFetch";

// export const registerUser: any = createAsyncThunk(
//   "auth/register",
//   async (val) => {
//     try {
//       const response = await Service.post("", val);
//       const data = response?.data;
//       return data;
//     } catch (error) {
//       console.log("The error is", error);
//       return "Error while signing in";
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  "auth/register",
  async (val: any) => {
    try {
      const { isLoading, data, error } = useFetch("", "POST", val);
      if (isLoading) {
        console.log("Loading...");
      } else if (error) {
        console.log("Error:", error);
        throw error;
      } else {
        console.log("Data:", data);
        return data;
      }
    } catch (error) {
      console.log("The error is", error);
      throw error;
    }
  }
);
