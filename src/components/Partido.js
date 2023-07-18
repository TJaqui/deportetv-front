import { Avatar, Card, CardBody, CardHeader, HStack, Heading, Spacer, Text, useColorModeValue } from "@chakra-ui/react"
import syles from "../styles/Partido.module.css"
import Link from "next/link"

const Partido = ({ entrada }) => {
  const { id, name , stadium, country, federation } = entrada //todos esos parametros 
  //son segun este implementado en la base de datos para 
  //los partidos 
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
    
    <Card sx ={styleCard}>
            <CardHeader>
              <HStack>
                <Heading size = "md">{name}</Heading>
                <Spacer />
                <Avatar src = {`https://livescore-api.com/api-client/countries/flag.json?key=W8TPhcJoRlIJMdLT&secret=vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9&country_id=${country.id}`} />
              </HStack>
            </CardHeader>
            <CardBody>
            <Text><Text as = 'b'>País: </Text> {country.name}</Text>
            <Text><Text as = 'b'>Estadio: </Text> {stadium}</Text> 
            </CardBody>
          </Card>
  )
}

export default Partido