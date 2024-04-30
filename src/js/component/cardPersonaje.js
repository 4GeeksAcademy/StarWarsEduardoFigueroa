import React from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const cardPersonaje = ({ personaje }) => {
  const { store, actions } = React.useContext(Context);
  const history = useNavigate();


  return (
    <div className="container text-center">
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">Género: {personaje.gender}</p>
        <p className="card-text">Color de ojos: {personaje.eye_color}</p>
        <p className="card-text">Color de pelo: {personaje.hair_color}</p>
        <div className="btn-group" role="group">
            <button className="btn btn-secondary" >
            Leer más
            </button>
            <button className="btn btn-danger" >
            Me gusta
            </button>            
        </div>
      </div>
    </div>
    </div>
  );
};

export default cardPersonaje;