//https://giphy.com
const apiKey=  '3uEbZ0149ph5m3i0ZxsofHqzh08YWdDA'
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then((respuesta)=>{  return respuesta.json() })
// .catch(error=>{console.log(`error 1`)})
.then( ({data})=>{ 

    const {url } =data.images.original; 

    const img= document.createElement('img')
    img.src=url
    document.body.append(img)

    
} )
.catch((error)=>{ console.log(error) })