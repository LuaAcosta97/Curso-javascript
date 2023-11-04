
  let carrito = [];

  export const arrayProductos = [
    {
        name: 'Vestido',
        price:10500,
        stock: 5,
        description: 'floreado amarillo',
        talle: 'Talle: 1',
        category: 'verano',   
        id: 1
    },
    {
        name: 'Sandalias de verano',
        price: 4200,
        stock: 4,
        talle: 'Talle 2',
        category: 'verano',
        id: 2
    },
    {
        name: 'Remera musculosa',
        price: 800,
        stock: 5,
        description: 'azul con volados',
        talle: 'Talle: 2',
        category: 'verano',
        id: 3
    },
    {
        name: 'Short tipo pollera color nude',
        price: 400,
        stock: 5,
        description: 'Calcetines de lana',
        talle: 'Talle: 3',
        category: 'verano',
        id: 4
    },
    
    {
        name: 'Falda entablada ',
        price: 800,
        stock: 8,
        description:'blanca y beige con volados',
        talle: 'Talle: 3',
        category: 'otoño',
        id: 6
    },
    {
        name: 'Pantalon ancho',
        price: 700,
        stock: 4,
        description: 'Furore de colores',
        talle: 'Unico',
        category: 'otoño',
        id: 10
    },  
    {
        name: 'Bikini azul metalizado ',
        price: 800,
        stock: 8,
        description:'blanca con volados',
        talle: 'Talle: 3',
        category: 'verano',
        id: 6
    },
    {   name: 'Vestido enterizo transparente ',
        price: 800,
        stock: 8,
        description:'blanca con volados',
        talle: 'Talle: 3',
        category: 'verano',
        id: 6
},
{
        name: 'falda entablada',
        price: 6900,
        stock: 8,
        description:'cuadros azules, gris y blanco',
        talle: 'Talle: 3',
        category: 'otoño',
        id: 6
    }
];

export function mostrarPromptCategory(){
  let userChoice = prompt(`
  Elige una categoria para ver los productos disponibles:
    1. Otoño
    2. Verano
  `);
  return userChoice;
}

// Asi es el filtrado por categoria
export function filterByCategory(category){
    let filteredProducts = arrayProductos.filter((item)=>item.category === category ) 
return filteredProducts
} 

  
export function calculateMediodepago(medioDePago){
    switch (medioDePago) {
      case "1":
        let cuotasSinInteres = precioTotal / 3;
        mediodepagoResult = (`
          Felicitaciones, tu compra esta completa
          Vas a pagar tu compra en 3 cuotas sin interés de $ ${cuotasSinInteres} cada una.
        `); 
        break;
    
      case "2":
        let cuotasConInteres = (precioTotal * 1.50) / 6;
        mediodepagoResult = (`
          Felicitaciones, tu compra esta completa
          Vas a pagar tu compra en 6 cuotas conn interés de $ ${cuotasConInteres} cada una.
        `);
        break;
    
      case "3":
        let precioAlContadoConDescuento =  precioTotal * 0.80 ;
        mediodepagoResult = (`
          Felicitaciones, tu compra esta completa
          Vas a pagar tu compra en efectivo con 20% de decuento, el total es: $ ${precioAlContadoConDescuento}.
        `);
        break;
    
      default:
        alert(`Error al calcular el pago`);
        break;
    }
  }

  
 function buscarProducto(id){
      let productoEncontrado = arrayProductos.find((item) => item.id == id);
  
      return productoEncontrado;
  }
  
  
 function agregarAlCarrito(id) {
      carrito.push(buscarProducto(id));
  }
  
  

  
 function armarMensajeParaPromptCatalogo(array){
  let stringCatalogoAutomatico = `Elija el producto que desea comprar, escriba el numero correspondiente:
  `
  // i= iterador 
      for (let i = 0; i < array.length; i++) {
          stringCatalogoAutomatico = stringCatalogoAutomatico + `${array[i].id}. ${array[i].name} - Precio: $${array[i].price} \n`
      }
      return stringCatalogoAutomatico
     
  }
  
  
function armarPrompt() {
  let stringNormal = " ";
}


  function mostrarPrompt(){
      for (let i = 0; i < 3; i++) {
          let userChoice = prompt(armarMensajeParaPromptCatalogo(arrayProductos));
        
          agregarAlCarrito(userChoice)
        }
  }
  
  mostrarPrompt();
  
  
//   let stringParaMostrarUnProducto = `${arrayProductos[3].id}. ${arrayProductos[3].name} - Precio: $${arrayProductos[3].price} \n`;
  
//   let stringNormal = arrayProductos[3].id + '. ' + arrayProductos[3].name + ' - Precio: $' + arrayProductos[3].price + '\n' + arrayProductos[3].id + '. ' + arrayProductos[3].name + ' - Precio: $' + arrayProductos[3].price 
  
//   //console.log(stringNormal); 
  
  console.log({carrito})
