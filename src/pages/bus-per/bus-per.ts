import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {PerperPage} from '../perper/perper';
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
    edificio;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController

    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusPerPage');
    }
    cargarVista(data) {
        this.edificio = data.result;
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

    cargarVista(data) {
        this.edificio = data.result;

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
