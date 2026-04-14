import { ProfileCard } from "./ProfileCard/ProfileCard"

export const Exercise03 = () => {
    return (
        <div className="exerciseTres">
            <main>
                <ProfileCard name="Lucía" role="Frontend Developer" city="Madrid">
                </ProfileCard>
                <ProfileCard name="Álvaro" role="Backend Developer" city="Sevilla">
                </ProfileCard>
            </main>
        </div>
    )
}