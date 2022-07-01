import React, { useEffect } from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SingUp from "./components/SingUp";
import SearchsGrid from "./components/SearchsGrid";
import SearchView from "./components/SearchView";
import ViewAdmin from "./components/ViewAdmin";
import Profile from "./components/Profile";
import SearchCreate from "./components/searchCrud/SearchCreate";
import SearchUpdate from "./components/searchCrud/SearchUpdate";
import FormProfile from "./commons/FormProfile";
import ProfileMod from "./commons/ProfileMod.jsx";
import { sendAllSearches } from "./redux/search";
import { useDispatch } from "react-redux";
import { sendAllRecruiters } from "./redux/recruiters";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendAllSearches());
    dispatch(sendAllRecruiters());
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sigup" element={<SingUp />} />
        <Route path="/searchs" element={<SearchsGrid />} />
        <Route path="/searchs/:id" element={<SearchView />} />
        <Route path="/admin" element={<ViewAdmin />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin/searchs/create" element={<SearchCreate />} />
        <Route path="/admin/searchs/update/:id" element={<SearchUpdate />} />

        {/* Nuevas rutas */}

        <Route path="/admin/profiles/:id" element={<FormProfile />} />
        <Route path="/mod" element={<ProfileMod />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
