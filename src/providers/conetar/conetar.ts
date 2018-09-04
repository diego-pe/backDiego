import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConetarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConetarProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ConetarProvider Provider');
    }

    traerListPer(numero) {
        return this.http.get("http://randomuser.me/api/?results" + numero);
    }
    options = {
        headers: {
            'content-Type': 'applicacion/x-www-form-urlencoder'
        }

    };
    /**
    *Metodos que permite en viardatos a la creacion 
    */
    enviarALServidor(persona:any){
        return this.http.post("http//192.168.0.237/flas02/controller/registro.php", JSON.stringify(persona), "manejo al rismo de todo las persona");
    }
    servidorBuscar(criterio){
        return this.http.post("http//192.168.0.237/flas02/controller/registro.php", JSON.stringify(criterio), this.options); 
       
    }
}


