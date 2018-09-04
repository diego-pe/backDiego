import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the BusPerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bus-per',
    templateUrl: 'bus-per.html',

})
export class BusPerPage {
    item = 1;
    criterio;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController

    ) {
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad BusPerPage');
    }
    buscar() {
        if (this.item != 1 && this.criterio == "") {
            this.presentToast("El criterio no puede estar solo");
        } else {
            let busqueda = {item: this.item, criterio: this.criterio}
            let estado = this.conecta.servidorBuscar(busqueda);
            estado.subscribe(data => {
                console.log(data);
            }, err => {
                console.log(err);
            });
        }

    }

    verifique() {
        
        this.criterio = ''
        this.presentToast("El criterio debe ser cambiado.!!")
    }

    presentToast(Mensaje: string) {
        const toast = this.toastCtrl.create({
            message: Mensaje,
            position: 'long',
            showCloseButton: true,
            closeButtonText: 'ok',
            duration: 200,
        });
        toast.present();

    }
}
