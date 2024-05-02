import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{store,actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos{store.likes.length}
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.likes.length==0 ? <li>empty</li>:
						store.likes.map((e,index)=>{
							return (
								<li key={index}>{e.name}</li>
							)
						})
						}
					</ul>
				</div>
				
			</div>
		</nav>
	);
};
