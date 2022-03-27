import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Image,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/recentMatches.module.css";

const recentMatches: NextPage = () => {
  // Trenger et interface på denne
  const [matches, setMatches] = useState<any>([]);
  const [string, setString] = useState<String>();
  
  

  /*
  Fetcher alle brukere til JSON format,
  setter brukere til users-variabelen
 */

  useEffect(() => {
    const getMatches = async () => {
      try {
        setString("characters/1.png");
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
    <Box>
      <Heading mx="auto" marginLeft={"40%"}>
        Recent matches
      </Heading>

      <Flex
        bgColor={"#13a8d1"}
        width="50%"
        margin={"auto"}
        padding={"1%"}
        borderRadius={"50px"}
      >
        <Grid gap={6} mx="auto" width="80%" fontSize="xl">
          {
            //Shitty løsning, men funke inntil videre
            matches.map(
              (match: {
                updatedAt: string;
                playerIDs: Array<String>;
                winnerID: string;
              }) => {
                let date = new Date(match.updatedAt);
                // Trenger egen variabel i database som lagrer karakteren til brukerne med f.eks "1.png"
                return (
                  <Box>
                    <Flex
                    margin={"auto"}
                    width="70%"
                    >
                    <Image alt={""}
                    src={match.winnerID}
                    bgColor={"green"}
                    width={50}>
                    </Image>
                    <Spacer></Spacer>
                    <Image alt={""}
                    src={match.winnerID}
                    bgColor={"green"}
                    width={50}>
                    </Image>
                    <Spacer></Spacer>
                    <Image alt={""}
                    src={match.winnerID}
                    bgColor={"green"}
                    width={50}>
                    </Image>
                    <Spacer></Spacer>
                    <Image alt={""}
                    src={match.winnerID}
                    bgColor={"green"}
                    width={50}>
                    </Image>
                    <Spacer></Spacer>

                    <Image alt={""}
                    src={match.winnerID}
                    bgColor={"green"}
                    width={50}>
                    </Image>
                    <Spacer></Spacer>

                    <Image alt={""}
                    src={match.winnerID}
                    bgColor={"green"}
                    width={50}>
                    </Image>
                    
                    
                    </Flex>
                    <GridItem
                      bgColor={"white"}
                      mx="auto"
                      width="70%"
                      borderRadius={6}
                      boxShadow={"2px 2px 5px black"}
                      height={100}
                    >
                      <Flex padding={5}>
                        <Box>{date.toLocaleDateString()}</Box>

                        <Box>{match.playerIDs[0]}</Box>

                        <Box>VS</Box>

                        <Box>{match.playerIDs[1]}</Box>

                        <Box width={150}>Winner: {match.winnerID}</Box>
                      </Flex>
                    </GridItem>
                  </Box>
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
