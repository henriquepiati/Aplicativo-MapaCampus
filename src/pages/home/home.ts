import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController) {
  }

  openModalAluno() {

    const modalAluno = this.modal.create('ModalAlunoPage');
    modalAluno.present();
  }

  openModalSatc() {
    const modalSatc = this.modal.create('ModalSatcPage');
    modalSatc.present();
  }

  openModalLista() {
    const modalSatc = this.modal.create('ModalListaPage');
    modalSatc.present();
  }

}
