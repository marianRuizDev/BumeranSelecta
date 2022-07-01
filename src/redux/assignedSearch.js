import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getAssignedSearchRequest = createAsyncThunk(
  "ASSIGNED",
  async (userId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/search/asigned/${userId}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const assignedSearchReducer = createReducer([], {
  [getAssignedSearchRequest.fulfilled]: (state, action) => action.payload,
});

export default assignedSearchReducer;
