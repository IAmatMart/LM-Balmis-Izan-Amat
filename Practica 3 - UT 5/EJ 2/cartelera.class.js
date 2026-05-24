import { API_BASE_URL, API_KEY } from './constants.js';


//Coge los datos de la base de datos para guardarlos en response.json
export class Cartelera {
    static getNuevasPeliculas = (pagina = 1) => {
        const url = `${API_BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${pagina}`;
        return fetch(url)
            .then(response => response.json())
            .then(result => result.results)
            .catch(error => console.log("Error en cartelera:", error));
    }
}