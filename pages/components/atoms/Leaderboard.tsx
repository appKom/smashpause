import React from 'react'
import { useRouter } from 'next/router'
import { Input, VStack, HStack, Heading, Box, FormControl } from "@chakra-ui/react"
import { Flex, Spacer } from '@chakra-ui/react'
import Session_button from './Session_button'
import Leaderboard_button from './Leaderboard_button'
import Homepage_button from './Homepage_button'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'

const Leaderboard:React.FC = () => {


    return (
        <div>
            <HStack justifyContent={"center"}  paddingRight={"30vw"} paddingLeft={"30vw"}>
                <Table variant='striped'>
                    <Thead>
                            <Tr>
                              <Th>#</Th>
                              <Th>Rating</Th>
                              <Th isNumeric>Nick</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>1</Td>
                              <Td>1000</Td>
                              <Td isNumeric>PlayerA</Td>
                            </Tr>
                            <Tr>
                              <Td>2</Td>
                              <Td>1000</Td>
                              <Td isNumeric>PlayerB</Td>
                            </Tr>
                            <Tr>
                              <Td>3</Td>
                              <Td>1000</Td>
                              <Td isNumeric>PlayerC</Td>
                            </Tr>
                          </Tbody>
                      </Table>
                    </HStack>
      </div>
    )
}

export default Leaderboard
