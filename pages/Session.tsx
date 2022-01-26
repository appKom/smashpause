import { useRouter } from 'next/router'
import React from 'react'
import Login_button from './components/atoms/Login_button';
import Navbar from './components/atoms/Navbar';

const Session:React.FC = () => {
    const router = useRouter();
    return (
        <div>
            <Navbar/>
            <h1>Sessions</h1>
        </div>
    )
}

export default Session