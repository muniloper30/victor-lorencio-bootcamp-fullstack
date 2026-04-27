import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { obtenerDetallesPokemon } from "../../services/pokemonApi";
import type { Pokemon } from "../../services/pokemonApi";

export const PokemonModal = () => {

  const { name } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    if (!name) return
    obtenerDetallesPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => {
        console.log('Datos recibidos:', data)
        setPokemon(data)
        setCargando(false)
      })
  }, [name])


  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center  z-50"
      onClick={() => navigate('/')}
    >
      <div
        className="bg-white rounded-xl p w-96 flex flex-col items-center gap-4 animate-fade-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {cargando || !pokemon ? (
          <p>Cargando...</p>
        ) : (
          <>
            <header className="relative flex flex-col p-28 items-center justify-center w-full h-37.5 bg-[#cac4c4] rounded-sm">


              <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
              <img src={pokemon.img} alt={pokemon.name} className="w-32 h-32" />
            </header>
            {/* Body de la card de detalles  */}
            <div className="flex flex-col items-center justify-center gap-3 p-5">
              <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <span key={type} className="px-3 py-1 rounded-full text-white text-sm bg-gray-400 capitalize">
                    {type}
                  </span>
                ))}
              </div>

              <p>Altura: {pokemon.height} </p>
              <p>Peso: {pokemon.weight} kg</p>

            </div>
          </>
        )}

      </div>
    </div>
  )
}