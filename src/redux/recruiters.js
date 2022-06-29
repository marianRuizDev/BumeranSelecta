import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendAllRecruiters = createAsyncThunk(
  "RECRUITERS_ALL",
  async () => {
    try {
      const data = await axios.get("http://localhost:8000/api/recruiter");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneRecruiter = createAsyncThunk("ONE_SEARCH", async (id) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/search2/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteRecruiter = createAsyncThunk(
  "RECRUITERS_DELETE",
  async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:8000/api/recruiter/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const recruiterReducer = createReducer([], {
  [sendAllRecruiters.fulfilled]: (state, action) => action.payload,
  [getOneRecruiter.fulfilled]: (state, action) => action.payload,
  [deleteRecruiter.fulfilled]: (state, action) => action.payload,
});

export default recruiterReducer;
