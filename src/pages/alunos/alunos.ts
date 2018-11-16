import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenutwoPage } from '../menutwo/menutwo';
import { MenuthrePage } from '../menuthre/menuthre';

/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunosPage');
  }
  fernando():void{
    this.navCtrl.push(MenuPage);
  }
  flavia():void{
    this.navCtrl.push(MenutwoPage);
  }
  fabio():void{
    this.navCtrl.push(MenuthrePage);
  }

}
