import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import {Home} from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {CardDetallePersonaje} from "./component/cardDetallePersonaje";
import CardDetalleVehículo from "./component/cardDetalleVehículo";
import { CardDetallePlaneta } from "./component/cardDetallePlaneta";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="contenedor">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personaje/:id" element={<CardDetallePersonaje />} />
						<Route path="/vehículo/:id" element={<CardDetalleVehículo />} />
						<Route path="/planeta/:id" element={<CardDetallePlaneta />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
