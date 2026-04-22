
import './App.css'

import { MainContainer } from './components/layout/MainContainer'
import { BackgroundDecorations } from './components/ui/BackgroundDecorations'
function App() {



  //   useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=-1')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //     // .then((data) => setPokemons(data.results))
  // }, []);







  return (
    <>
      <BackgroundDecorations></BackgroundDecorations>
      <MainContainer></MainContainer>

      {/* <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.img} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div> */}


    </>
  )
}

export default App
