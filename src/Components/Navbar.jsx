import React from 'react';
import { Box, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo1 from "../assets/images/Logo.png"
import Logo2 from "../assets/images/Logo-1.png"

const Navbar = () => {
    return (
        <Box position="sticky" display="flex" my='3' mx='0.5' flexDir="row" justifyContent="center" gap='9vh' alignItems="center" alignSelf="center">
            <Link to="/">
                <img src={Logo2} alignSelf='center' />
            </Link>
            <Box display="flex" gap="5vw">
                <Box fontWeight='bold' as='h1'>
                    <a style={{ textDecoration: "none", color: "#3A1212" }} href='#' >
                        <h2>Home</h2>
                    </a>
                </Box>
                <Box fontWeight='bold' as='h1'>
                    <a style={{ textDecoration: "none", color: "#3A1212" }} href='#exercises'>
                        <h2>Exercises</h2>
                    </a>
                </Box>
            </Box>
        </Box>
    )
};

export default Navbar;