import type { NextPage } from 'next'
import React, {FC} from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"

interface ButtonProp {
    func: () => void;
}

const Homepage_button:FC<ButtonProp> = ({func}: ButtonProp ) => {
    return(<Button onClick={func} colorScheme="blue"> Homepage </Button>)
}

export default Homepage_button