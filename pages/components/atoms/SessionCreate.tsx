import React from 'react'
import { useRouter } from 'next/router'
import { Input, VStack, HStack, Heading, Box, FormControl } from "@chakra-ui/react"
import { Flex, Spacer } from '@chakra-ui/react'
import Session_button from './Session_button'
import Leaderboard_button from './Leaderboard_button'
import Homepage_button from './Homepage_button'

import {
    Button,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

const SessionCreate:React.FC = () => {

    const router = useRouter();
    
    const sessionButton = ():void => {
        router.push('Session')
    }



    return (
        <div>
            <HStack  padding={"15px"}>
            <FormControl>

            <FormLabel htmlFor='match-name'>Match name</FormLabel>
             <Input id='match-name'/>


              <FormLabel htmlFor='amount'>Number of players</FormLabel>
              <NumberInput max={8} min={2}>
                <NumberInputField id='amount' />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
            </FormControl>       
            </HStack>
        </div>
    )
}

export default SessionCreate
