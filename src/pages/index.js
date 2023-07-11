import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import { getSession } from 'next-auth/react'



export default function Home() {
  return (
    <><Layout
      pagina='Inicio'
    >
      <h1>Desde Inicio</h1>
    </Layout>
    <Footer /></>
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