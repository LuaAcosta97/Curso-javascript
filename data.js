// let carrito = [];

// export const arrayProductos = [
//   {
//     name: "Vestido",
//     price: 10500,
//     stock: 5,
//     description: "floreado amarillo",
//     talle: "Talle: 1",
//     category: "verano",
//     categoryId: 1,
//     id: 1,
//   },
//   {
//     name: "Sandalias de verano",
//     price: 24200,
//     stock: 4,
//     talle: "Talle 2",
//     category: "verano",
//     categoryId: 1,
//     id: 2,
//   },
//   {
//     name: "Remera musculosa",
//     price: 3800,
//     stock: 5,
//     description: "azul con volados",
//     talle: "Talle: 2",
//     category: "verano",
//     categoryId: 1,
//     id: 3,
//   },
//   {
//     name: "Short tipo pollera ",
//     price: 6400,
//     stock: 5,
//     description: "color nude",
//     talle: "Talle: 3",
//     category: "verano",
//     categoryId: 1,
//     id: 4,
//   },
//   {
//     name: "Pantalon ancho",
//     price: 12500,
//     stock: 4,
//     description: "Furor de colores",
//     talle: "Unico",
//     category: "otoño",
//     categoryId: 2,
//     id: 6,
//   },
//   {
//     name: "Bikini metalizado ",
//     price: 4900,
//     stock: 8,
//     description: "azul metalizado",
//     talle: "Talle: 2",
//     category: "verano",
//     categoryId: 1,
//     id: 7,
//   },
//   {
//     name: "Vestido enterizo transparente ",
//     price: 6600,
//     stock: 8,
//     description: "blanca con volados",
//     talle: "Talle: 2",
//     category: "verano",
//     categoryId: 1,
//     id: 8,
//   },
//   {
//     name: "Falda de satin",
//     price: 6900,
//     stock: 3,
//     description: "blanca y beige con volados",
//     talle: "Talle: 2",
//     category: "otoño",
//     categoryId: 2,
//     id: 9,
//   },
//   {
//     name: "falda entablada",
//     price: 6900,
//     stock: 8,
//     description: "cuadros azules, gris y blanco",
//     talle: "Talle: 1",
//     category: "otoño",
//     categoryId: 2,
//     id: 10,
//   },
// ];

// export function productSelectionFlow() {
//   // PASO 6: creamos variable bandera(varible boleano para definir si un proceso inicia o no),
//   //  para definir si el usuario quiere seguir comprando o no.
//   let stopShopping = false;
// // PASO 7:  Iniciamos ciclo while, para mostrar la categoria y el catalogo de productos.
// // El ciclo se detendra cuando el usuario quiera dejar de comprar.
//   while (!stopShopping) {
//     let userChoice = prompt(`
//   Elige una categoria para ver los productos disponibles:
//     1. Verano
//     2. Otoño
//   `);
// // PASO 8: llamamos a la funcion para mostrar el catalogo de productos dependiendo la categoria elegida.
//     showPromptProducts(userChoice);

//     let keepShopping = keepShoppingQuestion();
//     if (keepShopping === "2") {
//       stopShopping = true;
//     }
//   }
// }
// export function showPromptProducts(category) {
//   // PASO 9: con la categoria que recibimos por parametros, llamamos a la funcion que filtra los productos por categoria,
//   // y guardamos el resultado en la variable categoryArray.
//   let categoryArray = filterByCategory(category);
// // PASO 11: LLamamos a la funcion que arma el pront de catalogo, pasando como parametro 
// // los productos filtrados por categoria, usamos el stringresultado de esta funcion para mostrar el prompt
//   let selectedProductId = prompt(armarMensajeParaPromptCatalogo(categoryArray));
// // 
//   agregarAlCarrito(selectedProductId);
//   console.log(carrito)
// }



// function armarMensajeParaPromptCatalogo(array) {
//   let stringCatalogoAutomatico = `Elija el producto que desea comprar, escriba el numero correspondiente:
//   `;
//   // i= iterador
//   for (let i = 0; i < array.length; i++) {
//     stringCatalogoAutomatico =
//       stringCatalogoAutomatico +
//       `${array[i].id}. ${array[i].name} - Precio: $${array[i].price} \n`;
//   }
//   return stringCatalogoAutomatico;
// }


// export function keepShoppingQuestion() {
//   let keepShopping = prompt(`
//   Producto agregado al carrito.

//   ¿Desea continuar comprando?
//     1. Si
//     2. No
//   `);
//   return keepShopping;
// }

// // Asi es el filtrado por categoria
// export function filterByCategory(category) {
//   // PASO 10: REcibimos una categoria por parametros y usamos el metodo de aray filter 
//   // para separar los productos de la categoria elegida. Guardamos el resultado de filter en una variable(filteredProducts).
//   // devolvemos la variable con los productos filtrados
//   let filteredProducts = arrayProductos.filter(
//     (item) => item.categoryId === Number(category)
//   );
//   return filteredProducts;
// }

// export function calculateMediodepago(medioDePago, precioTotal) {
// let mediodepagoResult 

//   switch (medioDePago) {
//     case "1":
//       let cuotasSinInteres = precioTotal / 3;
//       mediodepagoResult = `
//           Felicitaciones, tu compra esta completa
//           Vas a pagar tu compra en 3 cuotas sin interés de $ ${cuotasSinInteres} cada una.
//         `;
//       break;

//     case "2":
//       let cuotasConInteres = (precioTotal * 1.5) / 6;
//       mediodepagoResult = `
//           Felicitaciones, tu compra esta completa
//           Vas a pagar tu compra en 6 cuotas conn interés de $ ${cuotasConInteres} cada una.
//         `;
//       break;

//     case "3":
//       let precioAlContadoConDescuento = precioTotal * 0.8;
//       mediodepagoResult = `
//           Felicitaciones, tu compra esta completa
//           Vas a pagar tu compra en efectivo con 20% de decuento, el total es: $ ${precioAlContadoConDescuento}.
//         `;
//       break;

//     default:
//       alert(`Error al calcular el pago`);
//       break;
//   }
// return mediodepagoResult;
// }

// function buscarProducto(id) {
//   let producto = arrayProductos.find((item) => item.id === Number(id));
//   console.log(producto)
//   return producto;
// }


// function agregarAlCarrito(id) {
//   carrito.push(buscarProducto(id));
// }


// export function calculateTotalPrice () {
// let totalPrice = 0;
// console.log(carrito);
// for (let i = 0; i < carrito.length; i++){
//   totalPrice = totalPrice + carrito[i].price;
// }

// return totalPrice;
// }