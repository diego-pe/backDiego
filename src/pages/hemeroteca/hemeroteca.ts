import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HemerotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-hemeroteca',
    templateUrl: 'hemeroteca.html',
})
export class HemerotecaPage {
    numero1;
    numero2;
    numero3;
    numero8;
    resultado;
    edificio;
    Ctrl: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HemerotecaPage');
    }
    suma() {
        this.resultado = " la suma de " + this.numero1 + " = " + this.numero2 + " = " + (parseFloat(this.numero1) + parseFloat(this.numero2));
    }
    resta() {
        this.resultado = " la resta de " + this.numero1 + " - " + this.numero2 + " = " + (parseFloat(this.numero1) - parseFloat(this.numero2));
    }

    multiplicaion() {
        this.resultado = " la multiplicacion de " + this.numero1 + " * " + this.numero2 + " = " + (parseFloat(this.numero1) * parseFloat(this.numero2));
    }
    divicion() {
        this.resultado = " la divicion de " + this.numero1 + " / " + this.numero2 + " = " + (parseFloat(this.numero1) / parseFloat(this.numero2));
    }
    tabla() {
        this.edificio = Array();
        for (let i = 1; i < 10; i++) {
            this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
        }

    }
 /**   tabla() {
        this.edificio = Array();
        for (let i = 1; i < this.numero2; i++) {
            if ((this.numero1 * i) % this.numero3 == 0) {
                this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
            }

        }
    }
    */

    tabla() {
        this.edificio = Array();
        for (let i = 1; i < this.numero2; i++) {
            if ((this.numero1 * i) % this.numero3 == 0)==this.Ctrl;
            this.edificio;
        }




    }

