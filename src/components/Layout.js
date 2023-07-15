import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, pagina}) => {
  return (
    <>
      <Head>
        <title>DeportesTV - {pagina}</title>
        <meta name=" descripcion" content="Sitio Web para ver tus estadisticas de Futbol" />
      </Head>

      <Header />

      {children}
      <Footer/>
    </>
  )
}

export default Layout