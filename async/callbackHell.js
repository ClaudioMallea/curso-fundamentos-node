function hablar(callbackHablar){
    setTimeout(function(){
        console.log("blablablabla...");
        callbackHablar();
    },1000);
    
}


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
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios('Claudio',function(){console.log("end")});
             });
        });
    });
    
});