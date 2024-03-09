import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { editData } from "./editAction";

const initialState = {
  isLoading: false,
  error: "",
  isEdit: false,
  editData: {},
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    resetEdit: (state: any) => {
      state.isEdit = false;
      state.editData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(editData.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isEdit = true;
      state.editData = action.payload;
      state.error = "";
    });
    builder.addCase(editData.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { resetEdit } = editSlice.actions;
export default editSlice.reducer;
