import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginAction";

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
const loginSlice = createSlice({
  name: "login",
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
        state.userInfo = action?.payload;
        state.accessToken = action.payload.accessToken;
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
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
