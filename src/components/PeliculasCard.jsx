import React, { useState } from "react";
import "./PeliculasCard.css";
import { ZoomIn, ZoomOut } from 'react-bootstrap-icons';

export const PeliculasCard = ({ pelicula }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

  const [verDetalle, setVerDetalle] = useState(false);

  function handleDetalleClick() {
    setVerDetalle(!verDetalle);
  }

  return (
    <li className="moviesCard">
      <img className="movieImage" src={imgURL} alt={pelicula.title} />
      <div className="movieTitle">{pelicula.title}</div>
      <button onClick={handleDetalleClick}
        className={verDetalle ? "buttonOut" : "buttonIn"}
      >
        {verDetalle ? <ZoomOut /> : <ZoomIn />} detalle
      </button>
      {verDetalle && <p className="movieDetalle">{pelicula.overview}</p>}
    </li>
  );
};
