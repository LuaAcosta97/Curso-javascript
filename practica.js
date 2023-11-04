const arrayPrueba = [
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
    
]

const arrayProductos2 = [ 
    
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
        id: 7
},
{
        name: 'falda entablada',
        price: 6900,
        stock: 8,
        description:'cuadros azules, gris y blanco',
        talle: 'Talle: 3',
        category: 'otoño',
        id: 8
    }
]

// Manipulación de string

function armarPrompt() {
    let stringNormal = " pato";
 // concatenación de string usando signo(+)
 let stringNuevo = stringNormal + ", perro"
 // \n (salto de linea)
 let stringNuevo2 = stringNormal + ",\n gatito" 
//  concatenación usando (template string permite poner los string juntos)
let stringNuevo3 = `${stringNormal}, conejo, 
perro, 
estancia,
nogar h s l
mosaico `;
return stringNuevo3

  }
// la funcion puede recibir cualquier array por parametros, para poder realizar con ella la tarea/proceso que se le asigno. 
// 
function armarStringCatalogo(array) {
    console.log(array[2])
    let stringCatalogoManual = 
    `${array[0].id}. ${array[0].name} - Precio: $${array[0].price} 
${array[1].id}. ${array[1].name} - Precio: $${array[1].price}
${array[2].id}. ${array[2].name} - Precio: $${array[1].price}`

    let stringCatalogoAutomatico = ''
// i= iterador (representa cada ciclo/vuelta que da el for, cada producto representa la numeracion de la vueltas)
    for (let i = 0; i < array.length; i++) {
        stringCatalogoAutomatico = stringCatalogoAutomatico + `${array[i].id}. ${array[i].name} - Precio: $${array[i].price} \n`
    }
    return stringCatalogoAutomatico
}
console.log(armarStringCatalogo(arrayProductos2))

// mismo resultado distinto proceso.(manu)
array.forEach((item) => {
    stringAlert =
      stringAlert +
      item.id + '. ' + item.name + ' - Precio: $' + element.price + '\n';
  });

return stringAlert;



console.log()

