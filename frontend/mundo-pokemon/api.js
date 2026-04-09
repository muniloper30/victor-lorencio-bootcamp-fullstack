//PROBAR CARGA DE DE DATOS DESDE LA POKEAPI
//Función asincrona para conectarnos con los datos de la pokeapi
//EXPORTAMOS LA FUNCIÓN PARA OBTENER LOS POKEMONS
// export async function obtenerPokemons () {
//     const response = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
//     return await response.json();
// }

//EXPORTAMOS LA FUNCIÓN PARA OBTENER LOS NOMBRES DE LAS EVOLUCIONES
// export async function obtenerDetallesPokemon(url) {
//   const response = await fetch(url);
//   const detalles = await response.json();
//   const img = detalles.sprites.front_default;
//   // const img2 = detalles.sprites.other['official-artwork'].front_default  //img de más calidad
//   const id = detalles.id; //Estraemos el id
//   const name = detalles.name; //Extraemos el name de detalles
//   const types = detalles.types.map((item) => item.type.name); //Extraemos el tipo de detalles
//   return { img, id, types, name };
// }

//EXPORTAMOS LA FUNCIÓN PARA OBTENER LOS NOMBRES DE LAS EVOLUCIONES
// export async function obtenerEvoluciones(name){
//     const response = await fetch (`https://pokeapi.co/api/v2/pokemon-species/${name}`)
//     return await response.json();
// }
/////////////////////////////////////////////////

//FUNCIÓN ATÓMICA QUE SE ENCARGA UNICAMENTE DE TRAER LOS DATOS DE LA URL QUE SE LE PASE
const pedirDatos = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error el la petición de la api para traer los datos ${response.status}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.log("Error al obtener los datos:", error);
    return null;
  }
};

//FUNCIÓN REFACTORIZADA OBTENERPOKEMONS
export const obtenerPokemons = () => pedirDatos("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

//FUNCIÓN REFACTORIZADA PARA OBTENER LOS DETALLES DE LOS POKEMONS (USO DE DESESTRUCTURACIÓN DE DATOS)
export async function obtenerDetallesPokemon(url) {
  const detalles = await pedirDatos(url);
  if (!detalles) return null;

  const { id, name, sprites, types } = detalles;

  return {
    id,
    name,
    img: sprites.front_default,
    types: types.map((item) => item.type.name),
  };
}

//Función refactorizada para obtener las evoluciones
export const obtenerEvoluciones = (name) => pedirDatos(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
