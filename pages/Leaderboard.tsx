import type { NextPage } from 'next'
import { Key, useEffect, useState } from 'react'
import styles from '../styles/Leaderboard.module.css'

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
            <h1>Leaderboard</h1>
            <ul>
                {
                    users
                    .sort((a: { rank: number; }, b: { rank: number; }) => {
                        return b.rank - a.rank
                    })
                    .map((user: { id: Key | null | undefined; owID: string; rank: string; }) => {
                    return <li key={ user.id }> { user.owID + ": " + user.rank } </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Leaderboard