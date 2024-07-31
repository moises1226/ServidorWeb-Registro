// const http = require('http');


// const serverHttp = http.createServer((req, res) => {


//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Servidor http fuciona exitosamente')


// })


// module.exports = serverHttp
const express = require('express');
const path = require('path');


const StartServer = (opcions) => {

    //aca estamos creando una variable desestructurada con los atributos port && pub_path que van a ser del
    //parametro opcions, por ello ese parametro tendra como entrada 2 atributos que serian del objeto envs. 

    const {port , public_path = 'public' } = opcions; 

    //creamos una instancia de expreessjs
    const app = express();

     // creamos un middlewares(soft intermediario).
     //para poder usar middlewares se usa la palabra "use" ( esa palabra proviene de la libriaria express)

     //aca estamos diciendo cual es la ruta de los archivos de la pagina
     //cave recalcar que public_path tiene la ruta de nuestra carpeta public
     app.use(express.static(public_path))
     
    //aca estamos diciendo que a cualquier tipo de solicitud q nos envien, vamos a dar como respues la url q creamos
    //que seria indexPath
     app.get('*', (req , res) => {

        //aca estamos ultizamos el metodo join para unir todas las rutas que le inidicaos y asi nos da la que queremos
        //que en este caso es index.html        
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`)

        //enviamos como respuesta al navegador q archivo nos va a tener q mostrar
        res.sendFile(indexPath);

     })


     //ahora vamos a iniciar el servidor con listen, indicando el puerto , y q este nnos va a devolver
     // un mensaje de exito

     app.listen(port , () => {

        console.log("El puerto " + port + " esta en funcionamiento");
        


     })

}


module.exports = {

    StartServer

}

