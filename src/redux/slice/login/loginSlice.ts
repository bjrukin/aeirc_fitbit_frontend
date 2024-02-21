import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginAction";

const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

const initialState = {
  isLoading: false,
  userInfo: {},
  accessToken,
  error: "",
  success: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.success = false;
        state.userInfo = action?.payload;
        state.accessToken = action.payload.actionToken;
        state.error = "";
      }
    );
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default loginSlice.reducer;
