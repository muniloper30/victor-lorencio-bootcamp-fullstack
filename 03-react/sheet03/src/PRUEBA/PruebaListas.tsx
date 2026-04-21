const alumnos = [
    { id: 1, nombre: "Ramón", nivel: "Avanzado" },
    { id: 2, nombre: "Cayetano", nivel: "Intermedio" },
    { id: 3, nombre: "Dani", nivel: "Intermedio" },
]


const LiElement = ({ nombre, nivel }: {nombre:string, nivel:string}) => {
    return (
        <li>{nombre} - {nivel} </li>
    )
}

export const PruebaListas = () => {
    const intermedios = alumnos.filter(({ nivel }) => nivel === "Intermedio")
    return (
        <ul>
            {
                // Opción A: Con retorno implícito (paréntesis en lugar de llaves)
                intermedios.map((alumno) => (
                    <LiElement key={alumno.id} {...alumno} />
                ))
            }
        </ul>
    )
}