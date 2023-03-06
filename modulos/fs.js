const fs = require("fs");

function leer(ruta,cb){
    fs.readFile(ruta, (err, data)=>{
        //leido
        cb(data.toString());
    })

}

function escribir(ruta, contenido, cb){

    fs.writeFile(ruta, contenido, (err)=>{
        if (err){
            console.log("no he podido escribirlo");
        }
        else{
            console.log("Se ha escrito correctamente");
        }

    });
}

function borrar(ruta, cb){
    fs.unlink(ruta,cb);

}
//borrar(__dirname+ "/archivo1.txt" , console.log);
//escribir(__dirname+ "/archivo1.txt", "Hola como estan soy el archivo1");
//leer(__dirname+"/archivo.txt", console.log);