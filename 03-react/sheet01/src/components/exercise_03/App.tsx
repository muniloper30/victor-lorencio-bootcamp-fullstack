{/**COMPONENTE CORREGIDO*/}

function App() { // 1. Nombre del componente en mayúsculas'
  return (
    <> {/* 2. Fragmento añadido */}
      <section className="hero"> {/* 3. Cambiado 'class' a 'className' */}
        <h1>React desde cero</h1>
        <p>Aprende a crear interfaces modernas.</p> {/* 4. Cerrada la etiqueta <p> */}
        <img src="https://via.placeholder.com/200" alt="Portada" /> {/* 5. Cerrada la etiqueta <img> */}
        <button>Empezar</button>
      </section>
    </>
  );
}

export default App; // 6. Exportación añadida