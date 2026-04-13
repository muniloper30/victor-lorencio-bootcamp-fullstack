
export const Modulo = ({ name, time, level, description }: {name: string; time: number; level: string; description: string}) => {
    return (
        <div className="modulo">
            <h1>{name}</h1>
            <span>{time}h</span>
            <span>{level}</span>
            <p>{description}</p>
        </div>
    )
}