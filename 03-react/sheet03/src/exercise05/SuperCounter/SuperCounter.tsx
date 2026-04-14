import { useState } from "react"

export const SuperCount = () => {

    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(prev => prev + 1)
    }

    const downCount = () => {
        setCount(prev => prev - 1)
    }

    const resetCount = () => setCount(0)



    return (
        <section className="flex flex-col items-center justify-center min-h-screen gap-3">
            <p className="text-4xl">Contador: <span>{count}</span></p>
            <div className="flex gap-3.5">
                <button className="p-3 rounded-lg bg-violet-800 text-white cursor-pointer" onClick={upCount}>Aumentar</button>
                <button className="p-3 rounded-lg bg-violet-800 text-white cursor-pointer" onClick={downCount}>Reducir</button>
                <button className="p-3 rounded-lg bg-violet-800 text-white cursor-pointer" onClick={resetCount}>Reset</button>
            </div>
        </section>
    )
}