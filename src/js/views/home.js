import React, { useContext, useEffect } from 'react';
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
    
    <div className="d-flex flex-row flex-wrap justify-content-center">
      <h1>Personajes</h1>
      {personajes.map(personaje => (
        <CardPersonaje key={personaje.id} personaje={personaje} />
      ))}
      <h1>Vehículos</h1>
      {vehículos.map(vehículo => (
        <CardVehículo key={vehículo.id} vehículo={vehículo} />
      ))}
      <h1>Planetas</h1>
      {planetas.map(planeta => (
        <CardPlaneta key={planeta.id} planeta={planeta} />
      ))}
    </div>
  );
};
