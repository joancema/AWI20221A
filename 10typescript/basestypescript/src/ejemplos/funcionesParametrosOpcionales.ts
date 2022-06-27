import './style.css'


const obtenerNombreCompleto = (firstName:string 
  , lastName?:string,  ): string =>{
    if (lastName)
    return `${ firstName } ${ lastName  }  `
    else
    return `${ firstName }   `

}
const name= obtenerNombreCompleto('Homero')
console.log(name);


