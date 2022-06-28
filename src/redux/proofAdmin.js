import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const adminSlice = createSlice({
  name: "ADMIN",
  initialState,
  reducers: {
    toggleAdmin(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleAdmin } = adminSlice.actions;
export default adminSlice.reducer;
