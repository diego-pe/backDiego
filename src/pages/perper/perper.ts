import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PerperPageModule} from '../perper/perper.module';

/**
 * Generated class for the PerperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perper',
  templateUrl: 'perper.html',
})
export class PerperPage {
    persona;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      this.persona = this.navCtrl.get("per");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerperPage');
  }

}
