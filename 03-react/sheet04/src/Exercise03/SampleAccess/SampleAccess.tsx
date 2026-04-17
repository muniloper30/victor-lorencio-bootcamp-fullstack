import { useState } from "react"

export const SampleAccess = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        alert(`Dato enviado: ${email}`)
    }

    return (
        <form className="flex items-center  gap-3" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label> {/*Corrección del label de html por htmlFor */}
            <input  className="text-md bg-amber-600 p-2 rounded-sm"onChange={e => setEmail(e.target.value)} type="email" id="email" value={email} />{/* Se captura el evento */}
            <button className="text-md bg-amber-600 p-2 rounded-sm">Enviar</button>
        </form>
    )
}