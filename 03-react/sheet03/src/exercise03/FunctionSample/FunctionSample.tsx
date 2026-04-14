import { useState } from "react" //El hook usestate no estaba importado

export const FunctionSample = () => {

    const [value, setValue] = useState(0);
    function updateValue() {
        setValue(value + 1)        //Error de mutación directa de una constante, hay que modificarla via set
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen gap-10">
            <p className="text-cyan-700 text-4xl">
                {value}
            </p>
            <button className="border-2 border-amber-500 p-2 hover:scale-110 transition-transform duration-700 " onClick={updateValue}>Actualizar</button>
        </section>
    )
}