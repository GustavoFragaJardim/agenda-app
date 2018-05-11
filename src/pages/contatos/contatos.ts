import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContatosProvider } from '../../providers/contatos/contatos';
import { ContatoDetalhePage } from '../../pages/contato-detalhe/contato-detalhe'

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  contatos: Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email:string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contatosProvider: ContatosProvider) {
    this.contatos = ContatosProvider.getContatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosPage');
  }
  addContato(){
    this.navCtrl.push(ContatoDetalhePage);
  }
  editContato(contato){
    this.navCtrl.push(ContatoDetalhePage,{cttParam: contato});
  }

}
