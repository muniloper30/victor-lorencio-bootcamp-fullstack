export const Curso = ({ name, level, duration, mode, description }: { name: string; level: string; duration: number; mode: string; description: string }) => {
    return (
        <div className="bg-amber-300 rounded-lg p-3 border-8 border-blue-800">
            <h1>{name}</h1>
            <div className="flex gap-3">
                <span className="rounded-lg bg-violet-900/70 p-2 text-white font-semibold text-sm">{level}</span>
                <span className="rounded-lg bg-violet-900/70 p-2 text-white font-semibold text-sm">{duration}</span>
                <span className="rounded-lg bg-violet-900/70 p-2 text-white font-semibold text-sm">{mode}</span>
            </div>
            <p>{description}</p>
        </div>
    )
}