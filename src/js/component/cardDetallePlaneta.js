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
    <div className="card" style={{ width: "1100px", height: "500px", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={store.imagenes[params.id]} className="img-fluid rounded-start" style={{height: "499px"}} alt={store.planeta.properties?.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{height: "499px", backgroundColor:"#000000", color:"white"}}>
            <h2 className="card-title">{store.planeta.properties?.name}</h2>
            <p className="card-text1" style={{ fontSize: "15px" }}>{store.planeta.description}</p>
            <hr />
            <p className="card-text">Clima: {store.planeta.properties?.climate}</p>
            <p className="card-text">Diámetro: {store.planeta.properties?.diameter}</p>
            <p className="card-text">Periodo de rotación: {store.planeta.properties?.rotation_period}</p>
            <p className="card-text">Periodo orbital: {store.planeta.properties?.orbital_period}</p>
            <p className="card-text">Gravedad: {store.planeta.properties?.gravity}</p>
            <p className="card-text">Población: {store.planeta.properties?.population}</p>
            <p className="card-text">surface_water: {store.planeta.properties?.surface_water}</p>            
            <p className="card-text"><a href={store.planeta.properties?.url} target="_blank" style={{ color:"#efb800"}}>Más información</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

        
