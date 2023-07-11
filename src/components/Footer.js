import Link from "next/link"
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/partidos">Partidos</Link>
          <Link href="/jugadores">Jugadores</Link>
          <Link href="/competencias">Competencias</Link>
        </nav>
        <p>Todos los derechos reservados</p>
      </div> 
    </footer>
  )
}

export default Footer