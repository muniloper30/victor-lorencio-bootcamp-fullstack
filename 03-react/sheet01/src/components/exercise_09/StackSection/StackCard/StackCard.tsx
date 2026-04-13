
//@ts-expect-error Error de tipo (any typescript:eatricto)

export const StackCard = ({ item }) => {

    const { name, imageUrl, description } = item;

    return (
        <div className="info-card">
            <div className="info-card-header">
                <img src={imageUrl} alt={name} width={"100px"} />
                <h1>{name}</h1>
            </div>
            <div className="info-card-body">
                <p>{description}</p>
            </div>
            <div className="info-card-footer">
                <button>Más info</button>
            </div>
        </div>
    )
}