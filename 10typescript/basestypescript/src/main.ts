// import './style.css'

import axios from 'axios'
import  { Pokemon } from './Interfaces'

const getPokemon = async ( pokemonId:number ): Promise<Pokemon> =>{
    const {data }
    = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    return data;
}

getPokemon(7).then(resultado=>{
    const img = document.createElement('img')
    const etiqueta = document.createElement('label')
    etiqueta.id="etiqueta"
    etiqueta.textContent=resultado.name
    img.src= resultado.sprites.back_default
    document.body.append(img)
    document.body.append(etiqueta)
    // console.log(resultado.name);

     
})

 













