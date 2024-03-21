import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slice/auth/authSlice";
import registerReducer from "../slice/register/registerSlice";
import editReducer from "../slice/edit/editSlice";
import formReducer from "../slice/form/formSlice";
import userParamReducer from "../slice/userParamDetail/userParamSlice"

export const rootReducer: any = combineReducers({
  login: loginReducer,
  register: registerReducer,
  edit: editReducer,
  form: formReducer,
  userParam:userParamReducer
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
