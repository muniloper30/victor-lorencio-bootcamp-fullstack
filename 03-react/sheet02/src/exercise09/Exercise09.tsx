import { HeroSection } from "./HeroSection/HeroSection"
import { CursoSection } from "./CursosSection/CursoSection"
export const Exercise09 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <HeroSection></HeroSection>
            <CursoSection></CursoSection>
        </div>
    )
}