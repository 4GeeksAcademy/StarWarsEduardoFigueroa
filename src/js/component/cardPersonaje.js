import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

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
    <div className="card" style={{height: "400px", width: "400px", marginRight: "50px",backgroundColor:"#030303", color:"white"  }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`}
        className="card-img-top"
        alt={personaje.name}
        style={{ width: "400px", height: "200px",  maxHeight: "100%", objectFit: "cover" }}
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
          <Link to={`/personaje/${personaje.uid}`} className="btn btn-outline-warning">Leer más</Link>
          <button onClick={()=>{actions.setFavorites(personaje)}} className="btn btn-outline-danger" ><i className="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CardPersonaje;