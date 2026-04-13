import { Normas } from "./Normas/Normas"
import { Recomendaciones } from "./Recomendaciones/Recomendaciones"

export const FeatureSection = () => {
    return (
        <div className="feature-section">
            <Normas></Normas>
            <Recomendaciones></Recomendaciones>
        </div>
    )
}