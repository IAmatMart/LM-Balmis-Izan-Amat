import { Cartelera } from './cartelera.class.js';
import { Pelicula } from './pelicula.class.js';

// Usamos 'async' porque dentro vamos a hacer una petición a internet que requiere tiempo de espera.
document.addEventListener("DOMContentLoaded", async function() {

    // Ahí es donde meteremos las imágenes y textos de las películas.

    const contenedorCarousel = document.getElementById('carousel-inner');

    // Abrimos un bloque try-cacth por seguridad
    try {
        // Usamos 'await' para que JavaScript "se espere"
                                                            // Numero de pagina de busqueda
        const datosCartelera = await Cartelera.getNuevasPeliculas(1);
        
        let html = '';
        // Index posicion // Pelidata todo lo demas
        datosCartelera.forEach((peliData, index) => {
            //Objeto con todos los datos de la pelicula
            const pelicula = new Pelicula(peliData);
            // Suma las peliculas al HTML   
            html += pelicula.DibujaCarouselItem(index === 0);
        });
        // El bucle lo recorre una vez lo ha recorrido con esto se injecta
        contenedorCarousel.innerHTML = html;
    } catch (error) {
        //Si falla pues error
        console.error("Error cargando carrusel:", error);
    }
});