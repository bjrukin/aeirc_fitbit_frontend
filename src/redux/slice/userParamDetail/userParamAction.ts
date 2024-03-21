import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";

export const getUserParam: any = createAsyncThunk(
  "user/details",
  async (id, param) => {
    try {
      const response = await Service.get(
        `/device/data/history/4f8f79b4-26ae-49d3-bd44-855046158149?param_type=spO2_value&start_date=2024-03-16&page_size=800`
      );
      const data = response?.data;
      return data;
    } catch (error: any) {
      console.log("The error is", error);
      return "Error while getting param value in";
    }
  }
);
