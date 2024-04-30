import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import cardPersonaje from '../component/cardPersonaje';

const Home = () => {
  const { store, actions } = useContext(Context);
  const { personajes } = store;

  useEffect(() => {
    actions.loadPersonajes(); // Cargar los personajes al montar la vista
  }, []);

  return (
    <div className="text-center">
      <h1>Personajes</h1>
      {personajes.map(personaje => (
        <cardPersonaje key={personaje.id} contact={personaje} />
      ))}
    </div>
  );
};
export default Home;