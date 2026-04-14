export const ProfileCard = ({name, role, city}: {name: string; role: string; city: string;} ) => {
    return (
        <section className="profile-card">
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        </section>
    )
}

// Errores detectados :
// La firma del componente al ser typescript se pierde , hay que identificar los tipos de las props
// Coma faltante entre role y city
// Cuando usamos props para desestructurar no hace falta usar props.name