import { Avatar, Box, Card, CardBody, CardHeader, HStack, Heading, Spacer, Text, useColorModeValue } from "@chakra-ui/react"
import syles from "../styles/Partido.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

function MatchPlayed ({ entrada }){
  
  const { score, competition_name, location, events, id } = entrada //todos esos parametros 
  const router = useRouter()
  //son segun este implementado en la base de datos para 
  //los MatchPlayeds 
  const styleCard = {      //Estilo para la presentacion de Equipos 
    transition: "0.1s",
    bg: useColorModeValue("gray.200", "gray.800"),
    borderColor: useColorModeValue("black", "blue.500"),
    ":hover" : {
      borderTopColor: useColorModeValue("black", "pink.700"),
      borderTop :"10px solid",
      transition : "0.5s"
    }
  }

  return (
    <Box onClick={() => router.push(`/deporte/${router.query.slug}/championships/${router.query.id}/${id}`)} >
        <Card sx ={styleCard}>
            <CardHeader>
              <HStack>
                <Heading size = "md">{competition_name}</Heading>
                <Spacer />

              </HStack>
            </CardHeader>
            <CardBody>
            <Text><Text as = 'b'>Resultado: </Text> {score}</Text>
            <Text><Text as = 'b'>Estadio: </Text> {location}</Text> 
            </CardBody>
          </Card>
          </Box>
  )
}

export default MatchPlayed