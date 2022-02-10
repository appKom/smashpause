import type { NextPage } from 'next'
import { Key, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

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
      { //Shitty løsning, men funke inntil videre
        users
          .sort((a: { rank: number; }, b: { rank: number; }) => {
            return b.rank - a.rank
          })
          .map((user: { id: Key | null | undefined; owID: string; rank: string; }) => {
          return <div key={ user.id }> { user.owID + ": " + user.rank } </div>
        })
      }
    </div>
  )
}

export default Home
