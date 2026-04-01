//MANERA INCORRECTA DE HACERLO
// //Sección que renderiza todos los pokemon
// //Recorrer el array de objetos pokemon
// pokemonData.forEach((pokemon) => {
//   const imgPokemon = `<img src="${pokemon.img}">`;
//   const idPokemon = `<span class="pokemon-card__id"> ID / ${pokemon.id}</span>`;
//   const namePokemon = `<h4>${pokemon.name}</h4>`;
//   const typesPokemon = pokemon.types.map(tipo => `<span>${tipo}</span>`).join("");
//   const evolvePokemon = pokemon.evolvesFrom
//     ? `<div class="pokemon-card__evolution">
//        <p>Evoluciona de: <br /><span>${pokemon.evolvesFrom}</span></p>
//      </div>`
//     : "";
// //Se introducen todos los pokemon en sus respectivas clases
// pokemonSection.innerHTML += `
//   <article class="pokemon-card">
//     <div class="pokemon-card__header">
//       ${imgPokemon}
//       ${idPokemon}
//     </div>
//     <div class="pokemon-card__body">
//       ${namePokemon}
//       <div class="pokemon-card__types">
//         ${typesPokemon}
//       </div>
//       ${evolvePokemon}
//     </div>
//   </article>
// `;
// });

//Datos de los 9 pokemons iniciales
const pokemonData = [
  {
    id: 1,
    name: "Bulbasur",
    types: ["POISON", "GRASS"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    evolvesFrom: null,
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["POISON", "GRASS"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    evolvesFrom: "Bulbasur",
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["POISON", "GRASS"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    evolvesFrom: "Ivysaur",
  },
  {
    id: 4,
    name: "Charmander",
    types: ["FIRE"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    evolvesFrom: null,
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["FIRE"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    evolvesFrom: "Charmander",
  },
  {
    id: 6,
    name: "Charizard",
    types: ["FIRE"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    evolvesFrom: "Charmeleon",
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["WATER"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    evolvesFrom: null,
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["WATER"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    evolvesFrom: "Squirtle",
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["WATER"],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    evolvesFrom: "Wartortle",
  },
];
// CONTENEDOR PADRE DE TODAS LAS CARDS
const pokemonSection = document.querySelector(".pokemon-section");

pokemonData.forEach((pokemon) => {
  // CONTENEDOR PRINCIPAL
  const card = document.createElement("article");
  card.classList.add("pokemon-card");

  // CONTENEDOR HEADER DE LA CARD
  const headerCard = document.createElement("div");
  headerCard.classList.add("pokemon-card__header");

  // CONTENEDOR BODY DE LA CARD
  const bodyCard = document.createElement("div");
  bodyCard.classList.add("pokemon-card__body");

  // IMG DEL POKEMON
  const imgPokemon = document.createElement("img");
  imgPokemon.src = pokemon.img;
  imgPokemon.alt = pokemon.name;
  imgPokemon.classList.add("pokemon-card__img");

  // ID DEL POKEMON
  const idPokemon = document.createElement("span");
  idPokemon.classList.add("pokemon-card__id");
  idPokemon.textContent = `ID / ${pokemon.id}`;

  // NOMBRE POKEMON
  const namePokemon = document.createElement("h4");
  namePokemon.classList.add("pokemon-card__name");
  namePokemon.textContent = pokemon.name;

  // CONTENEDOR TIPOS
  const typesContainer = document.createElement("div");
  typesContainer.classList.add("pokemon-card__types");

  // Creamos cada tipo individualmente
  pokemon.types.forEach((tipo) => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = tipo;
    typesContainer.appendChild(typeSpan);
  });

  // CONTENEDOR PARA LAS EVOLUCIONES 
  // Solo se crea si existe pre-evolución
  if (pokemon.evolvesFrom) {
    const evolveDiv = document.createElement("div");
    evolveDiv.classList.add("pokemon-card__evolution");

    const evolveText = document.createElement("p");
    evolveText.textContent = "Evoluciona de: ";

    const lineBreak = document.createElement("br");
    
    const evolveName = document.createElement("span");
    evolveName.textContent = pokemon.evolvesFrom;

    // UNION DE LAS PARTES EN EL TEXTO
    evolveText.appendChild(lineBreak);
    evolveText.appendChild(evolveName);
    
    // INCLUIMOS EL TEXTO COMPLETO EN EL DIV
    evolveDiv.appendChild(evolveText);
    
    // Lo guardamos para añadirlo al body más tarde
    bodyCard.appendChild(evolveDiv);
  }


  // INCLUIMOS LA IMG Y EL ID EN EL HEADER CARD
  headerCard.append(imgPokemon, idPokemon);
  

  // INCLUIMOS EL NAME Y LOS TIPOS EN EL BODY CARD
  
  bodyCard.insertBefore(namePokemon, bodyCard.firstChild); // Ponemos el nombre al principio del body
  bodyCard.insertBefore(typesContainer, namePokemon.nextSibling); // Los tipos después del nombre

  // INCLUIMOS EL HEADER Y EL BODY A LA CARD
  card.appendChild(headerCard);
  card.appendChild(bodyCard);

  // INCLUIMOS LA CARD EN LA SECCIÓN PRINCIPAL
  pokemonSection.appendChild(card);
});