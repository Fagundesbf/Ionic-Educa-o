import { BoletimPage } from './../pages/boletim/boletim';
import { MenuthrePage } from './../pages/menuthre/menuthre';
import { MenutwoPage } from './../pages/menutwo/menutwo';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlunosPage } from '../pages/alunos/alunos';
import { MenuPage } from '../pages/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlunosPage,
    MenuPage,
    MenutwoPage,
    MenuthrePage,
    BoletimPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlunosPage,
    MenuPage,
    MenutwoPage,
    MenuthrePage,
    BoletimPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
