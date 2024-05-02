import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const CardPersonaje = ({ personaje }) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${personaje.uid}`)
      .then(res => res.json())
      .then(data => setDetalles(data.result.properties))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="card" style={{ width: "200px", marginRight: "10px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`}
        className="card-img-top"
        alt={personaje.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div className="card-body" style={{ padding: "10px" }}>
        <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
          {personaje.name}
        </h5>
        <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
          Género: {detalles.gender}
        </p>
        <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
          Color de ojos: {detalles.eye_color}
        </p>
        <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
          Color de pelo: {detalles.hair_color}
        </p>
        <div className="button-group" style={{ marginTop: "auto" }}>
          <button className="btn btn-secondary">Leer más</button>
          <button onClick={()=>{actions.setFavorites(personaje)}} className="btn btn-danger"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CardPersonaje;