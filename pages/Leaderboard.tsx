import { Heading } from '@chakra-ui/react'
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

const Leaderboard: NextPage = () => {
    
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
                marginTop={"15%"}
                width={"23%"} 
                variant='simple'
                textAlign={"center"}
                boxShadow={"1px 1px 10px 10px lightblue"}
                padding={"1%"}    
                colorScheme={"teal"}            
            >
                <Thead 
                    border={"1px solid black"}
                >
                    <Tr
                        color={"#2066D7"}
                        fontSize={"30"}
                    >
                        <Th>Name</Th>
                        <Th>Points</Th>
                    </Tr>
                </Thead>
                <Tbody
                    color={"#515458"}
                >
                    {
                        users
                        .sort((a: { rank: number; }, b: { rank: number; }) => {
                            return b.rank - a.rank
                        })
                        .map((user: { id: Key | null | undefined; owID: string; rank: string; }) => {
                        return <Tr key={ user.id }>
                                    <Td>{user.owID}</Td><Td>{user.rank}</Td>
                                </Tr>
                        })
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default Leaderboard