let alumnos = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 40 }
];

let curso = prompt("¿De qué curso son tus alumnos?");
let asignaturas = prompt("¿Qué asignaturas cursan? (separadas por -)").split("-");


let alumnosActualizados = alumnos.map(alumno =>
{
  return {
    alumno,
    curso: curso,
    asignaturas: asignaturas
  };
});

console.log(alumnosActualizados);