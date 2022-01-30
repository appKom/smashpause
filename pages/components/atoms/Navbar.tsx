import React from 'react'
import { useRouter } from 'next/router'
import { Input, VStack, HStack, Heading, Box, FormControl } from "@chakra-ui/react"
import { Flex, Spacer } from '@chakra-ui/react'
import Session_button from './Session_button'
import Leaderboard_button from './Leaderboard_button'
import Homepage_button from './Homepage_button'
import Login_button from './Login_button'

const Navbar:React.FC = () => {

    const router = useRouter();

    const sessionButton = ():void => {
        router.push('Session')    
    }

    const leaderBoardButton = ():void => {
        router.push('LeaderBoard')
    }

    const homePageButton = ():void => {
        router.push('Homepage')
    }

    const LoginButton = ():void => {
        router.push('Login')
    }

    return (
        <div>
            <HStack justifyContent={"center"} bg={"black"} padding={"15px"}>
                <Flex display={"flex"}>
                    <HStack width={"1000px"}>
                        <Spacer/>
                        <Box> <Login_button func={LoginButton}/> </Box>
                        <Spacer/>
                        <Box> <Homepage_button func={homePageButton}/> </Box>
                        <Spacer/>
                        <Box> <Session_button func={sessionButton}/> </Box>
                        <Spacer/>
                        <Box> <Leaderboard_button func={leaderBoardButton}/> </Box>
                        <Spacer/>
                    </HStack>
                </Flex>
            </HStack>
        </div>
    )
}

export default Navbar
