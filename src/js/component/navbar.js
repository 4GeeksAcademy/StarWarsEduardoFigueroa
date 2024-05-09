import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const removeFromFavorites = (index) => {
		console.log("Removing item at index:", index);
		actions.removeFromFavorites(index);
	};

	return (
		<nav className="navbar navbar-light bg- mb-3">
			<Link to="/" className="navbar-logo-link" >
				<img src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
					alt="Star Wars Logo" className="navbar-logo" />
			</Link>
			<div className="center">
				<div className="dropdown" style={{ position: 'relative' }}>
					<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos {store.likes.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1" style={{ right: 0, top: '100%', marginTop: '5px', backgroundImage: "url(https://st3.depositphotos.com/15225220/18932/v/450/depositphotos_189328220-stock-illustration-perfect-starry-night-sky-background.jpg)", color: "white", border: "2px", }}>
						{store.likes.length === 0 ? <li>Añade un Favorito</li> :
							store.likes.map((e, index) => {
								return (
									<li key={index}>
										<div className="item">
											<span>{e.name}</span>
											<i className="fas fa-trash-alt float-end" onClick={() => removeFromFavorites(index)} style={{ cursor: 'pointer' }}></i>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>

			</div>
		</nav>
	);
};
