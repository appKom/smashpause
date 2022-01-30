import { useRouter } from 'next/router'
import React from 'react'
import Login_button from './components/atoms/Login_button';
import Navbar from './components/atoms/Navbar';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'
import Leaderboard from './components/atoms/Leaderboard';

const Session:React.FC = () => {
    const router = useRouter();
    return (
        
        <div>
            <Navbar/>
            <Leaderboard/>
        </div>
    )
}

export default Session