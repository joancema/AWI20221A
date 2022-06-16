const nombre= 'Homero'
const apellido= 'Simpson'


// const nombreCompleto = nombre+" "+apellido;

const nombreCompleto = ` ${ nombre.toUpperCase() }  - ${ apellido.toUpperCase() } `
// console.log(getSaludo(nombre));


function getSaludo(nombre){
    return 'Hola '+ nombre;
}

console.log(` Mensaje mostrado: ${  getSaludo("John Cevallos") }   `)

// console.log(nombreCompleto);