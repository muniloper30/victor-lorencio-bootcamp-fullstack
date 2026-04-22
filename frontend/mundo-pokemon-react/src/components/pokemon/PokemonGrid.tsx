import type { Pokemon } from "../../services/pokemonApi";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};