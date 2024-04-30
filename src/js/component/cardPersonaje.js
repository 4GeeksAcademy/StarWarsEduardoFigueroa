import React,{useContext,useEffect,useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const CardPersonaje = ({ personaje }) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [detalles,setDetalles] = useState({});
  useEffect(()=>{
    fetch(`https://www.swapi.tech/api/people/${personaje.uid}`)
    .then(res => res.json())
    .then(data => setDetalles(data.result.properties))
    .catch(err => console.error(err))
  },[])

  return (
    <div className="container text-center">
    <div className="card mb-3">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`}/>
      <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">Género: {detalles.gender}</p>
        <p className="card-text">Color de ojos: {detalles.eye_color}</p>
        <p className="card-text">Color de pelo: {detalles.hair_color}</p>
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

export default CardPersonaje;