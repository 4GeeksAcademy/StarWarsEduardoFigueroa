import React,{useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CardDetallePlaneta = () => {
  const params = useParams()
  const {actions,store}= useContext(Context)
  useEffect(()=>{
    actions.getPlaneta(params.id)
  },[])
  console.log(store.planeta);
  return (
    <div className="card">
       <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt={store.planeta.properties?.name} />
      <div className="card-body">
        <h5 className="card-title">{store.planeta.properties?.name}</h5>
        <p className="card-text">{store.planeta.description}</p>
      </div> 
    </div>
  );
};