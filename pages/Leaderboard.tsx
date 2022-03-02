import { Heading, ListItem, OrderedList } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Key, useEffect, useState } from 'react'
import styles from '../styles/Leaderboard.module.css'
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

const recentMatches: NextPage = () => {
    
    // Trenger et interface på denne
    const [users, setUsers] = useState<any>([])

    /*
        Fetcher alle brukere til JSON format,
        setter brukere til users-variabelen
    */
    useEffect(() => {
        const getUsers = async () => {
        try {
            const url = "http://localhost:3000/api/user";
            const response = await fetch(url, {
                method: "GET"
            });
            const data = await response.json();
            setUsers(data.users)
        } catch (err) {
            console.log(err)
        }
        }
        (async () => await getUsers())();
    }, [])

    return (
        <div className={styles.container}>
            <Table
                marginTop={"5%"}
                width={"40%"} 
                variant='striped'
                textAlign={"center"}
                boxShadow={"1px 1px 5px black"}
                padding={"1%"}    
                colorScheme={"teal"}
                
                             
            >
                <Thead >
                    <Tr
                        color={"red"}
                        fontSize={"50"}
                    >
                        <Th>Name</Th>
                        <Th>Points</Th>
                    </Tr>
                </Thead>
                <Tbody
                    color={"#515458"}
                    fontSize={18}
                >
                    {
                        users
                        .sort((a: { rank: number; }, b: { rank: number; }) => {
                            return b.rank - a.rank
                        })
                        .map((user: { id: Key | null | undefined; owID: string; rank: string; }) => {
                        return <Tr 
                                key={ user.id }
                                >
                                        <Td>{user.owID}</Td> <Td>{user.rank}</Td>
                                </Tr>
                        })
                    }
                    
                </Tbody>
            </Table>
            
        </div>
    )
}

export default recentMatches