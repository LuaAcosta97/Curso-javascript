let carrito = [];

export const arrayProductos = [
  {
    name: "Vestido",
    price: 10500,
    stock: 5,
    description: "floreado amarillo",
    talle: "Talle: 1",
    category: "verano",
    categoryId: 1,
    id: 1,
  },
  {
    name: "Sandalias de verano",
    price: 24200,
    stock: 4,
    talle: "Talle 2",
    category: "verano",
    categoryId: 1,
    id: 2,
  },
  {
    name: "Remera musculosa",
    price: 800,
    stock: 5,
    description: "azul con volados",
    talle: "Talle: 2",
    category: "verano",
    categoryId: 1,
    id: 3,
  },
  {
    name: "Short tipo pollera color nude",
    price: 400,
    stock: 5,
    description: "Calcetines de lana",
    talle: "Talle: 3",
    category: "verano",
    categoryId: 1,
    id: 4,
  },
  {
    name: "Pantalon ancho",
    price: 700,
    stock: 4,
    description: "Furore de colores",
    talle: "Unico",
    category: "otoño",
    categoryId: 2,
    id: 6,
  },
  {
    name: "Bikini azul metalizado ",
    price: 800,
    stock: 8,
    description: "blanca con volados",
    talle: "Talle: 3",
    category: "verano",
    categoryId: 1,
    id: 7,
  },
  {
    name: "Vestido enterizo transparente ",
    price: 800,
    stock: 8,
    description: "blanca con volados",
    talle: "Talle: 3",
    category: "verano",
    categoryId: 1,
    id: 8,
  },
  {
    name: "Falda de satin",
    price: 6900,
    stock: 3,
    description: "blanca y beige con volados",
    talle: "Talle: 3",
    category: "otoño",
    categoryId: 2,
    id: 9,
  },
  {
    name: "falda entablada",
    price: 6900,
    stock: 8,
    description: "cuadros azules, gris y blanco",
    talle: "Talle: 3",
    category: "otoño",
    categoryId: 2,
    id: 10,
  },
];

export function productSelectionFlow() {
  let stopShopping = false;

  while (!stopShopping) {
    let userChoice = prompt(`
  Elige una categoria para ver los productos disponibles:
    1. Verano
    2. Otoño
  `);

    showPromptProducts(userChoice);

    let keepShopping = keepShoppingQuestion();
    if (keepShopping === "2") {
      stopShopping = true;
    }
  }
}

function armarMensajeParaPromptCatalogo(array) {
  let stringCatalogoAutomatico = `Elija el producto que desea comprar, escriba el numero correspondiente:
  `;
  // i= iterador
  for (let i = 0; i < array.length; i++) {
    stringCatalogoAutomatico =
      stringCatalogoAutomatico +
      `${array[i].id}. ${array[i].name} - Precio: $${array[i].price} \n`;
  }
  return stringCatalogoAutomatico;
}

export function showPromptProducts(category) {
  let categoryArray = filterByCategory(category);
  console.log({ categoryArray })

  let selectedProductId = prompt(armarMensajeParaPromptCatalogo(categoryArray));

  agregarAlCarrito(selectedProductId);
}

export function keepShoppingQuestion() {
  let keepShopping = prompt(`
  Producto agregado al carrito.

  ¿Desea continuar comprando?
    1. Si
    2. No
  `);
  return keepShopping;
}

// Asi es el filtrado por categoria
export function filterByCategory(category) {
  let filteredProducts = arrayProductos.filter(
    (item) => item.categoryId === Number(category)
  );
  return filteredProducts;
}

export function calculateMediodepago(medioDePago) {
  switch (medioDePago) {
    case "1":
      let cuotasSinInteres = precioTotal / 3;
      mediodepagoResult = `
          Felicitaciones, tu compra esta completa
          Vas a pagar tu compra en 3 cuotas sin interés de $ ${cuotasSinInteres} cada una.
        `;
      break;

    case "2":
      let cuotasConInteres = (precioTotal * 1.5) / 6;
      mediodepagoResult = `
          Felicitaciones, tu compra esta completa
          Vas a pagar tu compra en 6 cuotas conn interés de $ ${cuotasConInteres} cada una.
        `;
      break;

    case "3":
      let precioAlContadoConDescuento = precioTotal * 0.8;
      mediodepagoResult = `
          Felicitaciones, tu compra esta completa
          Vas a pagar tu compra en efectivo con 20% de decuento, el total es: $ ${precioAlContadoConDescuento}.
        `;
      break;

    default:
      alert(`Error al calcular el pago`);
      break;
  }

}

function agregarAlCarrito(id) {
  carrito.push(buscarProducto(id));
}

// console.log(showPromptProducts(1))

//   let stringParaMostrarUnProducto = `${arrayProductos[3].id}. ${arrayProductos[3].name} - Precio: $${arrayProductos[3].price} \n`;

//   let stringNormal = arrayProductos[3].id + '. ' + arrayProductos[3].name + ' - Precio: $' + arrayProductos[3].price + '\n' + arrayProductos[3].id + '. ' + arrayProductos[3].name + ' - Precio: $' + arrayProductos[3].price

//   //console.log(stringNormal);

// console.log({carrito})
