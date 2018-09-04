import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {LiperPage} from '../liper/liper';
import {VerperfilPage} from '../verperfil/verperfil';
import {SifuncionaPage} from '../sifunciona/sifunciona';
import {RegistroPage} from '../registro/registro';
import {BusPerPage} from '../bus-per/bus-per';
import {PerperPage} from '../perper/perper';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }
    Liper() {
        this.navCtrl.push(LiperPage);
    }
    Hemeroteca() {
        this.navCtrl.push(HemerotecaPage);
    }
    Sifunciona() {
        this.navCtrl.push(SifuncionaPage);
    }
    RegistroPage() {
        this.navCtrl.push(RegistroPage);
    }
    BusPer() {
        this.navCtrl.push(BusPerPage);
    }
    Perper(){
        this.navCtrl.push(PerperPage);
    }

}



