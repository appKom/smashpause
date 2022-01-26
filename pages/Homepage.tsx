import React from 'react'
import Login_form from './components/Login_form'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Input, VStack, HStack, Heading, Box, FormControl } from "@chakra-ui/react"
import Navbar from './components/atoms/Navbar'

const Homepage:React.FC = () => {
    return (
        <div>
            <Navbar/>
            
            <VStack backgroundColor={"lightblue"} height={"200px"}>
                <Box margin={"10px"}>
                    <Heading>Homepage</Heading>
                </Box>
            </VStack>

        </div>
    )
}

export default Homepage