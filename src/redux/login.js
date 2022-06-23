import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const postLoginRequest = createAsyncThunk(
  "LOGIN",
  async ({ email, password }) => {
    try {
      const data = await axios.post("http://localhost:3001/api/users/login", {
        email: email.value,
        password: password.value,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postLogoutRequest = createAsyncThunk("LOGOUT", async () => {
  try {
    const data = await axios.post("http://localhost:3001/api/users/logout");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const loginReducer = createReducer(
  {},
  {
    [postLoginRequest.fulfilled]: (state, action) => action.payload,
    [postLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default loginReducer;
