const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			vehiculos: [],
			planetas: [],
			likes: [],
			personaje: {},
			vehiculo: {},
			planeta: {},
			imagenes: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadPersonajes: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people');
					const data = await response.json();
					console.log(data);
					const personajesArray = data.results;
					console.log(personajesArray);
					if (Array.isArray(personajesArray)) {
						setStore({ personajes: personajesArray });
					} else {
						console.error('Data retrieved from API is not an array:', data);
					}
				} catch (error) {
					console.error('Error fetching people:', error);
				}
			},

			loadVehiculos: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles');
					const data = await response.json();
					console.log(data);
					const vehiculosArray = data.results;
					console.log(vehiculosArray);
					if (Array.isArray(vehiculosArray)) {
						setStore({ vehiculos: vehiculosArray });
					} else {
						console.error('Data retrieved from API is not an array:', data);
					}
				} catch (error) {
					console.error('Error fetching people:', error);
				}
			},

			loadPlanetas: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets');
					const data = await response.json();
					console.log(data);
					const planetasArray = data.results;
					console.log(planetasArray);
					if (Array.isArray(planetasArray)) {
						setStore({ planetas: planetasArray });
					} else {
						console.error('Data retrieved from API is not an array:', data);
					}
				} catch (error) {
					console.error('Error fetching people:', error);
				}
			},

			loadImagenesPlanetas: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets');
					const data = await response.json();
					console.log(data);
					const planetasArray = data.results;
					console.log(planetasArray);
					const imgArray = [];
					if (Array.isArray(planetasArray)) {
						for(let i=0; i<planetasArray.length; i++){
							if(i==0){
								imgArray[i+1] = `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357`;
							}else{
								imgArray[i+1] = `https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`;
							}
						}
						console.log(imgArray);
						setStore({ imagenes: imgArray });
					} else {
						console.error('Data retrieved from API is not an array:', data);
					}
				} catch (error) {
					console.error('Error fetching people:', error);
				}
			},

			setFavorites: (item) => {
				const store = getStore()
				if (!store.likes.includes(item)) {
					setStore({ likes: [...store.likes, item] })
				}
			},
			//Esta función de abajo toma el número de la posición de un elemento en una lista, 
			//elimina ese elemento de la lista y luego actualiza la lista original sin ese elemento
			removeFromFavorites: (index) => {
				const store = getStore();
				const updatedLikes = [...store.likes];
				updatedLikes.splice(index, 1);
				setStore({ ...store, likes: updatedLikes });
			},
			getPersonaje: async(id) =>{
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await response.json();
					setStore({personaje:data.result})

					const response2 = await fetch(data.result.properties.homeworld);
					const data2 = await response2.json();
					setStore({planeta:data2.result})
					
				} catch (error) {
					console.error('Error fetching people:', error);
				}

			},
			
			getVehiculo: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
					const data = await response.json();
					setStore({ vehiculo: data.result });
				} catch (error) {
					console.error('Error fetching vehicle details:', error);
				}
			},
			
			getPlaneta: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const data = await response.json();
					setStore({ planeta: data.result });
				} catch (error) {
					console.error('Error fetching planet details:', error);
				}
			}

			

		}
	};
};

export default getState;
