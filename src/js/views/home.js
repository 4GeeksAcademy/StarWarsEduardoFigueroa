import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";
import CardPersonaje from '../component/cardPersonaje';
import CardVehiculo from '../component/cardVehiculo';
import CardPlaneta from '../component/cardPlaneta';
import "../../styles/home.css";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const { personajes } = store;
  const { vehiculos } = store;
  const {planetas} = store;

  useEffect(() => {
    actions.loadPersonajes(); // Cargar los personajes al montar la vista
  }, []);
  useEffect(() => {
    actions.loadVehiculos(); // Cargar los vehiculos al montar la vista
  }, []);
  useEffect(() => {
    actions.loadPlanetas(); // Cargar los planetas al montar la vista
  }, []);
  useEffect(() => {
    actions.loadImagenesPlanetas(); // Cargar las imagenes de los planetas al montar la vista
  }, []);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className='títulos'>Personajes</h1>
          <div className="overflow">
            {personajes.map(personaje => (
              <div key={personaje.uid} className="col mb-4">
                <CardPersonaje personaje={personaje} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className='títulos'>Vehiculos</h1>
          <div className="overflow">
            {vehiculos.map(vehiculo => (
              <div key={vehiculo.uid} className="col mb-4">
                <CardVehiculo vehiculo={vehiculo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className='títulos'>Planetas</h1>
          <div className="overflow">
            {planetas.map(planeta => (
              <div key={planeta.uid} className="col mb-4">
                <CardPlaneta planeta={planeta} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};