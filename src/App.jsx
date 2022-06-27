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
const App = () => {
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
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
