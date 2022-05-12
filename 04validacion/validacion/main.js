import './style.css'


if (!validarCedula(txtcedula.value))
{
  console.log(`El número de cédula no es correcto`)
}
else
{
  console.log(`El número es válido.`)
  
}

function validarCedula(cedula)
{
  let semaforo=false;
  let suma=0;
  if (cedula.length  != 10 ) return false;
  cedula.substr(0,9).split('').forEach((elemento,indice)=>{
    // if (indice%2==0) {}
    // let numeroActual=0;
    // if (semaforo)  { numeroActual = Number(elemento) } else { numeroActual= Number(elemento)*2 }
    let numeroActual = semaforo ? Number(elemento)  : Number(elemento)*2;
    suma +=  numeroActual>9 ? numeroActual-9 : numeroActual ;
    semaforo= !semaforo;
  })
  while (suma >0) suma -= 10;

  // return (Number(cedula.substr(9)) ===suma ||  Number(cedula.substr(9))=== -suma )
  // return Math.abs(suma)===(Number(cedula.substr(9))
  return Number(cedula.substr(9))+ suma  ===0;


}



// 1 3 1 3 1 9 5 3 7 - 0 

// 2 3 2 3 2 9 10 3 14 - 0

// 2 3 2 3 2 9 1 3 5 - 0

// 30
// 20
// 10
// 0

// 0 9 3 0 4 5 7 6 2 - 7
// 0 9 6 0 8 5 5 6 4 = 43

// 33
// 23
// 13
// 3
// -7

