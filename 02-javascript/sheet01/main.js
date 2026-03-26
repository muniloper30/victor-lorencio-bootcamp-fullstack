// Ejercicio 1. Ficha personal en consola

/** nombre;
 - Edad;
 - Ciudad;
 - Si tienes experiencia previa programando ( true o false ).
 */

const nombre = "Víctor";
const edadTotal = 33;
const ciudad = "Málaga";
const isProgrammer = true;

console.log(
  `Hola, me llamo ${nombre}, tengo ${edadTotal} años, vivo en ${ciudad} y mi experiencia previa en programación es: ${isProgrammer}`,
);

// Ejercicio 2. Ejercicio 2. Comprobación de tipos
// Declara al menos cinco variables de tipos distintos y muestra en consola:

const string = "palabra";
const number = 33;
const boolean = true;
let noDefinida;
let nulo = null; // (object)

console.log(
  typeof string,
  typeof number,
  typeof boolean,
  typeof noDefinida,
  typeof nulo,
);

// Ejercicio 3. Conversión y coerción

/**Crea variables así 
 * "25"
 * "100.5"
 * "hola" 
 * true

Haz pruebas con Number() y muestra el resultado de cada conversión por consola.
Después, observa la salida y responde en comentarios dentro del código o en un pequeño
texto aparte:

*/

const numero = "25"; //number
const decimal = "100.5"; //number
const saludo = "hola"; //valor NaN
const isTrue = true; // 1

console.log(Number(numero), Number(decimal), Number(saludo), Number(isTrue));

/**

Bloque 2. Operadores y comparaciones


Ejercicio 4. Calculadora de compra simple
Declara variables para representar:
- nombre de producto;
- precio unitario;
- cantidad;
- coste de envío.

Calcula y muestra:

- subtotal;
- total final;
- un mensaje resumen de la compra.

Ejemplo orientativo
Has comprado 3 unidades de “Cuaderno”. Subtotal: 12 €. Envío: 4 €. Total: 16 €.

 */

const producto = "Cuaderno";
const precioUnitario = "4";
const costeEnvio = 4;
let cantidad = 3;

const subtotal = precioUnitario * cantidad;
const total = subtotal + costeEnvio;

const resume = `Has comprado ${cantidad} unidades de "${producto}"
    
Subtotal: ${subtotal}   
Envío: ${costeEnvio}
Total: ${total}`;
console.log(resume);

/**
Ejercicio 5. Calculadora de compra simple
Declara variables con distintos valores y muestra por consola el resultado de varias
comparaciones usando:
>
<
>=
<=
===
!==
 */

const numero1 = 1;
const numero2 = 1;

console.log("El numero 1 es igual al número 2 :", numero1 === numero2);

const numeroGrande = 10;
const numeroChico = -10;

console.log("El número mayor es el número Grande:", numeroGrande > numeroChico);

const miNumero = 2;
const nombreDePila = "Víctor";

console.log(miNumero === nombreDePila);

/**
Ejercicio 6. Ejercicio 6. Mayor de edad o menor de edad
Declara variables con distintos valores y muestra por consola el resultado de varias
comparaciones usando:

si tiene 18 o más: acceso permitido;
si tiene menos de 18: acceso denegado.

Declara una variable edad y muestra un mensaje distinto según corresponda:

Después amplía el ejercicio añadiendo un segundo dato:
si además tiene autorización especial ( true o false ).


 */

const edad = 17;
const autorizacion = false;

if (edad >= 18 || autorizacion == true) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

/**
Ejercicio 7. Estado de stock
Declara variables para representar:
- nombre de producto
- cantidad disponible

*Muestra un mensaje distinto según el stock *
0 → “agotado”;
entre 1 y 5 → “quedan pocas unidades”;
más de 5 → “disponible”.

 */

const nombreProducto = "Adizero boston 13";
const cantidadProducto = 6;

if (cantidadProducto === 0) {
  console.log(`Producto agotado
    Unidades de ${nombreProducto}: ${cantidadProducto}`);
} else if (cantidadProducto > 0 && cantidadProducto <= 5) {
  console.log(`Quedan pocas unidades
        Unidades de ${nombreProducto}: ${cantidadProducto}`);
} else {
  console.log(`Producto disponible
        Unidades de ${nombreProducto}: ${cantidadProducto}`);
}


/**
Ejercicio 8. Descuento por cupón
Simula una compra con estas variables:
- precio base;
- si el cliente tiene cupón;
- si es cliente premium.

Aplica esta lógica:
si tiene cupón, descuento de 10 €;
si no tiene cupón pero es premium, descuento de 5 €;
si no cumple ninguna condición, no hay descuento.

Muestra:
precio base;
descuento aplicado;
precio final.
 */


const precioBase = 129.99
const tieneCupon = true
const clientePremium = true

let descuento = 0

if (tieneCupon){
    descuento = 10
    console.log("Se le aplica un descuento de " + descuento + "€")
} else if (clientePremium) {
    descuento  = 5
    console.log("Por ser cliente premium tiene un descuento de " + descuento + "€")
} else {
    console.log("No dispone de ningun descuento")
}

const precioTotal = precioBase - descuento

console.log(`Descuento aplicado: ${descuento} €
   Precio total del producto: ${precioTotal.toFixed(2)} `)

