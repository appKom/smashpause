import { Box, Heading, HStack, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import {FC, useState} from 'react'
import RecentMatch from './RecentMatch'


const RecentMatches:React.FC = () => {

    const fakeDB = [
        {navn: "Matias", player: "mario"},
        {navn: "Robin", player: "Luigi"},
        {navn: "Sander", player: "Picachu"}
    ]
    const name = "matias";

    return (
        <div>
            <br/>
            <Heading size={"sm"}>Recent matches</Heading>
            <br/>
            <VStack>
                <VStack >
                    <ul id='list'>
                        <p>27. jan 15.30</p>
                        <RecentMatch name_string={fakeDB[0].navn}/>
                        <RecentMatch name_string={fakeDB[1].navn}/>
                        <RecentMatch name_string={fakeDB[2].navn}/>
                    </ul>
                </VStack>
                    <Spacer/>
                <VStack>
                    <ul>
                        <p>30. jan 16.47</p>
                        <RecentMatch name_string={fakeDB[2].navn}/>
                        <RecentMatch name_string={fakeDB[1].navn}/>
                        <RecentMatch name_string={fakeDB[0].navn}/>
                    </ul>
                </VStack>
            </VStack> 
            
        </div>
    )
}

export default RecentMatches


