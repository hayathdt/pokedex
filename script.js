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

const pokemonName2 = document.getElementById("pokemon-name2");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speed = document.getElementById("speed");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");

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
        pokemonName2.innerHTML = `<strong>Nom: </strong>${pokemon.name}`;
        hp.innerHTML = `<strong>HP: </strong>${pokemon.stats.HP}`;
        attack.innerHTML = `<strong>Attaque: </strong>${pokemon.stats.attack}`;
        defense.innerHTML = `<strong>Défense: </strong>${pokemon.stats.defense}`;
        speed.innerHTML = `<strong>Vitesse: </strong>${pokemon.stats.speed}`;
        specialAttack.innerHTML = `<strong>Attaque spéciale: </strong>${pokemon.stats.special_attack}`;
        specialDefense.innerHTML = `<strong>Défense spéciale: </strong>${pokemon.stats.special_defense}`;
        if (pokemon.apiTypes[1]) {
          imgTypeElement2.src = pokemon.apiTypes[1].image;
          typeElement.innerText += "/" + `${pokemon.apiTypes[1].name}`;
        }
        else{
          imgTypeElement2.src = "";
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
