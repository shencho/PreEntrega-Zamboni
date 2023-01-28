//PreEntrega1

let nombre = prompt("Ingrese su nombre");

console.log("El nombre ingresado es: " + nombre);

let apellido = prompt("Ingrese su apellido");

console.log("El nombre ingresado es: " + apellido);

let edad = parseInt(prompt("Ingrese su edad"));

console.log("El nombre ingresado es: " + edad);

let modeloElegido = prompt(
  "Ingrese el par de sandalias que desea agregar al carrito (Ingrese SALIR si no quiere evaluar el costo"
);

let costoDelPar = 0;
let costoAcumulado = 0;

while (modeloElegido !== "SALIR") {
  switch (modeloElegido) {
    case "TARAHUMARA":
    case "PIRIPKURÁ":
      costoDelPar = 3200;
      break;

    case "RARAMURÍ":
    case "KAWAHIVA":
      costoDelPar = 4500;
      break;
  }

  console.log("El costo es : $" + costoDelPar);
  let aniadir = prompt("Añadir al carrito (Si/No) ");

  If(aniadir == "Si");
  {
    costoAcumulado += costoDelPar;
    console.log("El costo Acumulado es : $" + costoAcumulado);
  }
  modeloElegido = prompt(
    "Ingrese un nuevo par de sandalias(Ingrese SALIR si no quiere evaluar el costo"
  );
}


