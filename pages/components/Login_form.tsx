import React from 'react'
import Button from './atoms/Button'
import { useState } from 'react'
import Router from 'next/router'
import { Input } from "@chakra-ui/react"

const Login_form = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const SendToHomepage = () => {

        Router.push('Test_side')   
    }
    return (
        <div>
                <br/>
                <label>Username </label>
                <Input type="text" name="username" id="username"></Input>
                <br/>
                <br/>
                <label>Passord</label>
                <Input type="password" name="password" id="password"></Input>
                <br/>
                <br/>
                <Button func={SendToHomepage}> Logg inn </Button> 
            
        </div>
    )
}

export default Login_form
