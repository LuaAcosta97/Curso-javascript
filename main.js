import { mostrarPromptCategory, filterByCategory , arrayProductos , calculateMediodepago} from "./data";

let promptResult;

let precioTotal = 0;

let mediodepagoResult = ''


// Comienzo del algoritmo

let IngreseNombre = prompt("Hola, Cual es tu nombre?");
alert("Bienvenido/a " + IngreseNombre);

promptResult = prompt(`
  Que se te ofrece? 
    1. Ver nuestros productos. 
    2. Contactarnos. 
    3. Salir. 
    - Seleccion (num)...
    `);

switch (promptResult) {
  case "1":
    mostrarPromptCategory()
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

let MediodePago = prompt(`
  El total de tu carrito es: $ ${precioTotal}
  
  Elegí como pagar tu compra:
    1. Tarjeta de credito - 3 cuotas sin interés
    2. Tarjeta de credito - 6 cuotas con interés(50% de interés)
    3. Efectivo - 20% de descuento
`);

console.log("Medio de pago elegido: " + MediodePago);

calculateMediodepago(MediodePago);

alert(mediodepagoResult)
