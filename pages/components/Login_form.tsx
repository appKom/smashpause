import React from 'react'
import Button from './atoms/Button'
import { useState } from 'react'
import Router from 'next/router'
import { Input, Stack, Heading, Box, Image } from "@chakra-ui/react"
import background_image from "../../public/images/gay.png"
import { urlObjectKeys } from 'next/dist/shared/lib/utils'

const Login_form = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const SendToHomepage = () => {

        Router.push('Test_side')   
    }
    return (
        <Box
        pos="relative"
        h="400px"
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
                 <Stack margin="auto" width="50%" border="1px solid black" align="center" spacing={1}>
                    <Heading color="red" >Smashpause login</Heading>
                    <br/>
                    <label>Username </label>
                    <Input border="3px solid white" width="34%" type="text" name="username" id="username"></Input>
                    <br/>
                    <label>Passord</label>
                    <Input border="3px solid white" width="34%" type="password" name="password" id="password"></Input>
                    <br/>
                    <Button func={SendToHomepage}> Logg inn </Button>
                    <br/>  

                </Stack>
                </Box>
            
        
    )
}

export default Login_form
