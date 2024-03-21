import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";

export const getUserParam: any = createAsyncThunk(
  "user/details",
  async (id, param) => {
    try {
      const response = await Service.get(
        `/device/data/history/${id}?param_type=${param}`
      );
      const data = response?.data;
      console.log("The res is", response);
      return data;
    } catch (error: any) {
      console.log("The error is", error);
      return "Error while getting param value in";
    }
  }
);
