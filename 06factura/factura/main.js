import './style.css'

let html=``;

for (let i=0; i<10;i++)
{
  html+=`<div id=contenedor${i} class="contenedor">`
  html+= `<input type="text" id=producto${i} class="producto" value="Producto${i}">`
  html+= `<input type="text" id=cantidad${i} class="cantidad" value="${i}">`
  html+= `<input type="text" id=precio${i} class="precio" value="${i}">`
  html+= `<input type="text" id=total${i} class="total" value="0">`
  html+=`</div>`
}
html+=`<input id="total" value="0" >`

app.innerHTML = html

document.querySelectorAll('.cantidad, .precio').forEach(ele=>{
  ele.addEventListener('change', ()=>{
    ele.parentElement.querySelector('.total').value=
    ele.parentElement.querySelector('.cantidad').value*
    ele.parentElement.querySelector('.precio').value;
    total.value=  calcularSubtotal()
  })
})
function calcularSubtotal()
{
  let total=0;
  document.querySelectorAll('.total').forEach(ele=>{
    total+= Number(ele.value);
  })
  return total;
}

