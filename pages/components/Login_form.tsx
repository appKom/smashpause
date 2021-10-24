import React from 'react'
import Knapp from './atoms/Button'
import { useState } from 'react'
import Router from 'next/router'
import { Input, Stack, Heading, Box, Image } from "@chakra-ui/react"
import background_image from "../../public/images/gay.png"
import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import { useNavigate } from "@reach/router"

const Login_form: React.FC = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [innerheight, setInnerheight] = useState(800);

    const buttonFunction = ():JSX.Element => {
        const navigate = useNavigate()
        return (
            
            <div>
                {navigate("/Test_side")}
                <h1>hEI</h1>
            </div>
        )
    }

     
    return (
        <Box
        pos="relative"
        h="100vh"
        bg="rgba(255,0,0,0.1)"
        _before={{
          content: '""',
          bgImage:
          "url(https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/super-smash-bros-ultimate-switch/super-smash-bros-ultimate-switch-hero.jpg)",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.9
        }}
      >
                 <Stack 
                 position="relative"
                 top="20%"
                 height ="43vh" 
                 margin="auto" 
                 backgroundColor="rgb(200,200,200,0.7)" 
                 width="50%" 
                 border="2px solid grey" 
                 align="center" 
                 spacing={1}>

                    <Heading color="white"> Smashpause login </Heading>
                    <br/>
                    <Input backgroundColor="white" border="2px" borderColor="black" width="34%" type="text" name="username" id="username" placeholder = "Username" ></Input>
                    <br/>
                    <Input backgroundColor="white" border="2px" borderColor="black" width="34%" type="password" name="password" id="password" placeholder="Password"></Input>
                    <br/>
                    <Knapp func={buttonFunction} > </Knapp>
                    <br/>  

                </Stack>
        </Box>
            
        
    )
}

export default Login_form
