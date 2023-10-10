let IngreseNombre = prompt("Bienvenido ingrese su Nombre");
alert("Bienvenido " + IngreseNombre);

let opciones = prompt(`Que se te ofrece? 
    1. Ver nuestros productos.
    2. Contactarnos.
    3. Salir 
`);

if (respuesta === "1") {
  alert("Podras ver nuestros productos");
} else if (respuesta ==="2") {
  alert("Comunicate al -54 11-0230-9045");
} else (respuesta =="3") {
    alert("GRACIAS POR TU VISITA, ESPERAMOS VERTE PRONTO!!! ;)");
}

let productos = "Productos disponibles";

switch (productos) {
  case "Accesorios":
    console.log("Aritos, Collares y pulseras de todo tipo");
    break;

  case "Higiene":
    console.log("Jabones, cremas de baño, Shampoos, acondicionadores, toallitas, desodorantes");
    break;

  case "Cosmeticos":
    console.log("Crema para el cuerpo, limpiadores faciales,  protectores solares ");
    break;

  default:
    console.log("Moneda no reconocida");
    break;
}

let opcion = prompt(`
  Ingrese la opción requerida

  1. Ropa Mujer
  2. Ropa Hombre
`);

while (opcion != "salir") {
  switch (opcion) {
    case "1":
      alert(`Tenemos camisas y pantalones`);
      break;

    case "2":
      alert(`Tenemos zapatos y pantalones`);
      break;

    default:
      alert("Opción incorrecta");
      break;
  }

  opcion = prompt(`
    Ingrese la opción requerida

    1. Ropa Mujer
    2. Ropa Hombre
  `);
}