import React from 'react';

const CardDetallePlaneta = ({ planeta }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{planeta.name}</h5>
        <p className="card-text">Clima: {planeta.climate}</p>
        <p className="card-text">Terreno: {planeta.terrain}</p>
        <p className="card-text">Población: {planeta.population}</p>
      </div>
    </div>
  );
};

export default CardDetallePlaneta;