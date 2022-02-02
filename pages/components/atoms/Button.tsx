import type { NextPage } from 'next'
import React, {FC} from "react"


type ButtonProps = {
    name: string;
    func: () => void;
}

const Button: FC<ButtonProps> = ({name, func}: ButtonProps) => {
    return(<button onClick={func}>{name}</button>)
}

export default Button