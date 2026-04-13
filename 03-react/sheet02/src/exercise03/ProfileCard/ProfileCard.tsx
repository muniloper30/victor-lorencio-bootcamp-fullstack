export const ProfileCard = ({name, role, city}: {name: string; role: string; city: string;} ) => {
    return (
        <section className="profile-card">
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        </section>
    )
}