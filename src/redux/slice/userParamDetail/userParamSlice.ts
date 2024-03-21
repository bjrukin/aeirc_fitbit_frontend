import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserParam } from "./userParamAction";

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};
const UserParamSlice = createSlice({
  name: "userParam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserParam.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      getUserParam.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = "";
        state.data = action.payload;
      }
    );
    builder.addCase(
      getUserParam.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});
export default UserParamSlice.reducer;
