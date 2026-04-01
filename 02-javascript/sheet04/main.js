// 1, 3, 5, 7, 9, 12, 15 y 18.

//Ejercicio Nº1 Bloque 1. Reconocer la intención del método
//Ejercicio 1. ¿Qué método usarías?
/** Para cada caso, indica qué método de array te parece más adecuado y explica brevemente por
qué:

1. obtener solo los productos disponibles;
Para este primer caso usaría el método .filter(), de esta manera
seleccionaría y crearía un nuevo array unicamente con los productos disponibles de una lista.

2. convertir una lista de usuarios en una lista de nombres;
Para este caso usaría el método .map() ya que este método no modifica el array original de usuarios
,generaria otra coleción con los nombres de los usuarios.

3. saber si existe algún alumno suspendido;
Para este caso también podría usar el método filter(), filtrando solo aquellos que tienen una nota que 
equivale al suspenso, pero podriamos usar el método some() que comprueba si almenos algun elemento cumple
esa condición y por lo tanto ya verificamos si existe algún alumno suspendido

4. comprobar si todas las tareas están completadas;
Para este caso podríamos usar el metodo every() que comprueba si todos los elementos, en este caso las tareas
cumplen una condición, que sería la de estar completadas, en este caso nos devuelve true or false 

5. encontrar un producto por su id ;
Para este caso podríamos usar el método find() o filter(), lo que find es mas apropiado para buscar un único elemento
que cumpla una condición.

6. sumar el precio total de una cesta;
Para este caso usariamos el método reduce() que recorrerá todos los precios de una cesta y acumulará el resultado total

7. recorrer una lista para mostrar mensajes por consola.
Para este caso podriamos usar un forEach() o un for of con el primero lo hacemos de manera más declarativa, con for of 
lo podriamos indicar de una manera más clara.
*/

// Ejercicio 3. Transformar con map()
/** Crea un array de números.
 * Tareas
 * genera un nuevo array con todos los números duplicados;
 * genera otro con todos los números elevados al cuadrado;
 * muestra el array original y los arrays transformados.
 * 
 * No modifiques el array original.
  Haz cada transformación en una variable distinta.
 */

const miArrayNum = [2, 2, 45, 23, 8, 8, 95, 3, 33, 45];

//Sacar números duplicados
const duplicados = miArrayNum.filter(
  (numDuplicado, index) => miArrayNum.indexOf(numDuplicado) !== index,
);
console.log(duplicados); //Los números duplicados son el 2, 8 y 45

//Sacar array con los números elevados al cuadrado
const cuadrados = miArrayNum.map((numCuadrado) => numCuadrado ** 2);
console.log(cuadrados);

//Array original
console.log(miArrayNum);

//Ejercicio 5. Filtrar con filter()
/** Crea un array de números
 * Tareas:
 * obtén un nuevo array con los números pares;
 * obtén otro con los números mayores que un valor que elijas;
 * muestra ambos resultados. */

const numeros = [3, 45, 6675, 8, 998, 64, 4, 3, 1300, 425];
//Mostrar números pares
const pares = numeros.filter((numPar) => numPar % 2 === 0);
console.log(pares);
//Mostrar números mayores que 300
const mayoresQue = numeros.filter((numMayor) => numMayor > 300);
console.log(mayoresQue);
//Mostrar números mayores que 300 y que sean pares
const paresMayores = numeros.filter(
  (parMayor) => parMayor % 2 === 0 && parMayor > 300,
);
console.log(paresMayores);

//Ejercicio 7. Buscar un elemento con find()
/** Crea un array de productos con al menos estas propiedades:
 * id
 * nombre
 * precio
 *
 * Tareas:
 * busca un producto concreto por id ;
 * muestra el resultado;
 * comprueba qué ocurre si buscas un id que no existe.
 */

const productos = [
  {
    id: 1,
    nombre: "Queso cheddar",
    precio: 2.55,
  },
  {
    id: 2,
    nombre: "Gñoquis",
    precio: 0.9,
  },
  {
    id: 3,
    nombre: "Jamón Serrano",
    precio: 4.02,
  },
];

//Buscar producto por id
const producto = productos.find((item) => item.id === 3);
console.log(producto);
//Comprobamos si un producto por id no existe
const producto2 =
  productos.find((item) => item.id === 4) ?? "Producto no encontrado";
