import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  isEdit: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => {
      return initialState;
    },
    updateEditData: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload, isEdit: true };
    },
  },
});

export default formSlice.reducer;

export const { updateFormData, updateEditData, resetFormData } =
  formSlice.actions;
