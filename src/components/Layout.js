import Head from "next/head"
import Header from "./Header"


const Layout = ({ children, pagina}) => {
  return (
    <div>
      <Head>
        <title>DeportesTV - {pagina}</title>
        <meta name=" descripcion" content="Sitio Web para ver tus estadisticas de Futbol" />
      </Head>

      <Header />

      {children}

    </div>
  )
}

export default Layout