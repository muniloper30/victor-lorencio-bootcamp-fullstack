export const Card = () => {
    return (
        <div className="info-card">
            <div className="info-card-header">
                <img src="#" alt="Imagen de la card" />
                <h1>Título de la card</h1>
            </div>
            <div className="info-card-body">
                <p>Descripción de la card a la que corresponde</p>
            </div>
            <div className="info-card-footer">
                <button>Más info</button>
            </div>
        </div>
    )
}