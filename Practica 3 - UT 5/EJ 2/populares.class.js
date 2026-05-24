import { API_BASE_URL, API_KEY } from './constants.js';

export class Populares {
    static getMasPopulares = (pagina = 1) => {
        const url = `${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pagina}`;
        return fetch(url)
        // Respuesta de la API se va a response JSON
            .then(response => response.json())
            .then(result => result.results)
            .catch(error => console.log("Error en populares:", error));
    }
}