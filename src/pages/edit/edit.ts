import { ThfSyncService } from '@totvs/thf-sync';
import { Customer } from './../../models/customer.model';
import { Http, HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
  providers: [Http, HttpModule]
})
export class EditPage {
  customer: Customer = new Customer();
  title: string = '';
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public thfSync: ThfSyncService, public alertCtrl: AlertController) {
    if (navParams.get('customer')) {
      this.title = "Edição";
      this.customer = navParams.get('customer') as Customer;
    } else {
      this.title = "Inclusão";
    }
  }

  save() {
    const model = this.thfSync.getModel("Customers");

    model.save(this.customer)
      .then(() => {
        this.showAlert('Dados salvos com sucesso!');
      });
  }

  delete() {
    this.showConfirm();
  }


  showConfirm() {
    var that = this;
    const model = this.thfSync.getModel("Customers");
    let confirm = this.alertCtrl.create({
      title: 'Exclusão',
      message: 'Tem certeza que deseja excluir?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            model.remove(that.customer)
              .then(
              (res) => {
                that.showAlert('Excluído com sucesso!');
              },
              (err) => {
                that.showErrorAlert(err);
              })
          }
        }
      ]
    });
    confirm.present();
  }


  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present().then(
      (res) => {
        this.viewCtrl.dismiss();
      }
    )
  }

  showErrorAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Erro: ' + msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
