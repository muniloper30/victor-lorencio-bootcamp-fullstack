import { StackCard } from "./StackCard/StackCard";

const stack = [
    {
    name: "HTML y CSS",
    imageUrl: "https://raw.githubusercontent.com/abraham-perez/icons-stack/main/html-css.png",
    description: "Los cimientos de la web: estructura semántica y diseño visual responsivo."
  },
  {
    name: "Git",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
    description: "Control de versiones esencial para el trabajo colaborativo y despliegue de software."
  },
  {
    name: "React",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    description: "Librería de JavaScript para crear interfaces de usuario dinámicas y componentes reutilizables."
  },
  {
    name: "MySQL",
    imageUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    description: "Base de datos relacional para gestionar y persistir la información de nuestras aplicaciones."
  },
  {
    name: "Java",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    description: "Lenguaje robusto orientado a objetos, el motor principal del desarrollo backend en este bootcamp."
  },
  {
    name: "Spring Boot",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png",
    description: "Framework potente para crear microservicios y aplicaciones Java listas para producción."
  }
];

export const StackSection = () => {
    return (
        <div className="stack-section">
            <div className="stack-header">
                <h1>STACK TECNOLÓGICO</h1>
            </div>
            <div className="cards-container">
                {stack.map((item, index) => (
                    // Pasamos cada objeto como la prop 'item'
                    <StackCard key={index} item={item} />
                ))}
            </div>
        </div>
    ) 
}