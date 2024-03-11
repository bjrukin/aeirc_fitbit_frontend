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
    updateFormData: (state, action) => {
      return action.payload;
    },
  },
});

export default formSlice.reducer;

export const { updateFormData } = formSlice.actions;
