import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SingUp from "./components/SingUp";
import SearchsGrid from "./components/SearchsGrid";
import SearchContainer from "./components/searchCrud/SearchContainer";
import SearchCreate from "./components/searchCrud/SearchCreate";
import SearchUpdate from "./components/searchCrud/SearchUpdate";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sigup" element={<SingUp />} />
        <Route path="/searchs" element={<SearchsGrid />} />

        {/* ADMIN PUBLICACIONES ARIEL */}
        <Route path="/admin/searchs" element={<SearchContainer/>} />
        <Route path="/admin/searchs/create" element={<SearchCreate/>} />
        <Route path="/admin/searchs/update/:id" element={<SearchUpdate/>} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
