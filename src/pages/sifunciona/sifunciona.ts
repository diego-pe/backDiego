import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SumaobjetoPage} from '../sumaobjeto/sumaobjeto';
import {SumaseparadaPage} from '../sumaseparada/sumaseparada';
/**
 * Generated class for the SifuncionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sifunciona',
    templateUrl: 'sifunciona.html',


})
export class SifuncionaPage {
    suma;
    resultado;
    numero2;
    numero8;
    numero9;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SifuncionaPage');
    }

    sumaSepa() {
        this.navCtrl.push(SumaseparadaPage, {nunmero2: this.numero2, numero8 this.numero8});
    }
    SumaobjetoPage(){
        this.navCtrl.push(SumaobjetoPage, {numero9: this.numero9, numero2 this.numero2});
    }
}




