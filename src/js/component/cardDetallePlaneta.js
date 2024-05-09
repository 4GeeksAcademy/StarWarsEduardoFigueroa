import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const CardDetallePlaneta = () => {
  const params = useParams()
  const { actions, store } = useContext(Context)
  useEffect(() => {
    actions.getPlaneta(params.id)
  }, [])
  console.log(store.planeta);

  return (
    <div className="card" style={{ width: "1000px", height: "460px", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt={store.planeta.properties?.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{height: "460px"}}>
            <h2 className="card-title">{store.planeta.properties?.name}</h2>
            <p className="card-text1" style={{ fontSize: "20px" }}>{store.planeta.description}</p>
            <hr />
            <p className="card-text">Clima: {store.planeta.climate}</p>
            <p className="card-text">Diámetro: {store.planeta.diameter}</p>
            <p className="card-text">Periodo de rotación: {store.planeta.rotation_period}</p>
            <p className="card-text">Periodo orbital: {store.planeta.orbital_period}</p>
            <p className="card-text">Gravedad: {store.planeta.gravity}</p>
            <p className="card-text">Población: {store.planeta.population}</p>
            <p className="card-text">Terreno: {store.planeta.terrain}</p>
            
            {/* Agrega más datos específicos aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

        
