import { IMAGE_BASE } from './constants.js';

// Coge todos los datos que la API le pasa y los pone en variables locales
export class Pelicula {
    constructor(peliculaData) {
        this.id = peliculaData.id;
        this.titulo = peliculaData.title;
        this.imagen = peliculaData.poster_path ? `${IMAGE_BASE}${peliculaData.poster_path}` : 
        // Si no hay imagen
        'https://via.placeholder.com/500x750?text=Sin+Imagen';
        this.imagenFondo = peliculaData.backdrop_path ? `${IMAGE_BASE}${peliculaData.backdrop_path}` : this.imagen;
        this.descripcion = peliculaData.overview;
        this.fecha = peliculaData.release_date;
        this.votos = peliculaData.vote_average;
    }

    DibujaPopular() {
    return `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div class="card h-100 pelicula-card shadow-sm border-0 w-100">
            <img src="${this.imagen} alt="${this.titulo}">
            <div class="card-body p-2">
                <h6>${this.titulo}</h6>
                <p class="card-text text-muted" style="font-size: 0.75rem;">🌟 ${this.votos}/10<br>Estreno :${this.fecha}</p>
            </div>
        </div>
    </div>
    `;
}

    DibujaCartelera() {
        return `
        <div class="list-group-item list-group-item-action d-flex align-items-center py-3 border-0 shadow-sm mb-2 rounded">
            <img src="${this.imagen}" alt="${this.titulo}" class="rounded me-3" style="width: 60px;">
            <div>
            <h5 class="mb-1 fs-6 fw-bold">${this.titulo}</h5>
            <small class="text-muted">Estreno: ${this.fecha}</small>
            </div>
        </div>
        `;
    }

    DibujaCarouselItem(isActive = false) {

    let claseActiva = ''; 
   
    if (isActive) {
        claseActiva = 'active';
    }
    return `
    <div class="carousel-item ${claseActiva}">
        <img src="${this.imagenFondo}" class="d-block w-100 img-carousel" alt="${this.titulo}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3 mb-4">
        <h3 class="fw-bold text-white">${this.titulo}</h3>
        <p class="mb-0 text-light">${this.descripcion || 'Sin descripción disponible.'}</p>
        </div>
    </div>
    `;
}
}