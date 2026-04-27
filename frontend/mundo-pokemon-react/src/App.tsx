
import './App.css'
import { MainContainer } from './components/layout/MainContainer'
import { PokemonModal } from './components/pokemon/PokemonModal'
import { BackgroundDecorations } from './components/ui/BackgroundDecorations'
import { Route, Routes } from 'react-router-dom'


function App() {



  //   useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=-1')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //     // .then((data) => setPokemons(data.results))
  // }, []);


// Al recargar desde el modal vuelve al grid normal
 if (window.location.pathname !== '/') {
    window.location.replace('/')
  return 
 }



  return (
    <>
      <BackgroundDecorations></BackgroundDecorations>

      <Routes>
        <Route path='/' element={<MainContainer></MainContainer>}></Route>
        <Route path='/pokemon/:name' element={

          <>
            <MainContainer></MainContainer>
            <PokemonModal></PokemonModal>
          </>

        }></Route>
      </Routes>

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
