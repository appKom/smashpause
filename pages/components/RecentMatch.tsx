import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import {FC, useState} from 'react'
import Login_form from './Login_form';

interface Name {
    name_string: String;
}

const RecentMatch:React.FC<Name> = (name_prop: Name) => {
    
    return (
        <div>
            <Box backgroundColor={'white'} padding={"2"} margin={1}>
            <h2>Player {name_prop.name_string}</h2>
            </Box>
            
        </div>
    )
}

export default RecentMatch
