import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoletimPage } from '../boletim/boletim';

/**
 * Generated class for the MenutwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menutwo',
  templateUrl: 'menutwo.html',
})
export class MenutwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenutwoPage');
  }
  boletim():void{
    this.navCtrl.push(BoletimPage)
  }

}
