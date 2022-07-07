import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";



export const getAllData = createAsyncThunk("STADISTICS", async () => {
    try {
     const data = await axios.get("http://localhost:8000/api/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  });

  const stadisticsReducer = createReducer([], {
    [getAllData.fulfilled]: (state, action) => action.payload,
  });
  
  export default stadisticsReducer;