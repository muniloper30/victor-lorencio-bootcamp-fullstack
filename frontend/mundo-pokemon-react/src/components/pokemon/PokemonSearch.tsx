
import type { HeaderProps } from "../../services/pokemonApi"

    export const PokemonSearch = ({onSearch} : HeaderProps) => {



        return (
            <>
                <label htmlFor="search"></label>
                <input 
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-3 m-0 text-base text-center outline-none border border-white bg-gray-100 placeholder:text-slate-400/40 shadow-md focus:border-red-600" type="search" placeholder="Filtra pokemons por nombre..." />
            </>

        )
    }