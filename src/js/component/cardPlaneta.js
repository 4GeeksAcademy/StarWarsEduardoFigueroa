import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const CardPlaneta = ({ planeta }) => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();
    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${planeta.uid}`)
            .then(res => res.json())
            .then(data => setDetalles(data.result.properties))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="card" style={{ width: "200px", marginRight: "10px" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
                className="card-img-top"
                alt={planeta.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "10px" }}>
                <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
                    {planeta.name}
                </h5>
                <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
                    Clima: {detalles.climate}
                </p>
                <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
                    Diámetro: {detalles.diameter}
                </p>
                <p className="card-text" style={{ fontSize: "14px", margin: "5px 0" }}>
                    Periodo de rotación: {detalles.rotation_period}
                </p>
                <div className="button-group" style={{ marginTop: "auto" }}>
                    <button className="btn btn-secondary">Leer más</button>
                    <button onClick={()=>{actions.setFavorites(planeta)}} className="btn btn-danger"><i class="fas fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CardPlaneta;