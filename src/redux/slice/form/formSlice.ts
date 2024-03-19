import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  isEdit: false,
  data: [],
};
console.log("the init is", initialState);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<any>) => {
      return { ...state, ...state.data, ...action.payload };
    },
    resetFormData: () => {
      return initialState;
    },
    updateEditData: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...state.data,
        ...action.payload,
        isEdit: true,
      };
    },
  },
});

export default formSlice.reducer;

export const { updateFormData, updateEditData, resetFormData } =
  formSlice.actions;
