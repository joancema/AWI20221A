import './style.css'


let valor1=1;
//variables 
valor1=2;
const iva=12;
// iva=14;
var variableGlobal=0;
// variablex=6;
generar.addEventListener('click', ()=>{
  generarTablaDeMultiplicar(multiplicar.value);
} )
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

invertir.addEventListener('click',()=>{
  comida.value = comida.value.split(" ").reverse().join(" ")
})

cambiarValores.addEventListener('click',()=>{
  const auxiliar = txtnumero1.value;
  txtnumero1.value= txtnumero2.value;
  txtnumero2.value= auxiliar;
})

sumar.addEventListener('click', ()=>{
  let prueba= ' Papa JOhn\'s '
  // txtresultado.value= Number(txtnumero1.value)+ Number(txtnumero2.value);
  txtresultado.value= eval(`${txtnumero1.value} ${sumar.innerHTML} ${txtnumero2.value} + 1`)
  (()=>{
    alert('ok')
  })()
})





document.querySelector('#app').innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`



