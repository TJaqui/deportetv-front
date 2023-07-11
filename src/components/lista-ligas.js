import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const ListaLigas = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-football-beta.p.rapidapi.com/leagues",
          {
            params: {
              // Agrega tus parámetros aquí si es necesario
              type: "league",
              country: "England",
            },
            headers: {
              // Agrega tus encabezados aquí si es necesario
              "X-RapidAPI-Key":
                "d92e825510msh1595b1dc0a60011p1c43e6jsn7c1db9b44833",
              "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
          }
        );
        setObjects(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.error("Error al obtener la lista de objetos:", error);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div className="grid gap-y-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-[50px]">
      {objects.length === 0 ? (
            <p className="text-black uppercase font-[600] text-center text-[30px]">No hay datos disponibles.</p>
      ) : objects.map((object) => (
        <div key={object.id} className="flex flex-col w-[70%] h-[250px] border-slate-400 border-2 justify-self-center items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.1] rounded-lg">
          <img
            id="league-img"
            className="max-h-[70%] w-full object-contain mt-[20px] px-[5%]"
            src={object.league.logo}
          />
          <h1
            id="league-name"
            className="text-black font-[700] text-[18px] uppercase mt-[5px] text-center"
          >
            {object.league.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ListaLigas;
