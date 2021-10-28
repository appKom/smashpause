import type { NextPage } from 'next'
import React, {FC} from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"



interface ButtonProp {
    func: () => void;
}

const Knapp:FC<ButtonProp> = ({func}: ButtonProp ) => {
    return(<Button onClick={func}> Logg inn </Button>)
}

export default Knapp