
import { Populares } from './populares.class.js';
import { Pelicula } from './pelicula.class.js';

document.addEventListener("DOMContentLoaded", async function() {
    // Crear Contenedor
    const contenedor = document.getElementById('contenedor-todas-populares');
    try {
        const datosPopulares = await Populares.getMasPopulares(1);
        // Coge la lista de películas que llegó de internet, convierte cada una en un bloque de HTML con su propio diseño
        // une todos los bloques en un solo texto limpio (.join) y los mete dentro de la página web (innerHTML) para que el usuario pueda verlos.
        contenedor.innerHTML = datosPopulares.map(p => new Pelicula(p).DibujaPopular()).join('');
    } catch (error) {
        console.error("Error cargando todas las populares:", error);
    }
});