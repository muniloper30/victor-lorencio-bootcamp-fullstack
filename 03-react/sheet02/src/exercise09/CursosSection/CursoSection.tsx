import { Curso } from "./Curso/Curso"


const courses = [
    {
        name: "React desde cero",
        level: "Principiante",
        duration: 40,
        mode: "Online",
        description: "Aprende React desde los fundamentos hasta crear aplicaciones completas con hooks y componentes reutilizables."
    },
    {
        name: "TypeScript avanzado",
        level: "Avanzado",
        duration: 30,
        mode: "Online",
        description: "Domina los tipos avanzados, generics, decoradores y patrones de diseño aplicados a TypeScript."
    },
    {
        name: "Node.js y Express",
        level: "Intermedio",
        duration: 35,
        mode: "Online",
        description: "Construye APIs REST robustas y escalables con Node.js, Express y conexión a bases de datos."
    },
    {
        name: "Python para Data Science",
        level: "Principiante",
        duration: 50,
        mode: "Presencial",
        description: "Introduce los fundamentos de Python aplicados al análisis de datos con Pandas, NumPy y visualización."
    },
    {
        name: "Docker y Kubernetes",
        level: "Avanzado",
        duration: 25,
        mode: "Online",
        description: "Aprende a containerizar aplicaciones y orquestar microservicios en entornos de producción reales."
    },
    {
        name: "Diseño UI/UX con Figma",
        level: "Intermedio",
        duration: 20,
        mode: "Híbrido",
        description: "Crea interfaces atractivas y experiencias de usuario efectivas usando Figma y principios de diseño moderno."
    },
]


export const CursoSection = () => {
    return (
        <div className="grid grid-cols-3 gap-6 p-8">
            {courses.map((course) => (
                <Curso name={course.name}
                    level={course.level}
                    duration={course.duration}
                    mode={course.mode}
                    description={course.description}></Curso>
            ))}
        </div>
    )
}