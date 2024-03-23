import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";

export const getUserParam: any = createAsyncThunk(
  "user/details",
  async ({ id, param,pageSize }: { id: string; param: string,pageSize:string }) => {
   console.log("The id is",id,param,pageSize);
    try {
      const response = await Service.get(
        `/device/data/history/${id}?param_type=${param}&start_date=2024-03-22&page_size=${pageSize}`
      );
      const data = response?.data;  
      return data;
    } catch (error: any) {
      console.log("The error is", error);
      return "Error while getting param value in";
    }
  }
);
