import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-lista',
  templateUrl: 'modal-lista.html',
})
export class ModalListaPage {

  constructor(private view: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalListaPage');
  }

  closeModalLista() {
    this.view.dismiss();
  }

}
