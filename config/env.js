require('dotenv').config();

//aca importamos solo el metodo de salida de la libreria env-var, realizamos un desestructuracion
const { get } = require('env-var')

//creamos un objeto con las siguientes atributos sacados del arch .env


const envs = {

    //aca le estamos requiriendo que traiga la variable PORT como numero
    PORT : get('PORT').required().asPortNumber(),
    //aca igual pero en formato texto, y si no es encontrado x default trae el public
    PUBLIC_PATH : get('PUBLIC_PATH').default('public').asString()

}

//exportamos el objeto env con sus atributos
module.exports = {

    envs


}
