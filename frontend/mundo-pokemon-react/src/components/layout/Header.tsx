import { PokemonSearch } from "../pokemon/PokemonSearch"

export const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <PokemonSearch></PokemonSearch>
        </div>

    )
}