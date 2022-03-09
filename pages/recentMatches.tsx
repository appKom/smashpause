import { Box, Flex, Heading, Spacer, Table, Td, Tr } from '@chakra-ui/react';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const recentMatches: NextPage = () => {

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
    <Flex>
        
        
        
      <Heading
      w="100%"
       >Recent matches</Heading>
      <Table
      bgColor={"teal"}
      width="50%"
      h="100px"
      
      >
      { //Shitty løsning, men funke inntil videre
        matches.map((match: { updatedAt: string; playerIDs: Array<String>; winnerID: string; }) => {
          let date = new Date(match.updatedAt);
            
          return <Tr>
                    <Td>{date.toLocaleDateString()}</Td>
                    <Td>
                      {match.playerIDs[0] + " vs. "}
                    </Td>
                    <Td>
                    {match.playerIDs[1]}
                    </Td>
                    <Td>
                      Winner: {match.winnerID}
                    </Td> 
                    </Tr>
        })
        
      }
      </Table>
    </Flex>
  )
}

export default recentMatches
