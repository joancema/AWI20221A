import './style.css'


const obtenerNombreCompleto = (firstName:string 
  , lastName:string, upper:boolean =true ): string =>{
  if (upper)
  {
    return `${ firstName } ${ lastName }  `.toUpperCase()
  }
  else
  {
    return `${ firstName } ${ lastName }  `
  }

}
const name= obtenerNombreCompleto('Homero','Simpson')
console.log(name);


