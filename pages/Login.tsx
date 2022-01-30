import React from 'react'
import {FC, useState} from 'react'
import Navbar from './components/atoms/Navbar'
import Login_form from './components/Login_form'

const Login:React.FC = () => {

    return (
        <div>
            <Navbar/>
            <Login_form />
        </div>
    )
}

export default Login
