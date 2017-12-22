import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalSatcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-satc',
  templateUrl: 'modal-satc.html',
})
export class ModalSatcPage {

  constructor(private view: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSatcPage');
  }

  closeModalSatc() {
    this.view.dismiss();
  }

}
