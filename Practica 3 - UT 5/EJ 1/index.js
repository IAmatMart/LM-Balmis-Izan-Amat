let currentPokemon = 1;

// Cargar Pokémon inicial
cargarPokemon(currentPokemon);

function cargarPokemon(id) {
  Pokemon.getPokemon(id).then(pokemon => {
    pokemon.pintaPokemon();
  });
}

// Botones
document.getElementById("nextBtn").addEventListener
("click", () => {
  currentPokemon++;
  cargarPokemon(currentPokemon);
});

document.getElementById("prevBtn").addEventListener
("click", () => {
  if (currentPokemon > 1) {
    currentPokemon--;
    cargarPokemon(currentPokemon);
  }
});