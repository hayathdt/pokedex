const pokedexleft = document.getElementById("pokedex-left");
const nameElement = document.getElementById("pokemon-name");
const typeElement = document.getElementById("pokemon-type");
const imgElement = document.getElementById("pokemon-image");
const imgTypeElement = document.getElementById("image-type");
const imgTypeElement2 = document.getElementById("image-type2");
const container = document.getElementById("container");

const buttonUp = document.getElementById("pad-up");
const buttonDown = document.getElementById("pad-down");
const buttonLeft = document.getElementById("pad-left");
const buttonRight = document.getElementById("pad-right");

let currentPokemonIndex = 1;
let pokemons = [];

fetch("apipokedex.json")
  .then(response => response.json())
  .then(data => {
    pokemons = data;
  });

  function displayPokemon(index) {
     const pokemon = pokemons[index];
     if (pokemon) {
        imgElement.src = pokemon.image;
        nameElement.innerText = `${pokemon.name}`
        typeElement.innerText = `${pokemon.apiTypes[0].name}`;
        imgTypeElement.src = pokemon.apiTypes[0].image;
        if (pokemon.apiTypes[1]) {
          imgTypeElement2.src = pokemon.apiTypes[1].image;
          typeElement.innerText += "/" + `${pokemon.apiTypes[1].name}`;
        }

        }
     }

  
displayPokemon(currentPokemonIndex);

buttonLeft.addEventListener("click", () =>{
     currentPokemonIndex = (currentPokemonIndex - 1 + pokemons.length) % pokemons.length;
     console.log(currentPokemonIndex);
     displayPokemon(currentPokemonIndex);
});

buttonRight.addEventListener("click", () =>{
     currentPokemonIndex = (currentPokemonIndex + 1) % pokemons.length;
     console.log(currentPokemonIndex);
     displayPokemon(currentPokemonIndex);
});
