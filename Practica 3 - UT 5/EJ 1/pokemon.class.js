class Pokemon {
  constructor(imagen, nombre, experiencia, ataque, defensa) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.experiencia = experiencia;
    this.ataque = ataque;
    this.defensa = defensa;
  }

  static getPokemon(id) {
    return HTTP.ajax(
      'GET',
      'https://pokeapi.co/api/v2/pokemon/' + id
    ).then(data => {

      let imagen = data.sprites.front_default;
      let nombre = data.name;
      let experiencia = data.base_experience;

      let ataque = data.stats.find(
        s => s.stat.name === "attack"
      ).base_stat;

      let defensa = data.stats.find(
        s => s.stat.name === "defense"
      ).base_stat;

      return new Pokemon(
        imagen,
        nombre,
        experiencia,
        ataque,
        defensa
      );
    });
  }

  pintaPokemon() {
    let card = document.getElementById("pokemonCard");

    card.innerHTML = `
      <img src="${this.imagen}" class="card-img-top">
        
      <div class="card-body">
        <h5 class="card-title text-capitalize">${this.nombre}</h5>

        <p><strong>Experiencia:</strong> ${this.experiencia}</p>
        <p><strong>Ataque:</strong> ${this.ataque}</p>
        <p><strong>Defensa:</strong> ${this.defensa}</p>
      </div>
    `;
  }
}