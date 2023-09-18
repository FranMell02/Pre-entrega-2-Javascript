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

// Ciclo
for (let i = 0; i < 2; i++) {
    ingresarPersona();
}

// Mostrar datos
console.log(personas);
























//Quisiera declararle mi amor pero solo sé declarar variables T-T