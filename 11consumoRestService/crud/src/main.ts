import './style.css'
import axios from 'axios'
import { IProducto } from './interfaces/IProducto'

// https://quintoa20221-a015d-default-rtdb.firebaseio.com/productos.json
// https://quintoa20221-a015d-default-rtdb.firebaseio.com/productos/001.json

const httpAxios = axios.create({
    baseURL:`https://quintoa20221-a015d-default-rtdb.firebaseio.com/`
})


const app = document.querySelector<HTMLDivElement>('#app')!

//#region definir html
const etiqueta = document.createElement('label')
etiqueta.textContent=`ID`
const input = document.createElement('input')
input.id=`id`
etiqueta.htmlFor='id'
app.appendChild(etiqueta)
app.appendChild(input)
app.innerHTML += `
<label for ='nombre'> Nombre </label> <input  id="nombre" />
<label for ='estado'> Estado </label> <input  id="estado" />
<label for ='precio'> Precio </label> <input  id="precio" />
<label for ='costo'> Costo </label> <input  id="costo" />
<label for ='minimo'> Mínimo </label> <input  id="minimo" />
<label for ='stock'> Stock </label> <input  id="stock" />
<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>
<div id="cuerpo" />
`
//#endregion
//#region 
const nuevo = document.querySelector<HTMLButtonElement>('#nuevo')!
const grabar = document.querySelector<HTMLButtonElement>('#grabar')!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id = document.querySelector<HTMLInputElement>('#id')!
const nombre = document.querySelector<HTMLInputElement>('#nombre')!
const estado = document.querySelector<HTMLInputElement>('#estado')!
const precio = document.querySelector<HTMLInputElement>('#precio')!
const costo = document.querySelector<HTMLInputElement>('#costo')!
const minimo = document.querySelector<HTMLInputElement>('#minimo')!
const stock = document.querySelector<HTMLInputElement>('#stock')!

const cuerpo =  document.querySelector<HTMLDivElement>('#cuerpo')!



//#endregion


 nuevo.addEventListener('click',()=>{
    id.value=``
    nombre.value=``
    estado.value=``
    costo.value=``
    precio.value=``
    stock.value=``
    minimo.value=``
    
 })
consultar.addEventListener('click', async ()=>{

    const {data} = await httpAxios.get(`productos.json`)
    const productos:IProducto[] = []
    for (let id of Object.keys(data))
    {
        productos.push({
            id,
            ...data[id]
        })
    }


    console.log(productos);
    
    const tabla =document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"

    for ( const producto of productos )
    {
         const row = tabla.insertRow()
         const cell = row.insertCell()
         cell.innerHTML=`<button class="boton" value="${ producto.id }">${producto.nombre}</button>`
         const cell2= row.insertCell()
         cell2.innerHTML=`$ ${producto.precio}`
         const cell3= row.insertCell()
         cell3.innerHTML=`$ ${producto.costo}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)

    document.querySelectorAll('.boton').forEach(ele  =>{
        
        ele.addEventListener('click', async ()=>{
            const codigo=((ele as HTMLButtonElement).value);
            //productos/001.json
            const {data} = await httpAxios.get<IProducto>(`productos/${codigo}.json`)
            id.value= data.id
            nombre.value= data.nombre
            precio.value= data.precio.toString()
            costo.value= data.costo.toString()
            minimo.value= data.minimo.toString()
            stock.value= data.stock.toString()
            estado.value = data.estado ?'true':'false'

           

            
        })
        
        
    })
    

    
})
const asignarValores = ()=>{
    const body: IProducto = {
        id: id.value,
        nombre: nombre.value,
        costo:  Number(costo.value),
        precio: Number( precio.value),
        minimo: Number(minimo.value),
        stock: Number(stock.value),
        estado: estado.value === 'true' ? true: false
    }
    return body;
}
grabar.addEventListener('click', async ()=>{
    // get // post ///put ///delete 
    const body =  asignarValores()
    const {data} = await httpAxios.put<IProducto>(`productos/${id.value}.json`, body)
    console.log(`El producto ${data.nombre} fur grabado con éxito`);
})