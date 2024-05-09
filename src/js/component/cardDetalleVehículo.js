import React,{useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardDetalleVehículo = ({ vehículo }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{vehículo.name}</h5>
        <p className="card-text">Modelo: {vehículo.model}</p>
        <p className="card-text">Fabricante: {vehículo.manufacturer}</p>
        <p className="card-text">Pasajeros: {vehículo.passengers}</p>
      </div>
    </div>
  );
};

export default CardDetalleVehículo;


