import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";
import CardPersonaje from '../component/cardPersonaje';
import CardVehículo from '../component/cadVehículo';
import CardPlaneta from '../component/cardPlaneta';


export const Home = () => {
  const { store, actions } = useContext(Context);
  const { personajes } = store;
  const { vehículos } = store;
  const {planetas} = store;

  useEffect(() => {
    actions.loadPersonajes(); // Cargar los personajes al montar la vista
  }, []);
  useEffect(() => {
    actions.loadVehículos(); // Cargar los vehículos al montar la vista
  }, []);
  useEffect(() => {
    actions.loadPlanetas(); // Cargar los planetas al montar la vista
  }, []);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Personajes</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
            {personajes.map(personaje => (
              <div key={personaje.id} className="col mb-4">
                <CardPersonaje personaje={personaje} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Vehículos</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
            {vehículos.map(vehículo => (
              <div key={vehículo.id} className="col mb-4">
                <CardVehículo vehículo={vehículo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Planetas</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
            {planetas.map(planeta => (
              <div key={planeta.id} className="col mb-4">
                <CardPlaneta planeta={planeta} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};