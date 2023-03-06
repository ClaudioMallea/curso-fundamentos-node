function hola(nombre,callback){

    
    setTimeout(()=>{
        console.log("Hola " + nombre);
        callback();
    }, 1000)
    
}

function adios(nombre,callback){

    setTimeout(()=>{console.log("Adios " + nombre);
            callback();

}, 1000)
}

console.log("init");
hola("Claudio",function(){
    adios('Claudio',function(){console.log("end")});
});
