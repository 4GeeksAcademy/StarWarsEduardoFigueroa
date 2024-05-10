import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const CardDetalleVehiculo = () => {
  const params = useParams()
  const { actions, store } = useContext(Context)
  useEffect(() => {
    actions.getVehiculo(params.id)
  }, [])
  console.log(store.vehiculo);

  return (
    <div className="card" style={{ width: "1100px", height: "550px", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" style={{height: "548px"}} alt={store.personaje.properties?.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{ height: "548px", backgroundColor:"#000000", color:"white" }}>
            <h5 className="card-title">{store.vehiculo.properties?.name}</h5>
            <p className="card-text1" style={{ fontSize: "15px" }}>{store.vehiculo.description}</p>
            <hr />
            <p className="card-text">Modelo: {store.vehiculo.properties?.model}</p>
            <p className="card-text">Capacidad de carga: {store.vehiculo.properties?.cargo_capacity}</p>
            <p className="card-text">Pasajeros: {store.vehiculo.properties?.passengers}</p>
            <p className="card-text">Clase de vehículo: {store.vehiculo.properties?.vehicle_class}</p>
            <p className="card-text">Manofacturado: {store.vehiculo.properties?.manufacturer}</p>
            <p className="card-text">Velocidad atmosférica máxima: {store.vehiculo.properties?.max_atmosphering_speed}</p>
            <p className="card-text">Combustible: {store.vehiculo.properties?.consumables}</p> 
            <p className="card-text">Longitud: {store.vehiculo.properties?.length}</p>
            <p className="card-text"><a href={store.vehiculo.properties?.url} target="_blank" style={{ color:"#efb800"}}>Más información</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};