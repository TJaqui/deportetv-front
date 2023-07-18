import Layout from '@/components/Layout'
import MatchPlayed from '@/components/MatchPlayed'
import { Box, Button, Card, CardBody, CardHeader, Collapse, Container, Divider, Fade, HStack, Heading, SimpleGrid, Slide, Spacer, transition, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FaFilter } from "react-icons/fa"
import { getSession } from 'next-auth/react'
const Match = ({ entradas }) => {
  
  const partidos = entradas.data.match

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Layout 
    pagina = "match">
      <Container maxW = "80vw" minH= "500px" bg= { useColorModeValue("gray.70", "gray.700")}>
      <HStack alignItems={'center'}>
        <Heading alignContent="left" p= "10px" pt = "5px">Mas populares</Heading>
        <Spacer />
        <Button rightIcon = {<FaFilter />} colorScheme = "gray" variant = "solid">
          Filtrar
        </Button>
        <Slide direction = 'bottom' in ={isOpen} style={{ zIndex :10 }}>
          <Box 
            p='40px'
            mt= '4'
            bg="gray.500"
            rounded="md"
            shadow="md">
              xd
            </Box>
        </Slide>
      </HStack>  
      
      <Divider mb = "20px" />
        <SimpleGrid columns = {3} spacing= {10} pb= "20px">
        
        {partidos.map((el, index)=>{
        return    <MatchPlayed  key = {index} entrada = {el}/>
        }) }
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(){
  const key = 'W8TPhcJoRlIJMdLT'
  const secret = 'vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9'
  const url = "https://livescore-api.com/api-client/scores/history.json?key=W8TPhcJoRlIJMdLT&secret=vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9&page=3"
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  const session = getSession()
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
      props:{
          entradas
      }
  }
}

export default Match