import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";
import CardPersonaje from '../component/cardPersonaje';
import CardVehículo from '../component/cadVehículo';
import CardPlaneta from '../component/cardPlaneta';
import "../../styles/home.css";


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
          <h1 className='títulos'>Vehículos</h1>
          <div className="overflow">
            {vehículos.map(vehículo => (
              <div key={vehículo.uid} className="col mb-4">
                <CardVehículo vehículo={vehículo} />
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