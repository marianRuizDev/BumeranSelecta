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
    const data = await axios.get(`http://localhost:8000/api/recruiter/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteRecruiter = createAsyncThunk(
  "RECRUITERS_DELETE",
  async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/recruiter/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
);

export const modifyRecruiter = createAsyncThunk(
  "RECRUITERS_MODIFY",
  async ({
    id,
    name,
    lastName,
    email,
    rating,
    description,
    selectedCountry,
    selectedJob,
  }) => {
    try {
      const data = await axios.put(
        `http://localhost:8000/api/recruiter/${id}`,
        {
          name: name.value,
          lastName: lastName.value,
          email: email.value,
          rating: rating.value,
          description: description.value,
          country: selectedCountry,
          experienceField: selectedJob,
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const recruiterReducer = createReducer([], {
  [sendAllRecruiters.fulfilled]: (state, action) => action.payload,
  [getOneRecruiter.fulfilled]: (state, action) => action.payload,
  [deleteRecruiter.fulfilled]: (state, action) => action.payload,
  [modifyRecruiter.fulfilled]: (state, action) => action.payload,
});

export default recruiterReducer;
