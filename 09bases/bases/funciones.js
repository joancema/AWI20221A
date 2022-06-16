import { personajes } from './datos'






const personajesFiltrados=
 personajes.find((personaje)=> personaje.nombre.toLowerCase() === "Homero Simpson".toLowerCase())
//  personaje.nombre.split(" ")[0][0] ===   personaje.nombre.split(" ")[0][0].toUpperCase()

console.log(personajes)
console.log(personajesFiltrados)