import type { Pokemon } from "../../services/pokemonApi";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 animate-fade-in">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};