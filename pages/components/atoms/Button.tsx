import type { NextPage } from 'next'
import React, {FC} from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"


type ButtonProps = {
    name: string;
    func: () => void;
}
const Knapp: FC<ButtonProps> = ( {name, func}: ButtonProps) => {
    return(<Button onClick={func}>{name}</Button>)
}
export default Button