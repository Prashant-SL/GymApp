import React from 'react';
import { Box } from '@chakra-ui/react';
import banner from "../assets/images/banner.png";

const Home = () => {
    return (
        <Box display="flex" gap="15%" width="99vw" alignContent="center" borderWidth="3px" justifyContent="space-between">
            <Box px="10" borderWidth="2px" borderColor="red" width="50%" alignSelf="center">
                <h3 style={{ color: "red", fontWeight: "600", fontSize: "2rem", }}>Fitness Club</h3>
                <h1>Swaet Smile <br /> And Repeat</h1>
                <p>Checkout the most effective personal exercises</p>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <img src={banner} width="90%" />
            </Box>
        </Box >
    )
}

export default Home;