import { Modulo } from "./Modulo";

export const ModuloSection = () => {
    return (
        <div className="modulo-section">
            <Modulo name="Java" time={70} level="Intermedio" description="Lenguaje de programación orientado a objetos bla bla bla" ></Modulo>
            <Modulo name="Java" time={70} level="Intermedio" description="Lenguaje de programación orientado a objetos, robusto y multiplataforma." />
            <Modulo name="Python" time={50} level="Principiante" description="Lenguaje versátil e intuitivo, ideal para data science, IA y scripting." />
            <Modulo name="TypeScript" time={60} level="Intermedio" description="Superset de JavaScript con tipado estático para proyectos escalables." />
            <Modulo name="React" time={80} level="Intermedio" description="Librería de UI basada en componentes para construir interfaces modernas." />
            <Modulo name="SQL" time={40} level="Principiante" description="Lenguaje estándar para consultar y gestionar bases de datos relacionales." />
            <Modulo name="Docker" time={35} level="Avanzado" description="Plataforma de contenedores para desplegar aplicaciones de forma aislada y reproducible." />
            <Modulo name="Spring Boot" time={90} level="Avanzado" description="Framework de Java para construir APIs REST y microservicios de forma rápida." />
        </div>
    )
}