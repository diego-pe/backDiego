import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConetarProvider} from '../../providers/conetar/conetar';
import {VerperfilPage} from '../verperfil/verperfil'

/**
 * Generated class for the LiperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-liper',
    templateUrl: 'liper.html',
})
export class LiperPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private acceso: ConetarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LiperPage');
    }
    numero;
    edificio;

    consultar() {
        let estado = this.acceso.traerListPer(this.numero);
        estado.subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });

    }
    ejecutar(laRespuestaDelservidor) {
        this.edificio = laRespuestaDelservidor.results;
    }
    verperfil(persona) {
        this.navCtrl.push(VerperfilPage, {Data: persona});

    }


}


