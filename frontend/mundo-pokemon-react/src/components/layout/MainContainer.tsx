import { Header } from "./Header"
import { PokemonGrid } from "../pokemon/PokemonGrid"

import { useEffect, useState } from 'react';
import { obtenerPokemons, obtenerDetallesPokemon, } from "../../services/pokemonApi";
import type { Pokemon } from "../../services/pokemonApi";

export const MainContainer = () => {


    // 1. Estado para guardar la lista de pokemons
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // 2. Estado para saber si estamos cargando (útil para mostrar un spinner)
    const [cargando, setCargando] = useState(true);

     // 3. Estado para filtrar las búsquedas
    const [search, setSearch]    = useState('')               

    // 4. useEffect se ejecuta UNA vez al montar el componente (por el array vacío [])
    useEffect(() => {

        // Necesitas una función async dentro porque useEffect no puede ser async directamente
        const cargarPokemons = async () => {
            // Pides la lista (solo nombres + urls)
            const lista = await obtenerPokemons();
            if (!lista) return;

            // Por cada item de la lista, pides sus detalles en paralelo
            const detalles = await Promise.all(
                lista.results.map((item) => obtenerDetallesPokemon(item.url))
            );

            // Filtras los null por si alguna petición falló
            const pokemonsFiltrados = detalles.filter((p): p is Pokemon => p !== null);

            setPokemons(pokemonsFiltrados);
            setCargando(false);
        };

        cargarPokemons();

    }, []); // <- array vacío = solo se ejecuta al montar

    // 4. Renderizado condicional mientras cargan los datos
    if (cargando) return <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin">
        </div>
            <p>Cargando Pokemons...</p>

    </div>;
// Estado derivado: se recalcula en cada render
    const pokemonsVisibles = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <div className="max-w-[950px] px-4 mx-auto">
            <Header onSearch={setSearch}></Header>
            <PokemonGrid pokemons={pokemonsVisibles} />
        </div>
    )
}