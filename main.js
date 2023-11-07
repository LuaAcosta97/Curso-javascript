import {productSelectionFlow, keepShoppingQuestion, showPromptProducts, filterByCategory , arrayProductos , calculateTotalPrice, calculateMediodepago} from "./data.js";

let promptResult;

let precioTotal = 0;

let mediodepagoResult = ''

let chosenCategory;


// Comienzo del algoritmo
// PASO 1: Le pedimos el nombre al usuario
let IngreseNombre = prompt("Hola, Cual es tu nombre?");
// PASO2: mostramos un alert con la bienvenida al usuario
alert("Bienvenido/a " + IngreseNombre);
// PASO 3:Le preguntamos al usuario que quiere hacer en la pagina.
promptResult = prompt(`
  Que se te ofrece? 
    1. Ver nuestros productos. 
    2. Contactarnos. 
    3. Salir. 
    - Seleccion (num)...
    `);

switch (promptResult) {
  // PASO 4: Dependiendo de la respuesta del usuario, le vamos a mostrar cualquiera de los casos.
  case "1":
    // PASO 5: Llamamos a la funcion que inicie el flujo de seleccion de productos
    productSelectionFlow()
    break;

  case "2":
    alert(`Comunicate al -54 11-0230-9045`);
    break;

  case "3":
    alert(`GRACIAS POR TU VISITA, ESPERAMOS VERTE PRONTO!!!`);
    break;

  default:
    alert(`Elija una opcion (num)...`);
    break;
};


console.log("Total actualizado: $" + precioTotal);

precioTotal = calculateTotalPrice();

let MediodePago = prompt(`
  El total de tu carrito es: $ ${precioTotal}
  
  Elegí como pagar tu compra:
    1. Tarjeta de credito - 3 cuotas sin interés
    2. Tarjeta de credito - 6 cuotas con interés(50% de interés)
    3. Efectivo - 20% de descuento
`);

console.log("Medio de pago elegido: " + MediodePago);

mediodepagoResult = calculateMediodepago(MediodePago, precioTotal);

alert(mediodepagoResult)
