"use strict";

class Pokemon
{

	constructor(img,imgJuego,imgCvg,nombre,experiencia,hp,ataque, defensa, especial)
	{
		this.img = img;
		this.imgJuego = imgJuego;
		this.imgCvg = imgCvg;
		this.nombre = nombre;
		this.experiencia = experiencia
		this.hp = hp;
		this.ataque = ataque;
		this.defensa = defensa;
		this.especial = especial;

	}

	static getPokemon(random)
	{
		return HTTP.ajax('GET', `https://pokeapi.co/api/v2/pokemon/` + random).then(data => {
		
		 const pk = {
				img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
				imgJuego: data.sprites.front_default,
				imgCvg: data.sprites.other.dream_world.front_default,
				nombre: data.name,
				experiencia: data.base_experience,
				hp: data.stats[0].base_stat,
				ataque: data.stats[1].base_stat,
				defensa: data.stats[2].base_stat,
				especial: data.stats[3].base_stat,
			}
		return new Pokemon(pk.img,pk.imgJuego,pk.imgCvg,pk.nombre,pk.experiencia,pk.hp,pk.ataque,pk.defensa,pk.especial)

		})

		/*static getPokemon(random) {
  		return fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    		.then(response => response.json())
    		.then(data => {
      const pk = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      };
      return new Pokemon(pk.img, pk.imgJuego, pk.imgCvg, pk.nombre, pk.experiencia, pk.hp, pk.ataque, pk.defensa, pk.especial);
    });
}*/
	}

	
	PintaPokemon()
	{
		let div = document.createElement("div")
    	div.className= "card text-center"

    	let img = document.createElement("img");
    	img.className= "card-img-top";
    	img.src= this.img;

    	let divBody = document.createElement("div")
    	divBody.className = "card-body"

    	let h4 = document.createElement("h4")
    	h4.className = "card-title"
    	h4.appendChild(document.createTextNode(this.nombre)) 

		let lista = document.createElement("ul")
		lista.className= "list-group list-group-flush"
		lista.innerHTML = "<li class=\"list-group-item\">Experiencia: " + this.experiencia + " </li><li class=\"list-group-item\">Ataque: " + this.ataque + " </li><li class=\"list-group-item\">Defensa: " + this.defensa + " </li>"
    
    	let divFooter = document.createElement("div")
    	divFooter.className = "card-footer"

		divBody.appendChild(h4)
		divBody.appendChild(lista)
		div.appendChild(img)
    	div.appendChild(divBody)
    	div.appendChild(divFooter)

		document.querySelector("#pokemonContainer").innerHTML = ""
		document.querySelector("#pokemonContainer").appendChild(div);
	}
}

