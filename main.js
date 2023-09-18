// Array
let personas = [];

// Función para ingresar datos
function ingresarPersona() {
  let nombre = prompt("Ingresa nombre:");
  let edad = parseInt(prompt("Ingresa edad:"));
  let altura = parseFloat(prompt("Ingresa altura (Expresada en metros):"));

  // Objeto
  let persona = {
    nombre: nombre,
    edad: edad,
    altura: altura
  };

  // Agregar el objeto al array
  personas.push(persona);

  alert("Persona agregada con éxito.");
}

// Llamar a la función para ingresar datos de personas
ingresarPersona();

// Mostrar datos
console.log(personas);