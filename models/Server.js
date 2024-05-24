// Importamos express
import express from 'express';
// Importamos nuestro moto de plantilla
//import { create } from 'express-handlebars';

// Creación de variables de entorno
import { fileURLToPath } from 'url'
import { dirname } from "path";


// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

// IMPORTAMOS NUESTRAS VISTAS
import rutaHome from '../routes/vistaHome.routes.js'
import rutaPost from '../routes/vistaPost.routes.js'
import rutaGet from '../routes/vistaGet.routes.js'
import rutaDelete from '../routes/vistaDelete.routes.js'
import rutaPut from '../routes/vistaPut.routes.js'
import rutaPostTransferencia from '../routes/vistaPostTransferencia.routes.js'
import rutaGetTransferencias from '../routes/vistaGetTransferencias.routes.js'
 

// Creamos nuestro modelo o clase de servidor

class Server {

    // Vamos a crear nuestro constructor para que ejecute 
    // Middleware
    // Rutas o Routes
    constructor(){
        // Cramos la app  de express
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.Paths = {
            rootHome:'/',
            rootPost:'/usuario',
            rootGet:'/usuarios',
            rootDelete:'/usuario',
            rootPut:'/usuario',
            rootPostTransferencia: '/transferencia',
            rootGetTransferencias: '/transferencias'
            
        }

        // Iniciamos nuestros metodos iniciales
        this.middlewares();
        this.routes()
    }


    middlewares(){
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        this.app.use( express.urlencoded({ extended: true }));
        this.app.use('/jquery',express.static(  `${__dirname}/../node_modules/jquery/dist`  ));
    }


    routes(){
        this.app.use( this.Paths.rootHome , rutaHome);
        this.app.use( this.Paths.rootPost, rutaPost);
        this.app.use( this.Paths.rootGet, rutaGet );
        this.app.use( this.Paths.rootDelete , rutaDelete );        
        this.app.use( this.Paths.rootPut , rutaPut );
        this.app.use( this.Paths.rootPostTransferencia, rutaPostTransferencia );
        this.app.use( this.Paths.rootGetTransferencias, rutaGetTransferencias );
               
            
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        } )
    }

   /*  initHandelbars(){

        this.hbs = create({
            partialsDir:[
                "views"
            ]
        })

        this.app.engine( "handlebars", this.hbs.engine );
        this.app.set("view engine","handlebars");
        
    } */

}

export default Server;