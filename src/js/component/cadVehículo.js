import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const CardVehículo = ({ vehículo }) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${vehículo.uid}`)
      .then(res => res.json())
      .then(data => setDetalles(data.result.properties))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="card" style={{ width: "200px", marginRight: "10px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehículo.uid}.jpg`}
        className="card-img-top"
        alt={vehículo.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div className="card-body" style={{ padding: "10px" }}>
        <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
          {vehículo.name}
        </h5>
        <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
          Modelo: {detalles.model}
        </p>
        <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
          Capacidad de carga: {detalles.cargo_capacity}
        </p>
        <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
          Pasajeros: {detalles.passengers}
        </p>
        <div className="button-group" style={{ marginTop: "auto" }}>
          <button className="btn btn-outline-primary">Leer más</button>
          <button onClick={()=>{actions.setFavorites(vehículo)}} className="btn btn-outline-danger"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CardVehículo;