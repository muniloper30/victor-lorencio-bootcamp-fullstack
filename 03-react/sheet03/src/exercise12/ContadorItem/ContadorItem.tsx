import { useState } from "react"

export const ContadorItem = () => {
    const [item, setItem] = useState({
        label: "Elemento",
        count: 1
    })
//Error al intentar mutar directamente, se debe usar setItem y duplica las propiedades del objeto (hay que pasar el objeto completo)
    function updateItem() {
        setItem({...item, count: item.count + 1})
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-3">
            <p className="text-2xl">Pulsa el botón para actualizar el item</p>
            <div className="p-2 border-2 border-black">
                <button className="h-10 w-10 bg-red-700 rounded-full active:scale-95 transition transform" onClick={updateItem}></button>
            </div>

            <div className="flex gap-3 text-3xl">
                <span>{item.label}</span>
                <span>{item.count}</span>
            </div>
        </div>
    )
}
