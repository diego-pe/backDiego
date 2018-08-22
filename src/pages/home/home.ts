import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {LiperPage} from '../liper/liper'
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
    Hemeroteca(){
        this.navCtrl.push(HemerotecaPage);
    }
}
