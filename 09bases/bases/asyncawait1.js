const promesa = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`resuelve la promesa correctamente`)
            //  reject(`rechazamos la promesa`)
        }, 1000);
    })
}

const llamarPromesa= async ()=>{
    try {
        console.log('iniciamos');
        const respuesta = await promesa()
        console.log(respuesta);
        console.log('terminamos');
        
    } catch (error) {
        throw 'Error al llamar función'
        
    }

}

llamarPromesa()
.then(respuesta=> console.log(`respuesta correcta`, respuesta))
.catch(error=> console.log(error))


