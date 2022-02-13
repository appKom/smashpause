import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  // Trenger et interface på denne
  const [matches, setMatches] = useState<any>([])

  /*
    Fetcher alle brukere til JSON format,
    setter brukere til users-variabelen
  */
  useEffect(() => {
    const getMatches = async () => {
      try {
        const url = "http://localhost:3000/api/match";
        const response = await fetch(url, {
          method: "GET"
        });
        const data = await response.json();
        setMatches(data.matches)
      } catch (err) {
        console.log(err)
      }
    }
    (async () => await getMatches())();
  }, [])

  return (
    <div className={styles.container}>
      <h1>Recent matches</h1>
      { //Shitty løsning, men funke inntil videre
        matches.map((match: { updatedAt: string; playerIDs: Array<String>; winnerID: string; }) => {
          let date = new Date(match.updatedAt);

          return <div className={styles.matchInfo}>
                    <div className={styles.matchDate}>
                      {date.toLocaleDateString()}
                    </div>
                    <div className={styles.playerInfo}>
                      {match.playerIDs[0] + " vs. " + match.playerIDs[1]}
                    </div>
                    <div className={styles.matchWinner}>
                      Winner: {match.winnerID}
                    </div> 
                  </div>
        })
      }
    </div>
  )
}

export default Home

/**
 * matches
          .sort((a: { rank: number; }, b: { rank: number; }) => {
            return b.rank - a.rank
          })
          .map((user: { id: Key | null | undefined; owID: string; rank: string; }) => {
          return <div key={ user.id }> { user.owID + ": " + user.rank } </div>
    })
 */