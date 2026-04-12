import './App.css'
// import { Card } from './components/exercise_02/Card/Card';
import { HeroSection } from './components/exercise_05/Hero/HeroSection';
import { CardSection } from './components/exercise_05/CardSection/CardSection';
import { Footer } from './components/exercise_05/Footer/Footer';

function App() {


  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Bienvenido a la primera Sheet para trabajar con React</h1>
          {/*Esta card es referente al exercise02
           <Card></Card> */}
           <HeroSection></HeroSection>
           <CardSection></CardSection>
           <Footer></Footer>
        </div>

      </section>


    </>
  )
}

export default App
