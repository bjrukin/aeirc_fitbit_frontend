import { createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../../setup/Service";

export const getUserParam: any = createAsyncThunk(
  "user/details",
  async ({ id, paramType,startDate,pageSize }: { id: string; paramType: string,pageSize:string,startDate:any }) => {
    try {
      const response = await Service.get(
        `/device/data/history/${id}?param_type=${paramType}&start_date=${startDate}&page_size=${pageSize}`
      );
      const data = response?.data;  
      return data;
    } catch (error: any) {
      console.log("The error is", error);
      return "Error while getting param value in";
    }
  }
);
