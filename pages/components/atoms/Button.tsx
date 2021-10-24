import type { NextPage } from 'next'
import React, {FC} from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Redirect } from "react-router"


interface ButtonProp {
    func: () => JSX.Element;
}

const Knapp:FC<ButtonProp> = ({func}: ButtonProp ) => {
    return(<Button onClick={func}> Logg inn </Button>)
}

export default Knapp