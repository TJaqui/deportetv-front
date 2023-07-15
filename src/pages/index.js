import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Card from "../components/Card"
import { getSession } from 'next-auth/react'
import { Flex, Box, SimpleGrid, Center } from '@chakra-ui/react'



export default function Home() {
  const iterar = ["1", "2", "3","4"]
  return (
    <Layout
      pagina='Inicio'
    >
      <Center>
      <Box maxW={"80%"} justify="center">
     
      <Flex alignItems={"center"} justify={"center"} wrap={'wrap'}>
      {iterar.map((el, index)=>{
        return <Card key={index}/>
      })}
      
      
      </Flex>
      </Box>
      </Center>
    </Layout>
  )
}

export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:'/login'
      }
    }
    
  }
  return{
    props:{session}
  }
}