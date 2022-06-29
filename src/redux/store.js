import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./login";
import adminSlice from "./proofAdmin";
import recruiterReducer from "./recruiters";
import countryReducer from "./getCountries";
import areaReducer from "./getAreas";
import searchReducer from "./search";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  login: loginReducer,
  admin: adminSlice,
  recruiters: recruiterReducer,
  country: countryReducer,
  area: areaReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: [thunk],
});

export default store;
