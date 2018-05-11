import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContatosProvider } from '../../providers/contatos/contatos';
/**
 * Generated class for the ContatoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato-detalhe',
  templateUrl: 'contato-detalhe.html',
})
export class ContatoDetalhePage {

  contato = {nome: '', endereco: '', cep: '', lat: 0, long: 0, email: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private contatosProvider: ContatosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoDetalhePage');
  }
  confirmaContato(){
    const c = this.contato;
    this.contatosProvider.addContatos(c.nome, c.endereco, c.cep, c.lat, c.long, c.email);
    this.navCtrl.pop();
  }

  cancelaContato(){
    this.navCtrl.pop();
  }
}
