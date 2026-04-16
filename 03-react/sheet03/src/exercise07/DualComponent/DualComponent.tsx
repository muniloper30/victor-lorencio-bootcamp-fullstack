import { useState } from "react"

export const DualComponent = () => {
    const [visible, setVisible] = useState(false)

    const [value, setValue] = useState(0)
    const upValue = () => {
        setValue(prev => prev + 1)
    }
    const downValue = () => {
        setValue(prev => prev - 1)
    }
    const resetValue = () => {
        setValue(0)
    }

    const toggleVisible = () => {
        setVisible(prev => !prev)
    }




    return (
        <section className="flex flec-col items-center justify-center min-h-screen">
            <article className="flex flex-col items-center justify-center gap-4">
                <p className="text-4xl">DISFRUTA DE ESTE PEDAZO DE CONTADOR</p>
                <span className="text-4xl">{value}</span>
                <div className="flex gap-3 ">
                    <button onClick={upValue} className="text-3xl bg-red-700 rounded-full p-3 w-full text-white active:scale-50 transition transform">+</button>
                    <button onClick={downValue} className="text-3xl bg-red-700 rounded-full p-3 w-full text-white active:scale-50 transition transform">-</button>
                    <button onClick={resetValue} className="text-2xl p-3 bg-green-700 active:scale-50 transition transform">Reset</button>
                </div>

                {/* Botón visibilidad */}
                <button
                    onClick={toggleVisible}
                    className="bg-blue-700 text-white px-4 py-2 rounded active:scale-90 transition"
                >
                    {visible ? "Ocultar bloque" : "Mostrar bloque"}
                </button>

                {/* Bloque condicional */}
                {visible && (
                    <div className="p-4 bg-gray-200 rounded">
                        <p>Este bloque se puede mostrar u ocultar</p>
                    </div>
                )}

            </article>
        </section>
    )
}