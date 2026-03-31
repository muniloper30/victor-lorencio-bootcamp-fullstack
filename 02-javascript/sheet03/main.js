//Ejercicio 1. Lista de herramientas
/** Declara un array con al menos cinco herramientas de desarrollo o estudio que conozcas.
 *  Tareas
- muestra por consola el array completo;
- muestra el primer elemento;
- muestra el último elemento;
- muestra cuántos elementos contiene.
 */

const miArray = [1, 2, 3, 4, 5, 6, 7, 8];
const miSegundoArray = ["limón", "melón", "pera", "plátano"];

//Mostrar los dos arrays
console.log(miArray);
console.log(miSegundoArray);

//Mostrar primer elemento
console.log(miArray[0]); //1
console.log(miSegundoArray[0]); //limón

//Mostrar array formato objeto
console.log({ miSegundoArray });

//Mostrar cuantos elementos contienen los arrays

console.log(miArray.length); //8 elementos del primer array
console.log(miSegundoArray.length); //4 elementos del segundo array

//Ejercicio 3. ¿Array u objeto?
/** Para cada caso, decide si usarías array, objeto o array de objetos. Después, justifica tu
decisión brevemente en comentarios dentro del código o en un texto aparte.
Casos:
1. una lista de nombres de alumnos;
2. los datos de un producto;
3. varias tareas con título y estado;
4.las ciudades visitadas por una persona;
5. un catálogo de películas con título, año y género. */

const nombresAlumnos = ["Víctor", "Volo", "Nicolás", "Cayetano"]; //Nombres de alumnos

//Objeto con datos de un producto.
const datosProducto = {
  nombre: "Adizero evo sl",
  precio: 129.99,
  cantidad: 30,
  categoria: "Running",
  Disponibilidad: true,
};

//Tareas de una persona

const tareas = [
  {
    id: 1,
    titulo: "Estudiar javascript",
    tipo: "Estudio",
    completada: true,
  },
  {
    id: 2,
    titulo: "Entrenar clase de crossfit",
    tipo: "Ocio",
    completada: true,
  },
  {
    id: 3,
    titulo: "Hacer la compra",
    tipo: "Tareas del hogar",
    completada: false,
  },
];

//Ciudades visitadas por una persona

const ciudadesVisitadas = {
  nombrePersona: "Victor",
  ciudadesVisitadas: ["Gante", "Riviera Maya", "Burgos", "Roma"],
};

//Catálogo de peliculas

const catalogoPeliculas = [
  {
    id: 1,
    titulo: "Piratas del Caribe: La maldición de la Perla Negra",
    genero: ["Acción", "Aventura", "Fantasía"],
    anio: 2003,
    visto: true,
    puntuacion: 8.1,
    detalles: {
      director: "Gore Verbinski",
      duracion: 143,
    },
  },
  {
    id: 2,
    titulo: "Star Wars: Una nueva esperanza",
    genero: ["Ciencia Ficción", "Aventura"],
    anio: 1977,
    visto: true,
    puntuacion: 8.6,
    detalles: {
      director: "George Lucas",
      duracion: 121,
    },
  },
  {
    id: 3,
    titulo: "Dune",
    genero: ["Ciencia Ficción", "Drama"],
    anio: 2021,
    visto: false,
    puntuacion: 8.0,
    detalles: {
      director: "Denis Villeneuve",
      duracion: 155,
    },
  },
];

//Ejercicio 5. Modificar una entidad
/**Crea un objeto producto con estas propiedades mínimas:
- nombre
- precio
- disponible

Tareas

- cambia el precio;
- cambia la disponibilidad;
- añade una propiedad categoria ;
- elimina una propiedad a tu elección si lo consideras oportuno.
 */

const product = {
  nombre: "Nvidia Gforce 5070",
  precio: 899.99,
  Disponibilidad: true,
};

//Cambiar propiedades del objeto:

product.precio = 699.99; //oferta
console.log(product.precio); //Comprobación de precio actualizado

//Incluimos la propiedad categoría
product.categoria = "Tarjetas gráficas";
console.log(product.categoria);

//Test eliminar propiedad nombre
delete product.nombre;
console.log(product.nombre); //Undefined, la propiedad fue eliminada

//Ejercicio 7. Lista de videojuegos o películas
/** Crea un array de al menos tres objetos. Cada objeto debe representar un videojuego o una
película e incluir:
- id
- titulo
- anio
- genero
- disponible */

