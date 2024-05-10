import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


const CardVehiculo = ({ vehiculo }) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${vehiculo.uid}`)
      .then(res => res.json())
      .then(data => setDetalles(data.result.properties))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="card" style={{ height: "400px", width: "300px", marginRight: "50px",backgroundColor:"#030303", color:"white" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`}
        className="card-img-top1"
        alt={vehiculo.name}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <div className="card-body" style={{ padding: "10px" }}>
        <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
          {vehiculo.name}
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
          <Link to={`/vehiculo/${vehiculo.uid}`} className="btn btn-outline-warning">Leer más</Link>
          <button onClick={()=>{actions.setFavorites(vehiculo)}} className="btn btn-outline-danger"><i className="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CardVehiculo;