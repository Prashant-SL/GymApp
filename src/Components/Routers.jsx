import React from 'react';
import { Route, Routes } from "react-router";
import ExerciseDetails from '../pages/ExerciseDetails';
import Home from '../pages/Home';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';


function Routers() {
    return (

        <Box>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<ExerciseDetails />} />
            </Routes>
        </Box>
    )
}

const styles = {
    btn: {
        color: "black"
    }
};

export default Routers;