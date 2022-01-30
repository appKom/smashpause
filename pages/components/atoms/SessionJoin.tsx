import React from 'react'
import { useRouter } from 'next/router'
import { Input, VStack, HStack, Heading, Box, FormControl } from "@chakra-ui/react"
import { Flex, Spacer } from '@chakra-ui/react'
import Session_button from './Session_button'
import Leaderboard_button from './Leaderboard_button'
import Homepage_button from './Homepage_button'


const SessionCreate:React.FC = () => {

    const router = useRouter();

    const sessionButton = ():void => {
        router.push('Session')
    }



    return (
        <div>
            <HStack  padding={"15px"}>
           
            </HStack>
        </div>
    )
}

export default SessionCreate