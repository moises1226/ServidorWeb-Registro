
const {StartServer} = require('./server/server-http')
const {envs} = require ('../config/env')

const main = () => {

    StartServer({ port: envs.PORT,public_path : envs.PUBLIC_PATH})


}

(async () => {

    main()



})()