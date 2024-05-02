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
			vehículos: [],
			planetas: [],

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
			  loadVehículos : async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles');
					const data = await response.json();
					console.log(data);
					const vehículosArray = data.results;
					console.log(vehículosArray);
					if (Array.isArray(vehículosArray)) {
						setStore({ vehículos: vehículosArray });
					  } else {
						console.error('Data retrieved from API is not an array:', data);
					  }
				} catch (error) {
				  	console.error('Error fetching people:', error);
				}
			  },
			  loadPlanetas : async () => {
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
			  }
		}
	};
};

export default getState;
