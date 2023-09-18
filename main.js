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
for (let i = 0; i < 4; i++) {
    ingresarPersona();
}

// Mostrar datos
console.log(personas);

// Filtrar personas mayores de 18 años
let personasMayoresDe18 = personas.filter(persona => persona.edad > 18);

// Filtrar personas menores de 18
let personasMenoresDe18 = personas.filter(persona => persona.edad < 18);

// Mostrar personas mayores de 18 años
console.log("Personas mayores de 18 años:");
console.log(personasMayoresDe18);

// Mostrar personas menores de 18
console.log("Personas menores o iguales a 18 años:");
console.log(personasMenoresDe18);
























//Quisiera declararle mi amor pero solo sé declarar variables T-T