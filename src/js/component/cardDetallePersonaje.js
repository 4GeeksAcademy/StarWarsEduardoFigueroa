import React from 'react';

const CardDetallePersonaje = ({ personaje }) => {
  return (
    <div className="card">
      <img src={personaje.image} className="card-img-top" alt={personaje.name} />
      <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">{personaje.description}</p>
      </div>
    </div>
  );
};

export default CardDetallePersonaje;