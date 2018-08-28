import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SumaseparadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sumaseparada',
    templateUrl: 'sumaseparada.html',
})
export class SumaseparadaPage {
    n2: number;
    n8: number;
    resultado: number;
    resulatado2: number;
    resultado3;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.n2 = parseFloat(this.navParams.get("nummero2"));
        this.n2 = parseFloat(this.navParams.get("nummero8"));
        this.resulatado2 = this.n2 + this.n2;
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad SumaseparadaPage');
        this.resultado3 = this.n2  + this.n8
    }


}
