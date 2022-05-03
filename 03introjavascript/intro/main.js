import './style.css'


let valor1=1;
//variables 
valor1=2;
const iva=12;
// iva=14;
var variableGlobal=0;
// variablex=6;


console.log(generar)
generar.addEventListener('click', generarTablaDeMultiplicar(6)  )


let valorAMultiplicar=Number(multiplicar.value); 


// generarTablaDeMultiplicar(valorAMultiplicar)

function generarTablaDeMultiplicar(tabla)
{
  for (let i=1;i<13; i++ )
  {
    // console.log(i+'X'+valorAMultiplicar+'='+  i*valorAMultiplicar)
    console.log(`${i} X ${tabla}    =     ${ i*tabla}  `)
  }


}  


document.querySelector('#app').innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`



