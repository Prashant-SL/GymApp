import React from 'react';
import { Route, Routes } from "react-router";
import DetailsPage from './DetailsPage';
import Home from './Home';

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<DetailsPage />} />
        </Routes>
    )
}

export default Routers;