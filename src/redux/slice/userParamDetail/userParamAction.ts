import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";

export const getUserParam: any = createAsyncThunk(
  "user/details",
  async ({ id, paramType }: { id: string; paramType: string }) => {
    try {
      const response = await Service.get(
        `/device/data/history/${id}?param_type=${paramType}&start_date=2024-03-16&page_size=800`
      );
      const data = response?.data;
      console.log("the res", data);
      return data;
    } catch (error: any) {
      console.log("The error is", error);
      return "Error while getting param value in";
    }
  }
);
