// ============================================================
// INTERFACES DE LA API (forma cruda de los datos que llegan)
// ============================================================

/**
 * Forma de cada item en la lista de pokemons.
 * Cada resultado tiene nombre y una URL para pedir sus detalles.
 */
interface PokeApiListItem {
    name: string;
    url: string; // ✅ string simple, NO array
}

/**
 * Respuesta completa de /pokemon?limit=300
 * El array va FUERA de las llaves del objeto
 */
interface PokeApiListResponse {
    results: PokeApiListItem[]; // ✅ array de items, bien posicionado
}

/**
 * Forma cruda de cada tipo dentro del detalle de un pokemon.
 * La API devuelve: types: [ { slot: 1, type: { name: "fire", url: "..." } } ]
 */
interface PokeApiType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

/**
 * Respuesta cruda del endpoint /pokemon/:id o /pokemon/:name
 * Solo tipamos los campos que vamos a usar (no hace falta tipar los 30+ campos)
 */
interface PokeApiDetail {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: PokeApiType[]; // ✅ usamos la interface anterior, adiós al `any`
}

/**
 * Respuesta cruda del endpoint /pokemon-species/:name
 * Solo nos interesa la URL de la cadena evolutiva
 */
interface PokeApiSpecies {
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {  //  esto es lo que nos da el pokemon previo
    name: string;
  } | null; // null si es el primer eslabón (ej. Bulbasaur no evoluciona de nadie)
}

// ============================================================
// INTERFACE PÚBLICA (lo que exportamos y usa el resto de la app)
// ============================================================

/**
 * El pokemon "limpio" que usará tu App.
 * Es el resultado de transformar PokeApiDetail → Pokemon.
 */
export interface Pokemon {
    id: number;
    name: string;
    img: string;
    types: string[]; // ✅ solo los nombres, sin el ruido de la API
}


/**
 * Propiedades para el componente Header.
 * Permite comunicar el valor de búsqueda desde el input del Header hacia el componente padre.
 */
export interface HeaderProps {
    /** Función callback que se ejecuta cada vez que el usuario realiza una búsqueda */
    onSearch: (value: string) => void;
}


// ============================================================
// FUNCIÓN BASE GENÉRICA
// ============================================================

/**
 * Hace fetch a cualquier URL y devuelve los datos tipados con <T>.
 * Si algo falla, devuelve null en lugar de explotar la app.
 */
const pedirDatos = async <T>(url: string): Promise<T | null> => {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }

        return await respuesta.json() as T;

    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return null;
    }
};

// ============================================================
// FUNCIONES EXPORTADAS
// ============================================================

/**
 * Devuelve la lista con nombre + URL de los primeros 300 pokemons.
 * ✅ Ahora usa PokeApiListResponse en lugar de any o el typo anterior.
 */
export const obtenerPokemons = () =>
    pedirDatos<PokeApiListResponse>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300");

/**
 * Recibe la URL de un pokemon, pide sus detalles y los transforma
 * al formato limpio Pokemon que usa tu app.
 *
 * Patrón: PokeApiDetail (crudo) → Pokemon (limpio)
 * ✅ Sin ningún `any`
 */
export async function obtenerDetallesPokemon(url: string): Promise<Pokemon | null> {
    const detalles = await pedirDatos<PokeApiDetail>(url); // ✅ tipado, no any

    if (!detalles) return null;

    const { id, name, sprites, types } = detalles; // desestructuración tipada

    return {
        id,
        name,
        img: sprites.front_default,
        types: types.map((item) => item.type.name), // ✅ item ya es PokeApiType, no necesita `any`
    };
}

/**
 * Pide la especie de un pokemon para obtener la URL de su cadena evolutiva.
 * ✅ Tipado con PokeApiSpecies en lugar de any.
 *
 * Uso en app.tsx:
 *   const especie = await obtenerEvoluciones("charizard");
 *   const urlEvoluciones = especie?.evolution_chain.url;
 */
export const obtenerEvoluciones = (nombre: string) =>
    pedirDatos<PokeApiSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${nombre}`);