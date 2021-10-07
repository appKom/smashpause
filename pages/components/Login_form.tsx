import React from 'react'
import Button from './atoms/Button'
import { useState } from 'react';

const Login_form = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const login = () => {
        console.log("hei")
    }

    const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        login();
    }
    return (
        <div>
            <form>
                <label>Username </label>
                <input type="text" name="username" id="username"></input>
                <br/>
                <br/>
                <label>Passord</label>
                <input type="password" name="password" id="password"></input>
                {//<Button name="Logg inn" func={submitHandler}/> 
                }

            </form>
        </div>
    )
}

export default Login_form
