import type { NextPage } from 'next'
import React, {FC} from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"

interface ButtonProp {
    func: () => void;
}

const Leaderboard_button:FC<ButtonProp> = ({func}: ButtonProp ) => {
    return(<Button onClick={func} colorScheme="blue"> Leaderboard </Button>)
}

export default Leaderboard_button