import React from "react";
import CardPersonaje from "./CardPersonaje";

const ListaTarjetas = ({ personajes }) => {
  return (
    <div className="d-flex flex-row overflow-auto">
      {personajes.map((personaje, index) => (
        <CardPersonaje key={index} personaje={personaje} />
      ))}
    </div>
  );
};

export default ListaTarjetas;