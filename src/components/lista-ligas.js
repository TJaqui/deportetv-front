import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const ListaLigas = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "W8TPhcJoRlIJMdLT";
        const secret = "vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF99";
        const countryId = searchCountry ? searchCountry : 61;

        const apiUrl = `https://livescore-api.com/api-client/competitions/list.json?key=${apiKey}&secret=${secret}&country_id=${countryId}`;

        const response = await axios.get(apiUrl);

        if (response.data.success) {
          setObjects(response.data.data.competition);
          console.log(response.data.data.competition);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchCountry]);

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <select
        value={searchCountry}
        onChange={handleSearchChange}
        className="block w-[40%] mx-auto mt-[10px] px-4 py-3 rounded-lg bg-white border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0"
      >
        <option value="">Selecciona un pais...</option>
        <option value="65">Argentina</option>
        <option value="1">Alemania</option>
        <option value="16">Brazil</option>
        <option value="61">Colombia</option>
        <option value="43">España</option>
        <option value="21">Francia</option>
        <option value="19">Inglaterra</option>

      </select>
      <div className="grid gap-y-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-[50px]">
        {objects.length === 0 ? (
          <p className="text-black uppercase font-[600] text-center text-[30px]">
            No hay datos disponibles.
          </p>
        ) : (
          objects.map((object) => (
            <div
              key={object.id}
              className="flex flex-col w-[70%] h-[250px] border-slate-400 border-2 justify-self-center items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.1] rounded-lg"
            >
              <img
                id="league-img"
                className="max-h-[70%] w-full object-contain mt-[20px] px-[5%]"
                src="https://static.vecteezy.com/system/resources/previews/002/565/074/non_2x/soccer-game-ball-badge-symbol-league-recreational-sports-tournament-silhouette-style-icon-free-vector.jpg"
              />
              <h1
                id="league-name"
                className="text-black font-[700] text-[18px] uppercase mt-[5px] text-center"
              >
                {object.name}
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListaLigas;
