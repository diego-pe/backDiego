import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistroPageModule} from '../registro/registro.module';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from 'ionic-angular';
import {ConetarProvider} from '../../providers/conetar/conetar';
import {AlertController} from 'ionic-angular';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-registro',
    templateUrl: 'registro.html',
})
export class RegistroPage {

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private Cosvalfor: FormBuilder,
        private VentanaEspera: LoadingController,
        private conecta: ConetarProvider,
        public alertCtrl: AlertController) {
        this.iniciarFormulario();
    }

    RegPersona: FormGroup;
    miventana: any;
    iniciarFormulario() {
        this.RegPersona = this.Cosvalfor.group({
            tipo: ['', [Validators.required]],
            numero: ['', [Validators.required, Validators.pattern(/^[o-9] {5,20}$/)]],
            nombre: ['', [Validators.pattern(/^ [a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ] {2,30}$/)]],
            apellido: ['', [Validators.pattern(/^ [a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ] {2,30}$/)]],
            telefono: ['', [Validators.pattern, Validators.pattern(/^[o-9] {5,15}$/)]],
            Email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
            Nacimiento: ['', [Validators.required]]
        });

    }
    regper() {
        this.miventana = this.VentanaEspera.create({
            content: "Un momeento....<br> se esta prosesando su solisitud"
        });
        this.miventana.present();
        let estado = this.conecta.enviarALServidor(this.RegPersona.value);

        estado.subscribe(data => {
            let res: any = data;
            this.miventana.dismiss();
            if (res.success == "ok") {
                this.presentAlert("Positivo", "El Usuario fue registrado perfecta mente");
                this.iniciarFormulario();
            } else {
                this.presentAlert("Error #7", "Error el campo de la cc ya esta registrado.");
            }

        },
            err => {
                this.miventana.dismiss();
                this.presentAlert("Erro #6", "No Existe la conexion con el servidor, Verifique la conecion");
            });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegistroPage');
    }
    RegistroPageModule() {
        this.navCtrl.push(RegistroPage, {

        })
    }

    presentAlert(estTitu, estMensaje) {
        let alert = this.alertCtrl.create({
            title: estTitu,
            subTitle: estMensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }
}
