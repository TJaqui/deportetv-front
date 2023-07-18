import Layout from '@/components/Layout'
import Partido from '@/components/Partido'
import { Box, Button, Card, CardBody, CardHeader, Collapse, Container, Divider, Fade, HStack, Heading, SimpleGrid, Slide, Spacer, Text, transition, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FaFilter } from "react-icons/fa"

const jugadores = ({ entradas }) => {
  
  const equipos = entradas.data.teams
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Layout 
    pagina = "Teams">
      <Container maxW = "80vw" minH= "500px" bg= { useColorModeValue("gray.70", "gray.700")}>
      <HStack alignItems={'center'}>
        <Heading alignContent="left" p= "10px" pt = "5px">Mas populares</Heading>
        <Spacer />
        <Button onClick={onToggle} rightIcon = {<FaFilter />} colorScheme = "gray" variant = "solid">
          Filtrar
        </Button>
        <Collapse  in ={isOpen} animateOpacity>
          <Box 
            p='40px'
            mt= '4'
            bg="gray.300"
            rounded="md"
            shadow="md">
              <Filter />
            </Box>
        </Collapse>
      </HStack>  
      
      <Divider mb = "20px" />
        <SimpleGrid spacing= {10} pb= "20px" minChildWidth = "250px">
        
        {equipos.map(d => (
          <Partido
              key = {d.id}
              entrada = {d}
          />
        ))} 
        {console.log(equipos)}
        
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps(){
  const key = 'W8TPhcJoRlIJMdLT'
  const secret = 'vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9'
  const url = 'https://livescore-api.com/api-client/teams/list.json?key=W8TPhcJoRlIJMdLT&secret=vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9&size=100&country_id=43'
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()


  return {
      props:{
          entradas
      }
  }
}

export default jugadores