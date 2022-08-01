import React from 'react';
import { Box, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo1 from "../assets/images/Logo.png"
import Logo2 from "../assets/images/Logo-1.png"

const Navbar = () => {
    return (
        <Box display="flex" my='3' mx='0.5' flexDir="row" justifyContent="center" gap='9vh' alignItems="center" alignSelf="center">
            <Link to="/">
                <img src={Logo2} alignSelf='center' />
            </Link>
            <Box display="flex" gap="5vw">

                <Box fontWeight='bold' as='h1'>
                    Home
                </Box>
                <Box fontWeight='bold' as='h1'>
                    Exercises
                </Box>
            </Box>
        </Box>
    )
};

export default Navbar;