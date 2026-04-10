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

//////////////////////////////////////////

//Importación de la función datos de la api de pokeapi

// main.js
import {
  obtenerPokemons,
  obtenerEvoluciones,
  obtenerDetallesPokemon,
} from "./api.js";
import { initSearch } from "./search.js";

obtenerPokemons().then((data) => {
  //Solo para el console log
  data.results.forEach(async (pokemon) => {
    //Guardamos el name de la especie
    //Llamamos a la url genérica para traernos los detalles.
    const detallesPokemons = await obtenerDetallesPokemon(pokemon.url);
    //Llamamos a la segunda url de la petición para buscar si tienen evoluciones

    const especie = await obtenerEvoluciones(pokemon.name);
    console.log(`IMG: ${detallesPokemons.img}`);
    console.log(`ID: ${detallesPokemons.id}`);
    console.log(`Name: ${detallesPokemons.name}`);
    console.log(`types: ${detallesPokemons.types}`);

    if (especie.evolves_from_species) {
      console.log(
        `${pokemon.name} evoluciona de ${especie.evolves_from_species.name}`,
      ); //con evolves sacamos si evoluciona
    } else {
      console.log(`${pokemon.name} no tiene pre-evolución`);
    }
  });
});

//Array con los datos de los 9 pokemons iniciales
// const pokemonData = [
//   {
//     id: 1,
//     name: "Bulbasur",
//     types: ["POISON", "GRASS"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     evolvesFrom: null,
//   },
//   {
//     id: 2,
//     name: "Ivysaur",
//     types: ["POISON", "GRASS"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     evolvesFrom: "Bulbasur",
//   },
//   {
//     id: 3,
//     name: "Venusaur",
//     types: ["POISON", "GRASS"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//     evolvesFrom: "Ivysaur",
//   },
//   {
//     id: 4,
//     name: "Charmander",
//     types: ["FIRE"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//     evolvesFrom: null,
//   },
//   {
//     id: 5,
//     name: "Charmeleon",
//     types: ["FIRE"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
//     evolvesFrom: "Charmander",
//   },
//   {
//     id: 6,
//     name: "Charizard",
//     types: ["FIRE"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
//     evolvesFrom: "Charmeleon",
//   },
//   {
//     id: 7,
//     name: "Squirtle",
//     types: ["WATER"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//     evolvesFrom: null,
//   },
//   {
//     id: 8,
//     name: "Wartortle",
//     types: ["WATER"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
//     evolvesFrom: "Squirtle",
//   },
//   {
//     id: 9,
//     name: "Blastoise",
//     types: ["WATER"],
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
//     evolvesFrom: "Wartortle",
//   },
// ];

// const pokemonData = obtenerPokemons();

// CONTENEDOR PADRE DE TODAS LAS CARDS
const pokemonSection = document.querySelector(".pokemon-section");
//ARRAY PARA GUARDAR LOS POKEMONS
const pokemonsGuardados = [];

const crearTarjetaPokemon = (pokemon) => {
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

  // CONTENEDOR TIPOS QUE LLAMA A LA FUNCION DE CREAR LOS TIPOS
  const typesContainer = crearContenedorTipos(pokemon.types);

  // CONTENEDOR PARA LAS EVOLUCIONES
  // Solo se crea si existe pre-evolución
  if (pokemon.evolvesFrom) {
    // Si existe se crea la evolución
    const evolveDiv = crearSeccionEvolucion(pokemon.evolvesFrom);

    // Se incluye en el div de la evolución
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

  return card; //Retorna la card completa
};

//FUNCIÓN PARA LOS TIPOS
const crearContenedorTipos = (types) => {
  const typesContainer = document.createElement("div");
  typesContainer.classList.add("pokemon-card__types");

  types.forEach((tipo) => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = tipo;
    typesContainer.appendChild(typeSpan);
  });

  return typesContainer; // Devolvemos el div listo para insertar
};

//FUNCIÓN PARA LA EVOLUCIÓN
const crearSeccionEvolucion = (nombreEvolucion) => {
  // 1. Creamos el div principal de evolución
  const evolveDiv = document.createElement("div");
  evolveDiv.classList.add("pokemon-card__evolution");

  // 2. Creamos el texto "Evoluciona de: "
  const evolveText = document.createElement("p");
  evolveText.textContent = "Evoluciona de: ";

  // 3. Añadimos el nombre de la pre-evolución
  const evolveName = document.createElement("span");
  evolveName.textContent = nombreEvolucion;

  // 4. Montamos las piezas
  evolveText.appendChild(document.createElement("br"));
  evolveText.appendChild(evolveName);
  evolveDiv.appendChild(evolveText);

  return evolveDiv; // 5. ¡Listo para entregar!
};

//CREAMOS LAS TARJETAS RECORRIENDO LOS DATOS DE LOS POKEMON (método con datos del array)
// pokemonData.forEach((pokemon) => {
//   const tarjetaNueva = crearTarjetaPokemon(pokemon);
//   pokemonSection.appendChild(tarjetaNueva);
// });

// LLAMADA A LA API (Sustituye al forEach anterior)
obtenerPokemons().then(async (data) => {
  for (const pokemon of data.results) {
    // 1. OBTENEMOS LOS DETALLES DE LOS POKEMON
    const detalles = await obtenerDetallesPokemon(pokemon.url);

    // 2.OBTENEMOS EL NOMBRE DE LA EVOLUCIÓN
    const especie = await obtenerEvoluciones(pokemon.name);

    // 3. OBJETO CON LOS VALORES DE LOS POKEMON
    const pokemonFinal = {
      id: detalles.id,
      name: detalles.name,
      img: detalles.img,
      types: detalles.types,
      evolvesFrom: especie.evolves_from_species
        ? especie.evolves_from_species.name
        : null,
    };

    pokemonsGuardados.push(pokemonFinal);
    // 4. CREAMOS LAS TARJETAS
    const tarjetaNueva = crearTarjetaPokemon(pokemonFinal);

    // 5. LO METEMOS EN LA SECCIÓN
    pokemonSection.appendChild(tarjetaNueva);
  }
  initSearch(pokemonsGuardados, (filtered) => {
    pokemonSection.innerHTML = "";
    filtered.forEach((p) => pokemonSection.appendChild(crearTarjetaPokemon(p)));
  });
});

//PRUEBA PARA CAPTURAR EL INPUT DE SEARCH (consola)
const search = document.getElementById("search");
search.addEventListener("input", () => {
  console.log("Valor actualizado");
});
