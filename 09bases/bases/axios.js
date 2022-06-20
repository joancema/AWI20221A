import axios from 'axios'

const apiKey=  '3uEbZ0149ph5m3i0ZxsofHqzh08YWdDA'
const gifApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey
    }
})
// /random?api_key=${apiKey}`

gifApi.get('/random').then(resp=>{
    const {data} = resp.data
    const {url} = data.images.original;

    console.log(url)
    const imagen = document.createElement("img")
    imagen.src=url;
    document.body.append(imagen)
}).catch(err=>{
    console.log(err);
})










// npm install axios
// npmjs

