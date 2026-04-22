
import { PokemonSearch } from "../pokemon/PokemonSearch"
import type { HeaderProps } from "../../services/pokemonApi";

  

export const Header = ({ onSearch }: HeaderProps) => {
    return (
        <div className='flex flex-col items-center justify-center mt-4'>
            <PokemonSearch onSearch={onSearch} />
        </div>
    )
}
