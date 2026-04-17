import { useState } from "react"

export const BasicForm = () => {

    const [data, setData] = useState({
        nombre: '',
        correo: '',
    })

    const [mensaje, setMensaje] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (data.nombre.trim() === "") {
            setMensaje("El nombre no puede estar vacío.")
            return
        }

        if (data.correo.trim() === "") {
            setMensaje("El correo no puede estar vacío.")
            return
        }

        setMensaje("Formulario enviado correctamente ✅")
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre:</label>
                <input type="name" name="nombre" id="name" value={data.nombre} onChange={handleChange} />
                <label htmlFor="">Email</label>
                <input type="email" name="correo" id="email" value={data.correo} onChange={handleChange} />
                <button>Enviar</button>
            </form>

            {mensaje && <p>{mensaje}</p>}

        </div>
    )
} 
