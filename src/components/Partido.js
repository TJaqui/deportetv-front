import syles from "../styles/Partido.module.css"
import Link from "next/link"

const Partido = ({ entrada }) => {
  const { titulo, resultado , equipo1, equipo2, id, fecha } = entrada //todos esos parametros 
  //son segun este implementado en la base de datos para 
  //los partidos 

  return (
    <article>
      <div>
        <h1>{titulo}</h1>
        <p>{fecha}</p>
        <p>{`${equipo1} vs ${equipo2}`}</p>
        <p>{resultado}</p>
        <Link href={`/partidos/${id}`}>
          Ver Detalles
        </Link>
      </div>
    </article>
  )
}

export default Partido