import Layout from "@/components/Layout";
import MatchPlayed from "@/components/MatchPlayed";
import {
  Box,
  Button,
  Flex,
  Container,
  Divider,
  Fade,
  HStack,
  Heading,
  Thead,
  Tbody,
  TableContainer,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  Table,
  TableCaption,
  Slide,
  Spacer,
  transition,
  Tr,
  Th,
  Td,
  useColorModeValue,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { getSession } from "next-auth/react";
import TeamCard from "@/components/TeamCard";
const MatchEvent = ({ entradas, stats }) => {
  const { isOpen, onToggle } = useDisclosure();
  
  const arr = [entradas.data.match.home, entradas.data.match.away];

  return (
    <Layout pagina="matc">
      <Container
        maxW="80vw"
        minH="500px"
        bg={useColorModeValue("gray.70", "gray.700")}
      >
        <HStack alignItems={"center"}>
          <Heading alignContent="left" p="10px" pt="5px">
            Mas populares
          </Heading>
          <Spacer />
          <Button rightIcon={<FaFilter />} colorScheme="gray" variant="solid">
            Filtrar
          </Button>
          <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
            <Box p="40px" mt="4" bg="gray.500" rounded="md" shadow="md">
              xd
            </Box>
          </Slide>
        </HStack>

        <Divider mb="20px" />
        <Flex gap={8}>
          <Stack>
            {arr.map((el, index) => {
              return <TeamCard key={index} entrada={el} />;
            })}
          </Stack>

          <Flex gap={8} wrap={"wrap"}>
            <Box>competencia: {stats.data.match.competition.name}</Box>
            <Box>score: {stats.data.match.score}</Box>
            <Box>fecha: {stats.data.match.date}</Box>
            <Box>Ubicación: {stats.data.match.location}</Box>
            <Box>primera mitad: {stats.data.match.ht_score}</Box>
            <Box>segunda mitad: {stats.data.match.ft_score}</Box>

            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Amarillas
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <TableContainer>
                      <Table variant="simple">
                        <TableCaption>Amarillas</TableCaption>
                        <Thead>
                          <Tr>
                            <Th>Jugador</Th>
                            <Th>Minuto</Th>
                            <Th>Equipo</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {stats.data.event.map((el, index) => {
                            if (el.event === "YELLOW_CARD") {
                              let equipo;
                              
                                if (el.home_away === "a") {
                                  equipo = "visitante";
                                } else if (el.home_away === "h") {
                                  equipo = "local";
                                }
                          
                              return (
                                <Tr>
                                  <Td> {el.player}</Td>

                                  <Td> {el.time}</Td>
                                  <Td>{equipo}</Td>
                                </Tr>
                              );
                            }
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Goles
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <TableContainer>
                      <Table variant="simple">
                        <TableCaption>goles</TableCaption>
                        <Thead>
                          <Tr>
                            <Th>Jugador</Th>
                            <Th>Minuto</Th>
                            <Th>Equipo</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {stats.data.event.map((el, index) => {
                            let equipo;
                            if (el.event === "GOAL") {
                              if (el.home_away === "a") {
                                equipo = "visitante";
                              } else if (el.home_away === "h") {
                                equipo = "local";
                              }
                              return (
                                <Tr>
                                  <Td> {el.player}</Td>
                                  <Td> {el.time}</Td>
                                  <Td>{equipo}</Td>
                                </Tr>
                              );
                            }
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                          Penalty
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <TableContainer>
                      <Table variant="simple">
                        <TableCaption>penalty</TableCaption>
                        <Thead>
                          <Tr>
                            <Th>Jugador</Th>
                            <Th>Minuto</Th>
                            <Th>Equipo</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {stats.data.event.map((el, index) => {
                            let equipo;
                            if (el.event === "GOAL_PENALTY") {
                              if (el.home_away === "a") {
                                equipo = "visitante";
                              } else if (el.home_away === "h") {
                                equipo = "local";
                              }
                              return (
                                <Tr>
                                  <Td> {el.player}</Td>
                                  <Td> {el.time}</Td>
                                  <Td>{equipo}</Td>
                                </Tr>
                              );
                            }
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const axios = require("axios");
  const session = getSession();
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/scores/events.json",
    params: {
      secret: "vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9",
      key: "W8TPhcJoRlIJMdLT",
      id: `${params.event}`,
    },
    headers: {
      "X-RapidAPI-Key": "6b3f3f312dmsh33659eb3307961ap14bde7jsnf5f1d7023b11",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };
  const options2 = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/matches/stats.json",
    params: {
      secret: "vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9",
      key: "W8TPhcJoRlIJMdLT",
      match_id: "172939",
    },
    headers: {
      "X-RapidAPI-Key": "6b3f3f312dmsh33659eb3307961ap14bde7jsnf5f1d7023b11",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const response2 = await axios.request(options);
    const entradas = response.data;
    const stats = response2.data;
    return {
      props: {
        entradas,
        stats,
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export default MatchEvent;
