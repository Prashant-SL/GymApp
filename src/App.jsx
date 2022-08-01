import React from 'react';
import { Route, Routes } from "react-router";
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ExerciseDetails />} />
      </Routes>
    </>
  )
}

export default App;
