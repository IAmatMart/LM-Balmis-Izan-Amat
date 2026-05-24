 // Importar de otros archivos
import { Populares } from './populares.class.js';
import { Cartelera } from './cartelera.class.js';
import { Pelicula } from './pelicula.class.js';



document.addEventListener("DOMContentLoaded", async function() {
    // Aqui van a ir las peliculas
    const contenedorPopulares = document.getElementById('lista-populares');
    const contenedorCartelera = document.getElementById('lista-cartelera');

    try {
        const datosPopulares = await Populares.getMasPopulares(7);
        const datosCartelera = await Cartelera.getNuevasPeliculas(1);

        // solo coge las 4 primeras ya que el array completo es de 20 normalmente
        const top5Populares = datosPopulares.slice(0, 5);
        const top5Cartelera = datosCartelera.slice(0, 5);

        contenedorPopulares.innerHTML = top5Populares.map(p => new Pelicula(p).DibujaPopular()).join('');
        contenedorCartelera.innerHTML = top5Cartelera.map(p => new Pelicula(p).DibujaCartelera()).join('');
    } catch (error) {
        console.error("Error cargando index:", error);
    }
});