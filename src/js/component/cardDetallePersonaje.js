import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CardDetallePersonaje = () => {
  const params = useParams()
  const { actions, store } = useContext(Context)
  useEffect(() => {
    actions.getPersonaje(params.id)
  }, [])
  console.log(store.personaje);

  return (
    <div className="card" style={{ width: "1000px", height: "460px", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt={store.personaje.properties?.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{height: "459px", backgroundColor:"#000000", color:"white"}}>
            <h2 className="card-title">{store.personaje.properties?.name}</h2>
            <p className="card-text1" style={{ fontSize: "20px" }}>{store.personaje.description}</p>
            <hr />
            <p className="card-text">Género: {store.personaje.properties?.gender}</p>
            <p className="card-text">Color de ojos: {store.personaje.properties?.eye_color}</p>
            <p className="card-text">Color de pelo: {store.personaje.properties?.hair_color}</p>
            <p className="card-text">Cumpleaños: {store.personaje.properties?.birth_year}</p>
            <p className="card-text">Altura: {store.personaje.properties?.height}</p>
            <p className="card-text">Peso: {store.personaje.properties?.mass}</p>
            <p className="card-text">Skin color: {store.personaje.properties?.skin_color}</p>
            <p className="card-text">Planeta de nacimiento: {store.personaje.properties?.homeworld}</p> crear función para obtener el nombre del planeta con una llamadaa la API mediante la url que devuelve
            <p className="card-text">Vehículos pilotados: {store.personaje.properties?.vehicles}</p>
            
            
            {/* Agrega más datos específicos aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};


