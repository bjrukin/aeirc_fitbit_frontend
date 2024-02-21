import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./registerAction";

const initialState = {
  isLoading: false,
  userInfo: null,
  accessToken: null,
  error: "",
  success: false,
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = "";
    });
    builder.addCase(
      registerUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});
export default registerSlice.reducer;
