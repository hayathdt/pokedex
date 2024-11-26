const pokedexleft = document.getElementById("pokedex-left");
const nameElement = document.getElementById("pokemon-name");
const typeElement = document.getElementById("pokemon-type");
const imgElement = document.getElementById("pokemon-image");
const container = document.getElementById("container");

const buttonUp = document.getElementById("pad-up");
const buttonDown = document.getElementById("pad-down");
const buttonLeft = document.getElementById("pad-left");
const buttonRight = document.getElementById("pad-right");

let currentPokemonIndex = 0;

fetch("apipokedex.json")
  .then(response => response.json())
  .then( pokemons => {
    console.log(pokemons);

  function displayPokemon(index) {
     const pokemon = apipokedex[index];
     if (pokemon) {
        imgElement.src = pokemon.image;
        nameElement.textContent = `Nom : ${pokemon.name}`
        typeElement.textContent = `Type : ${pokemon.type.join(", ")}`; 
     }
  }
displayPokemon(currentPokemonIndex);

buttonLeft.addEventListerner("click", () =>{
     currentPokemonIndex = (currentPokemonIndex - 1 + apipokedex.length) % apipokedex.length;
     displayPokemon(currentPokemonIndex);
});
buttonRight.addEventListerner("click", () =>{
     currentPokemonIndex = (currentPokemonIndex + 1) % apipokedex.length;
     displayPokemon(currentPokemonIndex);
})
.catch(error => {
  console.error("Erreur dans le chargement :", error);
}
); 
