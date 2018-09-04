import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {HemerotecaPage} from'../pages/hemeroteca/hemeroteca';
import {CienciasPage} from'../pages/ciencias/ciencias';
import {HumanidadesPage} from '../pages/humanidades/humanidades';
import {HttpClientModule} from'@angular/common/http';
import {SifuncionaPage} from '../pages/sifunciona/sifunciona';
import {SumaobjetoPage} from '../pages/sumaobjeto/sumaobjeto';
import {SumaseparadaPage} from '../pages/sumaseparada/sumaseparada'
import { ConetarProvider } from '../providers/conetar/conetar';
import {RegistroPage} from '../pages/registro/registro';
import {BusPerPage} from '../pages/bus-per/bus-per';
import {RadioPage} from '../pages/radio/radio';
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SifuncionaPage,
        SumaobjetoPage,
        SumaseparadaPage,
        RegistroPage,
        BusPerPage,
        RadioPage,
              
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,  
        SifuncionaPage,
        SumaobjetoPage,
        SumaseparadaPage,
        RegistroPage,
        BusPerPage,
        RadioPage, 
          
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConetarProvider
    ]
})
export class AppModule {}
