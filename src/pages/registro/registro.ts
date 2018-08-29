import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistroPageModule} from '../registro/registro.module';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
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



    constructor(public navCtrl: NavController, public navParams: NavParams, private Cosvalfor: FormBuilder) {
        this.iniciarFormulario();
    }
    RegPersona: FormGroup;
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

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegistroPage');
    }
    RegistroPageModule() {
        this.navCtrl.push(RegistroPage, {})
    }

}
