import React from 'react'
import Knapp from './atoms/Button'
import { useState } from 'react'
import { Input, Stack, Heading, Box, FormControl } from "@chakra-ui/react"
import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'




const Login_form: React.FC = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [innerheight, setInnerheight] = useState();
    const router = useRouter()
    

    const buttonFunction = ():void => {
        router.push('Test_side')
    }

     
    return (
        <Box
        pos="relative"
        h="800"
        bg="rgba(255,0,0,0.1)"
        _before={{
          content: '""',
          bgImage:
          "url(https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/super-smash-bros-ultimate-switch/super-smash-bros-ultimate-switch-hero.jpg)",
          bgSize: "cover",
          bgPosition: "center",
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