console.log(producto2); //Undefined se evalua la condicion y como no se encuentra manda el mensaje Producto no encontrado

//Ejercicio 9. Comprobar estado de una colección
/** Crea un array de usuarios con estas propiedades:
 * nombre
 * activo
 Tareas 
- comprueba si hay al menos un usuario inactivo;
- comprueba si todos están activos;
- muestra mensajes claros según los resultados.
 */

const usuarios = [
  {
    nombre: "Víctor",
    activo: true,
  },
  {
    nombre: "Fran",
    activo: false,
  },
  {
    nombre: "Ramón",
    activo: true,
  },
  {
    nombre: "Daniel",
    activo: false,
  },
];

//Comprobación de si al menos existe algún usuario activo
const usuariosActivos = usuarios.some((user) => user.activo === true);
console.log(`¿ Existe al menos algún usuario activo ? -> ${usuariosActivos}`);
//Comprobación de si todos estan activos
const isAllActives = usuarios.every((user) =>
  user.activo === true
    ? "Todos los usuarios están activos"
    : "Al menos un usuario está inactivo",
);
console.log(isAllActives);

const estanTodosActivos = isAllActives;
const mensaje = estanTodosActivos
  ? "Todos los usuarios están activos"
  : "Al menos un usuario está inactivo";

console.log(mensaje);

//Ejercicio 12. Contar elementos por criterio
/** Crea un array de notas o tareas.
     * Tareas
     * usa reduce() para contar cuántos elementos cumplen una condición;
por ejemplo:
cuántas notas están aprobadas;
cuántas tareas están completadas.
     */

const tareas = [
  {
    id: 1,
    titulo: "Configurar Stylelint",
    descripcion:
      "Instalar y configurar el plugin de ordenación de propiedades CSS.",
    completada: true,
    aprobada: false
  },
  {
    id: 2,
    titulo: "Lógica de Stock",
    descripcion:
      "Implementar validaciones de cantidad (agotado, pocas unidades, disponible).",
    completada: true,
    aprobada: true
  },
  {
    id: 3,
    titulo: "Refactorizar Pokémon",
    descripcion:
      "Aplicar operadores ternarios y limpiar el código de las cartas.",
    completada: false,
    aprobada: ""
  },
  {
    id: 4,
    titulo: "Validar Usuarios",
    descripcion:
      "Usar los métodos .every() y .some() para comprobar estados de cuenta.",
    completada: false,
    aprobada: ""
  },
];

const recuentoCompletadas = tareas.reduce((acumulador, tarea) => {
    return acumulador + tarea.completada
}, 0)

const recuentoAprobadas = tareas.reduce((acumulador, tarea) => {
    return acumulador + tarea.aprobada
}, 0)

console.log(`Tareas completadas: ${recuentoCompletadas}`)
console.log(`Tareas aprobadas: ${recuentoAprobadas}`)

// Ejercicio 15. Eliminar duplicados con Set
/** Crea un array con valores repetidos. Puede ser de:
 * números;
 * cadenas;
 * tipos;
 * etiquetas;
 * nombres de categorías.
 * Tareas
- elimina los duplicados usando Set ;
- muestra el array original y el resultado final;
- explica con una frase qué ventaja tiene esta estrategia.
 */

const tipos = [
  "Fuego",
  "Agua",
  "Planta",
  "Fuego", 
  "Eléctrico",
  "Agua" ,
];

const sinDuplicados = [...new Set(tipos)] //Se crea un nuevo array sin duplicados.
console.log(tipos)
console.log(sinDuplicados) // Array sin duplicados

//Ejercicio 18. Función pura frente a función no pura
/** Crea dos versiones de una misma lógica sencilla, por ejemplo:
 * una que añada un valor a un array;
 * otra que calcule un descuento;
 * otra que modifique el nombre de un producto.
 */

//Función pura que incluye un valor a un array
function addItem (arrayList, valor) {
    return [...arrayList , valor]
}

const nombres = ["Víctor", "Patri", "Adri", "Laura"]
const misNombres = addItem(nombres, "Vazquez")

console.log(nombres)
console.log(misNombres)

//Función pura para calcular un descuento
const calcularDescuento = (precio, porcentaje) => {
  return precio - (precio * porcentaje / 100);
};

const precioFinal = calcularDescuento(100, 20); 
console.log(precioFinal);
