import { Box, Heading, HStack, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import {FC, useState} from 'react'
import RecentMatch from './RecentMatch'

const RecentMatches:React.FC = () => {
    
    return (
        <div>
            <br/>
            <Heading size={"sm"}>Recent matches</Heading>
            <br/>
            <VStack>
                <VStack>
                    <ul>
                        <p>27. jan 15.30</p>
                        <RecentMatch/>
                        <RecentMatch/>
                        <RecentMatch/>
                    </ul>
                </VStack>
                    <Spacer/>
                <VStack>
                    <ul>
                        <p>30. jan 16.47</p>
                        <RecentMatch/>
                        <RecentMatch/>
                        <RecentMatch/>
                    </ul>
                </VStack>
            </VStack> 
            
        </div>
    )
}

export default RecentMatches


