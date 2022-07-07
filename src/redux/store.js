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
import contSlice from "./contSlice";
import activeSearchesReducer from "./modifyActiveSearches";
import staticReducerReducer from "./stadistics";

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
  activeSearches: activeSearchesReducer,
  stadistics: staticReducerReducer,
  cont: contSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  middleware: [thunk],
  reducer: persistedReducer,
});

export default store;
