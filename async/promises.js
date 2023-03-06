function hablar(){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("blablablabla...");
            resolve();
        },1000);
        
    })

    
}


function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000)

    })

    
}

function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{console.log("Adios " + nombre);
        resolve(nombre);
        }, 1000)
        
    })
    
}

hola("Claudio")
.then(adios)
.then((nombre)=>{
    console.log("termino el proceso");

})