import { Box } from '@chakra-ui/react';
import React from 'react';
import banner from "../assets/images/banner.png"

const Home = () => {
    return (
        <Box display="flex" gap="15%" width="99vw" alignContent="center" borderWidth="3px" >
            <Box borderWidth="5px" borderColor="red" width="30%" alignSelf="center">
                <h3>Fitness Club</h3>
                <h1>Swaet Smile <br /> And Repeat</h1>
                <p>Checkout the most effective personal exercises</p>
            </Box>
            <Box>
                <img src={banner} height="100px" />
            </Box>
        </Box >
    )
}

export default Home;