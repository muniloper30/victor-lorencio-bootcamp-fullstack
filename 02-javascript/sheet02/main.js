// Bloque 1. Bucles básicos

/** Ejercicio 1. Contador ascendente
 * Escribe un programa que muestre por consola los números del 1 al 10.
 * Haz una versión con for .
Haz otra versión con while .
 */

//Bucle for
for (let contador = 1; contador <= 10; contador++) {
  console.log(`El valor actual es: ${contador}`);
}
//Bucle while
let contadorNumeros = 0;

while (contadorNumeros < 10) {
  contadorNumeros++;
  console.log(`El valor actual de contador es: ${contadorNumeros}`);
}

//Ejercicio 2. Contador descendente

/**Escribe un programa que muestre por consola los números del 10 al 1 en orden descendente.
 */

let contadorDecremento = 11;

while (contadorDecremento > 1) {
  contadorDecremento--;
  console.log(`Cuenta atrás en ... ${contadorDecremento}`);
}

//Ejercicio 3. Mostrar solo números pares
//Muestra por consola todos los números pares del 0 al 20.

//Con while
let numeroPar = 0;

while (numeroPar <= 20) {
  console.log(`Los números par son: ${numeroPar}`);
  numeroPar += 2;
}
//Con for
for (let i = 0; i <= 20; i += 2) {
  console.log(`Los números pares de nuevo son: ${i}`);
}

//Ejercicio 4. Tabla de multiplicar
/** Pide en el código una variable numero y muestra su tabla de multiplicar del 1 al 10. Lo dejo a
tu elección: puedes pedirlo o directamente declararlo tú en el código. 
*/

let numero = 4;

for (let i = 0; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`Tabla de multiplicar de ${numero}:
        ${numero} * ${i} = ${resultado}`);
}

//Ejercicio 5. Ejercicio 5. Función de saludo reutilizable
/** Crea una función llamada saludar que reciba un nombre y muestre un mensaje de saludo en
consola. 
*/

function saludar(nombre = "Invitado") {
  console.log("Hola ", nombre);
}

saludar("Laura");
saludar("Víctor");
console.log("----");
saludar(); // Uso de valor por defecto

//Ejercicio 6. Función que calcula y devuelve

/** Crea una función llamada sumar que reciba dos números y devuelva el resultado de la suma.
 * Después:
- guarda el resultado en una variable;
- muéstralo por consola;
- úsalo dentro de otra operación.
 */

const sumar = (a, b) => {
  const resultadoTotal = a + b;
  return resultadoTotal;
};

console.log(`El resultado es`, sumar(3, 3));

//Ejercicio 7. Función para saber si un número es par
/** Crea una función llamada esPar que reciba un número y devuelva true o false según
corresponda. */

const esPar = (numeroIsPar) => {
  if (numeroIsPar % 2 === 0) {
    console.log(`El número ${numeroIsPar} es par`);
    return true;
  } else return false;
};
console.log(esPar(8));

//Otra opción

console.log("-------");

const esPar2 = (n) => n % 2 === 0;
console.log(esPar2(8)); // true

//Ejercicio 8. Repetir un mensaje varias veces
/** Crea una función llamada repetirMensaje que reciba:
un texto;
un número de repeticiones.

Ejemplo orientativo
repetirMensaje("Hola"

, 3) debería mostrar:

Hola
Hola
Hola

 */

const repetirMensaje = (mensaje, repeticiones) => {
  for (let i = 0; i < repeticiones; i++) {
    console.log(mensaje);
  }
};

repetirMensaje("Hola capullo", 3);

//Ejercicio 9. Suma de los primeros N números

/** Crea una función llamada sumarHasta que reciba un número y devuelva la suma de todos los
enteros desde 1 hasta ese número. */

const sumarHasta = (n) => {
  contador = 0;
  for (let i = 0; i <= n; i++) {
    contador += i;
  }
  return contador;
};

console.log(sumarHasta(5));

console.log("----");

//Ejercicio 10. Mostrar una secuencia personalizada

/** Crea una función llamada mostrarRango que reciba dos números: inicio y fin .
Debe mostrar todos los valores entre ambos, incluidos.

mostrarRango(3, 7) debería mostrar:
3
4
5
6
7
*/

console.log("Mostrar rango 1");
//Con bucle while
const mostrarRango = (x, y) => {
  while (x <= y) {
    console.log(x);
    x++;
  }
};

mostrarRango(4, 7);

console.log("--------");

// Con bucle for
console.log("Mostrar rango 2");
const mostrarRango2 = (inicio, fin) => {
  for (let i = inicio; i <= fin; i++) {
    console.log(i);
  }
};

mostrarRango2(5, 10);

//Ejercicio 11. Detectar ámbitos
//Copia este código, ejecútalo y analiza qué ocurre:

const curso = "JavaScript";
function mostrarCurso() {
  const mensaje = `Estás en el curso de ${curso}`;

  console.log(mensaje);
}
mostrarCurso();
// console.log(mensaje);

