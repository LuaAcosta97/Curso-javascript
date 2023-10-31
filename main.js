// import { filterByCategory , narrayProductos , calculateMediodepago} from "./data";

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
    alert(`Podras ver nuestros productos`);
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
}


let productList = prompt(`
    Elegi el producto que te interese:
      1. Vestido floreado amarillo - Precio: $10500
      2. Remera musculosa azul con volados - Precio: $4200
      3. Sandalias de verano - Precio: $18700
      - Seleccion (num)...
   `);

switch (productList) {
  case "1":
    console.log("vestido agregado al carrito");
    precioTotal = precioTotal + 10500;
    break;

  case "2":
    console.log("remera agregada al carrito");
    precioTotal = precioTotal + 4200;
    break;

  case "3":
    console.log("sandalias agregadas al carrito");
    precioTotal = precioTotal + 18700;
    break;

  default:
    console.log("La opcion seleccionada no es valida");
    break;
}

console.log("Total actualizado: $" + precioTotal);

let productList2 = prompt(`
    El total de tu carrito hasta ahora es: $${precioTotal}

    Elegi el producto que te interese:
      1. Falda blanca con volados - Precio: $4599
      2. Pantalon ancho de verano - Precio: $8999
      3. Short tipo pollera color nude - Precio: $6700
      - Seleccion (num)...
   `);

switch (productList2) {
  case "1":
    console.log("falda agregada al carrito");
    precioTotal = precioTotal + 4599;
    break;

  case "2":
    console.log("pantalon agregado al carrito");
    precioTotal = precioTotal + 8999;
    break;

  case "3":
    console.log("short agregado al carrito");
    precioTotal = precioTotal + 6700;
    break;

  default:
    console.log("La opcion seleccionada no es valida");
    break;
}

console.log("Total actualizado: $" + precioTotal);

let productList3 = prompt(`
    El total de tu carrito hasta ahora es: $${precioTotal}

    Elegi el producto que te interese:
      1. Sombrero Capelina de Rafia - Precio: $3999
      2. Bikini azul metalizado - Precio: $5200
      3. Vestido enterizo transparente - Precio: $7000
      Elije una opcion (num)...
   `);

switch (productList3) {
  case "1":
    console.log("sombrero agregado al carrito");
    precioTotal = precioTotal + 3999;
    break;

  case "2":
    console.log("bikini agregada al carrito");
    precioTotal = precioTotal + 4200;
    break;

  case "3":
    console.log("vestido agregadp al carrito");
    precioTotal = precioTotal + 7000;
    break;

  default:
    console.log("La opcion seleccionada no es valida");
    break;
}

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
