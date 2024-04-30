import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import CardPersonaje from '../component/cardPersonaje';
 

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { personajes } = store;

  useEffect(() => {
    actions.loadPersonajes(); // Cargar los personajes al montar la vista
  }, []);

  return (
    
    <div className="d-flex flex-row flex-wrap justify-content-center">
      <h1>Personajes</h1>
       {personajes.map(personaje => (
        <CardPersonaje key={personaje.id} personaje={personaje} />
      ))} 
    </div>
  );
};
