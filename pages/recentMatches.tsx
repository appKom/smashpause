import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/recentMatches.module.css";

const recentMatches: NextPage = () => {
  // Trenger et interface på denne
  const [matches, setMatches] = useState<any>([]);
  
  /*
  Fetcher alle brukere til JSON format,
  setter brukere til users-variabelen
 */

  useEffect(() => {
    const getMatches = async () => {
      try {
        const url = "http://localhost:3000/api/match";
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        setMatches(data.matches);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await getMatches())();
  }, []);


  return (
    <Box
    marginTop={"%"}
    >
    <Heading mx="auto" marginLeft={"40%"}>Recent matches</Heading>

    <Flex margintop="20%">
      <Grid
        bgColor={"lightblue"}
        gap={6}
        templateRows="repeat(5, 1fr)"
        mx="auto"
        width="50%"
        boxShadow={"2px 2px 5px black"}
      >
      
        {
          //Shitty løsning, men funke inntil videre
          matches.map(
            (match: {
              updatedAt: string;
              playerIDs: Array<String>;
              winnerID: string;
            }) => {
              let date = new Date(match.updatedAt);

              return (
                <GridItem
                  bgColor={"white"}
                  display={"inline"}
                  mx="auto"
                  width="70%"
                  marginTop="2%"
                  borderRadius={6}
                >
                  <Flex
                    padding={5}
                  >
                    <Box>{date.toLocaleDateString()}</Box>
                      <Spacer />
                    <Box>{match.playerIDs[0]}</Box>
                      <Spacer />
                    <Box>VS</Box>
                      <Spacer />
                    <Box>{match.playerIDs[1]}</Box>
                      <Spacer />
                    <Box width={150}>
                      Winner: {match.winnerID}
                    </Box>
                  </Flex>
                </GridItem>
              );
            }
          )

        }
      </Grid>
    </Flex>
  </Box>
  );
};

export default recentMatches;
