import React from 'react'
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import LogIn from './components/LogIn';
import SingUp from './components/SingUp';



const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/sigup' element={<SingUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
