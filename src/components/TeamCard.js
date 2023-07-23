import { Box, Stack, Card, HStack, Spacer, CardBody, CardHeader, Text, useColorModeValue, Heading} from '@chakra-ui/react'
import React from 'react'

function TeamCard({entrada}) {
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
    
        <Card sx ={styleCard} minW='xs'>
            <CardHeader>
              <HStack>
                <Heading size = "md">{entrada.name}</Heading>
                <Spacer />

              </HStack>
            </CardHeader>
            <CardBody>
            <Text><Text as = 'b'>Estadio: </Text> {entrada.stadium}</Text>
            <Text><Text as = 'b'>Ubicación: </Text> {entrada.location}</Text> 
            </CardBody>
          </Card>
    
  )
}

export default TeamCard