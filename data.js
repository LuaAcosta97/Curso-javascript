
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

// Asi es el filtrado por categoria

// let filteredProducts = arrayProductos.filter((item)=>item.category === "otoño" ) 
// // console.log(filteredProducts)

// // // Asi se hace una busqueda 
// // let foundProduct = arrayProductos.find((item) => item.name === "Vestido")
// // // console.log(foundProduct)

// export function filterByCategory(category){
//     let filteredProducts = arrayProductos.filter((item)=>item.category === "otoño" ) 
// return filteredProducts
// } 
// // cree una variable para guardar el resultado de la funcion
// // let result = filterByCategory("otoño")



// // const resultFilter = (category)

// function iterador(filterByCategory, funcion ) {
//         for (const filteredProducts of filterByCategory) {
//           funcion(filteredProducts);
//         }
// } 
// iterador(filteredProducts, category );


// function mostrar(postre) {
    //     console.log(`me podes hacer ${postre}`);
    // }
    
    // function iterador(arreglo, funcion) {
    //     for (const postre of arreglo) {
    //         funcion(postre);
    //     }
    // }

// export function calculateMediodepago(medioDePago){
//     switch (medioDePago) {
//       case "1":
//         let cuotasSinInteres = precioTotal / 3;
//         mediodepagoResult = (`
//           Felicitaciones, tu compra esta completa
//           Vas a pagar tu compra en 3 cuotas sin interés de $ ${cuotasSinInteres} cada una.
//         `); 
//         break;
    
//       case "2":
//         let cuotasConInteres = (precioTotal * 1.50) / 6;
//         mediodepagoResult = (`
//           Felicitaciones, tu compra esta completa
//           Vas a pagar tu compra en 6 cuotas conn interés de $ ${cuotasConInteres} cada una.
//         `);
//         break;
    
//       case "3":
//         let precioAlContadoConDescuento =  precioTotal * 0.80 ;
//         mediodepagoResult = (`
//           Felicitaciones, tu compra esta completa
//           Vas a pagar tu compra en efectivo con 20% de decuento, el total es: $ ${precioAlContadoConDescuento}.
//         `);
//         break;
    
//       default:
//         alert(`Error al calcular el pago`);
//         break;
//     }
//   }