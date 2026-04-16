import { useState } from "react"

export const Prueba2 = () => {

const [nivel , setNivel] = useState("")

    return (
        <section className="flex flex-col items-center justify-around min-h-screen">
            <label htmlFor="nivel">Nivel</label>
            <select id="nivel" value={nivel} onChange={e => setNivel(e.target.value)}>
                <option value="" disabled>Selecciona una opción</option>
                <option value="npi">NPI</option>
                <option value="inicial">Inicial</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
            </select>

        <p>Su nivel es : {nivel}</p>

        </section>
    )
}