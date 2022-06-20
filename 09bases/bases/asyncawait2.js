import axios from 'axios'

const apiKey=  '3uEbZ0149ph5m3i0ZxsofHqzh08YWdDA'
const gifApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey
    }
})

const getImage= async ()=>{
    const {data} =  await (await gifApi.get('/random')).data
    const {url} = data.images.original;
    const imagen = document.createElement("img")
    imagen.src=url;
    document.body.append(imagen)
}

getImage()
