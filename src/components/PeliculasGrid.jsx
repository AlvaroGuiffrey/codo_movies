import { PeliculasCard } from "./PeliculasCard";
import "./PeliculasGrid.css";

import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZoomIn, ZoomOut, FilePlus, CaretLeft, CaretRight } from 'react-bootstrap-icons';

export const PeliculasGrid = () => {
  const [peliculas, setPelicula] = useState([]);
  const [numPage, setNumPage] = useState(1);


  function nextNumberPage() {
    numPage < 10? setNumPage(numPage + 1): null;
  }

  function previousNumberPage() {
    numPage > 1? setNumPage(numPage - 1): null;
  }

  useEffect(() => {

    console.log("Numero: " + numPage);
    get("/discover/movie?page=" + numPage).then((data) => {
      console.log(data);
      setPelicula(data.results);
    });
  }, [numPage]);


  return (
    <>
      <ul className="moviesGrid">
        {peliculas.map((pelicula) => (
          <PeliculasCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </ul>
      <div className="buttonContainer">

        <button className="buttonPage" onClick={previousNumberPage}>
          < CaretLeft /> Anterior
        </button>
        Página {numPage}
        <button className="buttonPage" onClick={nextNumberPage}>
          Próxima < CaretRight />
        </button>

      </div>
    </>
  );
};


