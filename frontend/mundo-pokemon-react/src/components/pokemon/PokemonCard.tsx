import { useState, useEffect } from "react";
import type { Pokemon } from "../../services/pokemonApi";
import { obtenerEvoluciones } from "../../services/pokemonApi";
// 1. Defines las props que espera recibir el componente
interface PokemonCardProps {
    pokemon: Pokemon;
}

// 2. Desestructuras las props directamente
export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const [evolucionPrevia, setEvolucionPrevia] = useState<string | null>(null);

    // Este useEffect es independiente por cada card
    useEffect(() => {
        const cargarEvolucion = async () => {
            const especie = await obtenerEvoluciones(pokemon.name);
            setEvolucionPrevia(especie?.evolves_from_species?.name ?? null);
        };

        cargarEvolucion();
    }, [pokemon.name]);



    return (
        <div className="w-full overflow-hidden bg-white rounded-sm shadow-[0_10px_10px_rgba(0,0,0,0.294)] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] hover:[transform:perspective(1000px)_rotateX(10deg)_rotateY(-5deg)_translateY(-10px)]">

            {/* HEADER — fondo gris, altura fija, imagen centrada */}
            <header className="relative flex flex-col items-center justify-center w-full h-[150px] bg-[#cac4c4] rounded-sm">
                <img
                    src={pokemon.img}
                    alt={pokemon.name}
                    className="bg-cover"
                />
                {/* ID — esquina inferior izquierda */}
                <span className="absolute bottom-0 left-0 px-2 py-[0.2rem] text-xs font-bold text-[#856b54] bg-[#cdcdc8] border border-[#cac4c4]">
                    ID / {pokemon.id}
                </span>
            </header>

            {/* BODY — nombre, tipos, evolución */}
            <div className="h-[150px] p-6">
                <p className="text-[1.3rem]">{pokemon.name}</p>

                {/* Tipos */}
                <div className="flex gap-1 mt-[0.3rem]">
                    {pokemon.types.map((tipo) => (
                        <span
                            key={tipo}
                            className="px-[0.2rem] text-[#856b54] border border-[#856b54] rounded-[0.3rem]"
                        >
                            {tipo}
                        </span>
                    ))}
                </div>

                {/* Evolución — solo se pinta si tiene evolución previa */}
                {evolucionPrevia && (
                    <div className="pl-[0.2rem] mt-[0.3rem] border-l-[3px] border-[#634e3b]">
                        <p className="text-[#797960] text-sm">Evoluciona de:</p>
                        <span className="text-[1.3rem] text-black">{evolucionPrevia}</span>
                    </div>
                )}
            </div>

        </div>
    );
};