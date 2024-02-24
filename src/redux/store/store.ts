import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slice/auth/authSlice";
import registerReducer from "../slice/register/registerSlice";

export const rootReducer: any = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