//Ejercicio 12. Reescribe una solución poco clara
/** let x = 0;
for (let i = 1; i <= 5; i++) {
x = x + i;
}
console.log(x); */

const sumarHastaLimite = (limite) => {
  let sumaAcumulada = 0;

  for (let numeroActual = 1; numeroActual <= limite; numeroActual++) {
    sumaAcumulada += numeroActual;
  }

  return sumaAcumulada;
};

console.log(sumarHastaLimite(5));

//Ejercicio 14. Callback sencillo

/** 
 * Crea una función llamada procesarNumero que reciba:
 * un número;
una función callback.
La función debe ejecutar el callback pasándole el número recibido.
Prueba después con callbacks que :
muestren el doble;
muestren el triple;
indiquen si el número es positivo o negativo.
 *  */

console.log("----");

console.log("PROCESAR NÚMERO CON CALLBACK");
const procesarNumero = (num, callback) => callback(num);
procesarNumero(5, (n) => console.log(`El número procesado es ${n}`));

console.log("DOBLE DEL NÚMERO");

procesarNumero(5, (n) => console.log(`El doble del número ${n} es : ${n * 2}`));
console.log("TRIPLE DEL NÚMERO");

procesarNumero(5, (n) =>
  console.log(`El triple del número ${n} es : ${n * 3}`),
);

console.log("----");

console.log(`PROCESAR NÚMERO (NEGATIVO7 POSITIVO)`);

procesarNumero(-55, (n) => {
  if (n > 0) {
    console.log(`El número procesado -> ${n} es : Positivo`);
  } else console.log(`El número procesado -> ${n} es: negativo`);
});

//Ejercicio 15. Callback con operación configurable

/** 
 * Crea una función llamada aplicarOperacion que reciba:
 * dos números;
una función callback que represente una operación.
Prueba a pasar callbacks para:
sumar;
restar;
multiplicar. */

//CALLBACK PARA PROCESAR OPERACIONES
const aplicarOperacion = (num1, num2, callback) => callback(num1, num2);

console.log("SUMA CON CALLBACK");
const suma = aplicarOperacion(5, 5, (num1, num2) => num1 + num2);
console.log(suma);

console.log("RESTA CON CALLBACK");
const resta = aplicarOperacion(10, 5, (num1, num2) => num1 - num2);
console.log(resta);
console.log("MULTIPLICACIÓN CON CALLBACK");
const multiplicacion = aplicarOperacion(5, 5, (num1, num2) => num1 * num2);
console.log(multiplicacion);
 

//Ejercicio 16. Contador simple con closure

/** Crea una función llamada crearContador que devuelva otra función.
Cada vez que invoques la función devuelta, el contador debe incrementarse en una unidad. */

console.log("CREAR CONTADOR CON FUNCIÓN DESDE FUNCIÓN (CLOSURE)")

const crearContador = () => {
  let contador = 0;
  return () => {
    contador++;
    return contador;
  };
};

const superContador = crearContador();

console.log(superContador());
console.log(superContador());
console.log(superContador());
console.log(superContador());

//Ejercicio 17. Contador con valor inicial
//Amplía el ejercicio anterior para que crearContador reciba un valor inicial.
console.log("----")

console.log("CREAR CONTADOR CON FUNCIÓN DESDE FUNCIÓN (A PARTIR DE UN NÚMERO DADO)")

const megaContador = (num) => {
     let superContador = num
    return () => {
        superContador++
        return superContador
    }
}

const miContador = megaContador(10)
console.log(miContador())
console.log(miContador())
console.log(miContador())
console.log(miContador())


// Bloque 7. Ejercicio integrador de sesión
// Ejercicio 18. Generador de turnos de práctica

//Función validadora 
//Función para comprobar si no es un número o es menor que 0, no permite el acceso
const esValido = (participantes) => {
    return typeof participantes === 'number' && participantes > 0;
};

const generarTextoTurno = (numeroTurno, mensajeBase) => {
    return `Turno ${numeroTurno}: ${mensajeBase}`;
};

const organizarTurnos = (totalParticipantes, mensajeBase, callback) => {
    // 1. Validar
    if (!esValido(totalParticipantes)) {
        console.error("Número de participantes no válido.");
        return;
    }

    // 2. Recorrer todos los turnos
    for (let i = 1; i <= totalParticipantes; i++) {
        // 3. Generar el texto
        const texto = generarTextoTurno(i, mensajeBase);
        // 4 y 5. Pasar el texto al callback
        callback(texto);
    }
};


// Callback con mayúsculas
const mostrarEnMayusculas = (texto) => console.log(texto.toUpperCase());


// Test
console.log("PRUEBA 1 ")
organizarTurnos(3, "comienza la práctica", mostrarEnMayusculas);
console.log("------------")
organizarTurnos(4, "comienza la práctica", mostrarEnMayusculas);
console.log("------------")
organizarTurnos(5, "comienza la práctica", mostrarEnMayusculas);

