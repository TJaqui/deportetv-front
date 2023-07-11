import Link from "next/link";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Partido from "@/components/Partido";

const Partidos = ({ data }) => {

  return (
  <><Layout
      pagina="Partidos"> 
    </Layout>
    
    <main className="">
      <h2>Partidos</h2>
      
      <div>
        {data.map(d => (
          <Partido
              key = {d.id}
              entrada = {data}
          />
        ))}
      </div>

    </main>
    <Footer />

    </>
  )
}

export async function getStaticProps(){

  const url = 'http://localhost:1337/partidos'
  const respuesta = await fetch(url)
  const data = await respuesta.json()

  console.log(data)

  return {
      props:{
          data 
      }
  }
}


export default Partidos;