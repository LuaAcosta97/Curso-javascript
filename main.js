// // declaracion
// let Productos; ${Productos}
// let Contactarnos; ${contactarnos}
// let Salir; ${salir}


let IngreseNombre = prompt("Hola, Cual es tu nombre?");
  alert("Bienvenido/a " + IngreseNombre);
  
let op = prompt(`
  Que se te ofrece? 
    1. Ver nuestros productos. 
    2. Contactarnos. 
    3. Salir. 
    Elije una opcion (num)...
    `);
 
while (op)
console.log ("op")
    switch (op) {
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
         
    
  //    let Productos = prompt(" Selecciona el
  //    Accesorios, higiene, cosmeticos, indumentaria
  //  ") 

// let productos = "Productos disponibles";

// switch (Productos) {
//   case "Accesorios":
//     console.log("Aritos, Collares y pulseras de todo tipo");
//     break;

//   case "Higiene":
//     console.log("Jabones, cremas de baño, Shampoos, acondicionadores, toallitas, desodorantes");
//     break;

//   case "Cosmeticos":
//     console.log("Crema para el cuerpo, limpiadores faciales,  protectores solares ");
//     break;

//   default:
//     console.log("");
//     break;
// }

// let opcion = prompt(`
//   Ingrese la opción requerida

//   1. Ropa Mujer
//   2. Ropa Hombre
// `);

// while (opcion != "salir") {
//   switch (opcion) {
//     case "1":
//       alert(`Tenemos camisas y pantalones`);
//       break;

//     case "2":
//       alert(`Tenemos zapatos y pantalones`);
//       break;

//     default:
//       alert("Opción incorrecta");
//       break;
//   }

//   let opcion = prompt(`
//     Ingrese la opción requerida

//     1. Ropa Mujer
//     2. Ropa Hombre
//   `);
// }
// if (Productos === "1"); {
//   alert("Podras ver nuestros productos");
//   Productos = Accesorios, higiene, cosmeticos, indumentaria
// } else if (contactarnos == "2"); {
//   alert("Comunicate al -54 11-0230-9045");
// } else (salir || "3"); {
//   alert("GRACIAS POR TU VISITA, ESPERAMOS VERTE PRONTO!!! ;)");
// }