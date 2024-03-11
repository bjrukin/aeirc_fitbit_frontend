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
  },
  // reducers: {
  //   updateFormData: (state, action) => {
  //     return action.payload;
  //   },
  // },
  // reducers: {
  //   updateFormData: (state, action) => {
  //     const updatedFormData = action.payload;
  //     const newState: any = { ...state };
  //     newState.formDataHistory.push(updatedFormData);
  //     return newState;
  //   },
  // },
});

export default formSlice.reducer;

export const { updateFormData } = formSlice.actions;
