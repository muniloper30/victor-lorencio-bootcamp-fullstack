import { useState } from "react";

export const ComponenteSample = () => {
    const [value, setValue] = useState(0);
    function handleClick() {
        setValue(prev => prev + 1);
        setValue(prev => prev + 1);
        setValue(prev => prev + 1);
    }

    //Usamos prev para decirle  a React: "sea cual sea el valor más reciente del estado, súmale 1". 
    // React garantiza que prev siempre es el valor más actualizado, no el de la última vez que se renderizó.
    //Por lo que al hacer 3 setvalue sumamos de 3 en 3

    return (
        <div className="flex items-center justify-center min-h-screen text-5xl gap-3">
            <span>Suma de 3 en 3</span>
            <div className="border-2 border-black p-1">
                <button className="bg-red-600 w-10 h-10 rounded-full hover:scale-110 transition transform cursor-pointer" onClick={handleClick}> </button>
            </div>
            <span>{value}</span>
        </div>
    )
}