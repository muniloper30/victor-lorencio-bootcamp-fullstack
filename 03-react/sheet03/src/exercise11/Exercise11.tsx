import { useState } from "react"

export const Exercise11 = () => {

    const [dark ,setDark] = useState(false)

    const cambiarTema = () => {
        setDark(!dark)
    }

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen gap-28 ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} `}>
            <h1 className="text-4xl">HOLA Y BIENVENIDO</h1>
            <div className="grid grid-cols-3 gap-5">
                <article>
                    <p>NAME COURSE</p>
                    <div className="flex gap-3 flex-col">
                        <span className="p-2 bg-green-400">level:intermedio</span>
                        <span className="p-2 bg-green-400">horas:40h</span>
                    </div>
                </article>
                 <article>
                    <p>NAME COURSE</p>
                    <div className="flex gap-3 flex-col">
                        <span className="p-2 bg-green-400">level:intermedio</span>
                        <span className="p-2 bg-green-400">horas:40h</span>
                    </div>
                </article>
                 <article>
                    <p>NAME COURSE</p>
                    <div className="flex gap-3 flex-col">
                        <span className="p-2 bg-green-400">level:intermedio</span>
                        <span className="p-2 bg-green-400">horas:40h</span>
                    </div>
                </article>
        

            </div>
            <button onClick={cambiarTema} className="bg-green-700 text-white p-2 cursor-pointer hover:scale-110 transition transform ">Cambiar tema</button>
        </div>
    )
}