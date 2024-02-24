import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authAction";

const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

const initialState = {
  isLoading: false,
  userInfo: {},
  accessToken: accessToken,
  error: "",
  success: false,
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      window.localStorage.removeItem("accessToken");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = "";
      state.isAuthenticated = false;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.success = false;
        state.userInfo = action?.payload.userInfo;
        state.accessToken = action?.payload?.data.access;
        state.error = "";
        state.isAuthenticated = true;
      }
    );
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