const listOfVideoGames = [
  {
    id: 1,
    titulo: "The last of us",
    anio: 2013,
    generos: ["Acción", "Aventura", "Survival Horror", "Sigilo"],
    disponibilidad: true,
  },
  {
    id: 2,
    titulo: "God of war ragnarok",
    anio: 2022,
    generos: ["Acción", "Aventura", "Rpg"],
    disponibilidad: false,
  },
  {
    id: 3,
    titulo: "Expedition 33",
    anio: 2025,
    generos: ["RPG por turnos", "Acción", "Fantasía"],
    disponibilidad: true,
  },
];

//Mostramos el array de videojuegos completo
console.table(listOfVideoGames);
//Mostrar el titulo del segundo elemento
console.log(listOfVideoGames[1].titulo); // God of war ragnarok
//Muestra si el 3 elemento esta disponible o no
const estadoTercero = listOfVideoGames[2].disponibilidad
  ? "Está disponible"
  : "No está disponible";
console.log(`¿El tercer juego está disponible?: ${estadoTercero}`);

//Ejercicio 9. Catálogo de cursos
/**Modela una colección de cursos en un array de objetos. Cada curso debe incluir:
 * titulo
 * duracion
 * nivel
 * activo
 * 
 * recorre la colección y muestra un resumen de cada curso por consola;
usa un mensaje claro, no solo console.log(curso)
 */
console.log("-----------");
console.log("CATÁLOGO DE CURSOS");

const cursos = [
  {
    titulo: "Curso de javascript",
    duracion: "30 horas",
    nivel: "Básico",
    activo: true,
  },
  {
    titulo: "Curso de java",
    duracion: "50 horas",
    nivel: "Intermedio",
    activo: true,
  },
  {
    titulo: "Curso de python",
    duracion: "60 horas",
    nivel: "Avanzado",
    activo: false,
  },
];

for (const curso of cursos) {
  console.log(
    `Curso: ${curso.titulo} | Duración: ${curso.duracion} | Nivel: ${curso.nivel} | Activo: ${curso.activo}`,
  );
}

console.log("--------");
//Ejercicio 11. Desestructuración de objeto
/**Crea un objeto alumno con estas propiedades:
 * nombre
 * edad
 * grupo
 * activo
 *
 * Tareas
 * desestructura nombre y grupo ;
 * renombra una propiedad al desestructurarla;
 * asigna un valor por defecto a una propiedad que no exista todavía.
 */

const alumno = {
  nombre: "Víctor",
  edad: 33,
  grupo: "A",
  activo: true,
};

const { nombre: nombreAlumno, grupo, alias = "Muni" } = alumno; //Desestructuración  (cambiamos nombre por nombre alumno e incluimos la propiedad alias que auún no esta en el objeto)
console.log(`Nombre: ${nombreAlumno} | Grupo ${grupo} | Alias: ${alias}`);

console.log("-------")

//Ejercicio 13. Actualizar un objeto sin modificar el original
/**Crea un objeto producto con:
 * nombre
 * precio
 * stock
 * 
 * Tareas
- crea una nueva versión del objeto con un precio distinto;
- añade una propiedad nueva en la copia;
- muestra el original y la copia.
 */

const itemProduct = {
    nombre: "Reebok Nano Crossfit",
    precio: 149.99,
    stock: 30
}

const itemProductDiscount = {
    ...itemProduct,
    precio: 129.99,
    categoria: "Crossfit",
}

console.log({itemProduct})
console.log({itemProductDiscount})

//Ejercicio 15. optional chaining   
/** Crea un objeto perfil con:
 * nombre
* contacto , que puede incluir o no:
    - telefono
    - email

Tareas:
- accede a una propiedad que sí exista;
- intenta acceder con seguridad a una que pueda no existir usando ?. ;
- compara qué ocurriría si intentaras acceder sin esa protección.
 */

console.log("----------")

const perfil = {
    nombre: "Víctor",
    contacto: {
        telefono:666555777,
        email: "victor@gmail.com"
    }
}
const emailDisponible = perfil.contacto?.email ?? "Email : no disponible";

//Acceso a prpiedad que existe
console.log (`Teléfono: ${perfil.contacto.telefono}`)
//Acceso a propiedad que no existr
console.log(`Email: ${perfil.contacto?.email}`);


console.log(emailDisponible)