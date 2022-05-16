import './style.css'

const comidas  = [
  { codigo:"c1", descripcion:"Chaulafan", tipo:"Plato fuerte" },
  { codigo:"c2", descripcion:"Pizza", tipo:"Entrada" },
  { codigo:"c3", descripcion:"Encebollado", tipo:"Desayuno" },
  { codigo:"c4", descripcion:"Bolón", tipo:"Desayuno" },
]
let html=`<table border=1>`
html+=`<tr>`;
html+=`<th>Código</th>`
html+=`<th>Descripción</th>`
html+=`<th>Tipo</th>`
html+=`<th>Modificar</th>`
html+=`<th>Eliminar</th>`
html+=`</tr>`;
// for (let i=0; i< comidas.length;i++)
// for ( let indice in comidas  )
for (let elemento of comidas)
{
  html+=`<tr>`
  html+=`<td><button class='individual' id=${elemento.codigo}>${elemento.codigo}</button></td>`
  html+=`<td>${elemento.descripcion}</td>`
  html+=`<td>${elemento.tipo}</td>`
  html+= `<td><button class='editar'>Editar</button></td>`
  html+= `<td><button class='eliminar'>Eliminar</button></td>`
  html+=`</tr>`
}
html+= `</table>`
app.innerHTML= html;

let botones=   document.querySelectorAll('.individual');
botones.forEach(boton =>{
    boton.addEventListener('click',()=>{

      let comida= comidas.find((elemento)=>{
        return elemento.codigo=== boton.id
      })
      codigo.value= comida.codigo;
      descripcion.value= comida.descripcion;
      tipo.value= comida.tipo;

      // let arreglo= comidas.filter((elemento)=>{
      //   return elemento.codigo===boton.id
      // })
      // let elemento = arreglo[0];
      // codigo.value= elemento.codigo;
      // descripcion.value= elemento.descripcion;
      // tipo.value= elemento.tipo;


      // alert(`Consulta individual ${boton.id} `)
      // for (let elemento of comidas) 
      // {
      //   if (elemento.codigo=== boton.id )
      //   {
      //       codigo.value= elemento.codigo;
      //       descripcion.value= elemento.descripcion;
      //       tipo.value= elemento.tipo;
      //   }
      // }

    })
})


// let html= `
//   <h1>Prueba de generación</h1>
// `
// for (let i=0;i<10;i++)
// {
//   html+= `
//   <h2>Prueba de generación ${i} </h2>
//   `
// }
// app.innerHTML = html;
