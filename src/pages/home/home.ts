import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {LiperPage} from '../liper/liper'
import {VerperfilPage} from '../verperfil/verperfil'
import {SifuncionaPage} from '../sifunciona/sifunciona'
import {RegistroPage} from '../registro/registro'
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
    SiRegistroPage(){
        this.navCtrl.push(RegistroPage);
    }
        
        
    }



