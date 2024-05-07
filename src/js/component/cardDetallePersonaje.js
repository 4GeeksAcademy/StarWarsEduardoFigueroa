import React,{useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CardDetallePersonaje = () => {
  const params = useParams()
  const {actions,store}= useContext(Context)
  useEffect(()=>{
    actions.getPersonaje(params.id)
  },[])
  console.log(store.personaje);
  return (
    <div className="card">
       <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt={store.personaje.properties?.name} />
      <div className="card-body">
        <h5 className="card-title">{store.personaje.properties?.name}</h5>
        <p className="card-text">{store.personaje.description}</p>
      </div> 
    </div>
  );
};

