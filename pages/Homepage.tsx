import React from 'react'
import Login_form from './components/Login_form'
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Input, VStack, HStack, Heading, Box, FormControl } from "@chakra-ui/react"
import Navbar from './components/atoms/Navbar'
import RecentMatches from './components/RecentMatches'

const Homepage:React.FC = () => {
    return (
        <div>
            <Navbar/>
            <Box backgroundColor={"lightblue"} height={"450px"}>
                <Heading>Homepage</Heading>

                <HStack>
                    <VStack>
                        <Box>
                            <RecentMatches/>
                        </Box>
                    </VStack>
                </HStack>
            </Box>

        </div>
    )
}

export default Homepage