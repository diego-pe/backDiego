import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SumaobjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sumaobjeto',
  templateUrl: 'sumaobjeto.html',
})
export class SumaobjetoPage {
    todo:any;
    resultado:number;
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.todo = this.navParams.get("todo")
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SumaobjetoPage');
    this.resultado = parseFloat(this.todo.numero2) + parseFloat(this.todo.numero8)
    
  }

}
