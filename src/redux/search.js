import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendAllSearches = createAsyncThunk("ALL_SEARCH", async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/search/all");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneSearches = createAsyncThunk("ONE_SEARCH", async (id) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/search/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteSearch = createAsyncThunk("DELETE_SEARCH", async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/search/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const getOneUpDate = createAsyncThunk(
  "ONE_UPDATE",
  async ({
    id,
    country,
    area,
    position,
    description,
    vacancies,
    StatusId,
    jobSchedules,
    salary,
    title,
    category,
  }) => {
    console.log("STATUS", StatusId);
    try {
      const data = await axios.put(
        `http://localhost:8000/api/search/edit/${id}`,
        {
          country: country?.value,
          area: area?.value,
          position: position?.value,
          description: description?.value,
          vacancies: vacancies?.value,
          StatusId,
          jobSchedules: jobSchedules?.value,
          salary: salary?.value,
          title: title?.value,
          category: category?.value,
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const searchReducer = createReducer(
  {},
  {
    [sendAllSearches.fulfilled]: (state, action) => action.payload,
    [getOneSearches.fulfilled]: (state, action) => action.payload,
    [getOneUpDate.fulfilled]: (state, action) => action.payload,
  }
);

export default searchReducer;
