import type { NextPage } from 'next'
import React, {FC} from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"



interface ButtonProp {
    func: () => void;
}

const Login_button:FC<ButtonProp> = ({func}: ButtonProp ) => {
    return(<Button onClick={func} colorScheme="red"> Logg inn </Button>)
}

export default Login_button