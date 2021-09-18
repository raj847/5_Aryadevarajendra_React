import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  fullName: "",
  email: "",
  phoneNumber: "",
  nationality: "",
  message: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: initialValue,
  },
  reducers: {
    addFormData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addFormData } = todoSlice.actions;
export default todoSlice;