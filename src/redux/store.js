import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./login";
import recruiterReducer from "./recruiters";
import countryReducer from "./getCountries";
import areaReducer from "./getAreas";
import searchReducer from "./search";
import assignedSearchReducer from "./assignedSearch";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  login: loginReducer,
  recruiters: recruiterReducer,
  country: countryReducer,
  area: areaReducer,
  search: searchReducer,
  assigned: assignedSearchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  middleware: [thunk],
  reducer: persistedReducer,
});

export default store;
