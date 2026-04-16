import { useState } from "react";


export const Formulario = () =>  {
  const [texto, setTexto] = useState("")

  const limpiarInput = () => {
    setTexto("")
  }
  return (
    <div>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe algo..."
      />
      <p>{texto}</p>
      <button onClick={limpiarInput}>Limpiar</button>
    </div>
  );
}