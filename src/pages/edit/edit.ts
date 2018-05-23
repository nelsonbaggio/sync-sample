import { ThfSyncService, ThfHttpRequestData, ThfHttpRequestType } from '@totvs/thf-sync';
import { Customer } from './../../models/customer.model';
import { Http, HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

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
        const paramRequest: ThfHttpRequestData = {
            url: 'http://thfservices.totvs.com.br/customer-api/api/v1/customers',
            method: ThfHttpRequestType.GET,
            body: { value: 'Email de bem vindo' }
        }

        // const paramRequest2: ThfHttpRequestData = {
        //     url: 'http://thfservices.totvs.com.br/customer-api/api/v1/customers/2537b247-0cdc-429b-8932-1cb60eb93a66',
        //     method: ThfHttpRequestType.DELETE
        // }

        // const paramRequest3: ThfHttpRequestData = {
        //     url: 'http://thfservices.totvs.com.br/customer-api/api/v1/customers/3db92c83-3ac8-43ab-af24-1798f2f818f7',
        //     method: ThfHttpRequestType.PUT,
        //     body: { value: 'oi 2' }
        // }

            this.thfSync.insertHttpCommand(paramRequest, "myHttpCustomId")
                // .then(() => this.thfSync.insertHttpCommand(paramRequest2))
                // .then(() => this.thfSync.insertHttpCommand(paramRequest3))
                .then(() => this.showAlert('Dados salvos com sucesso!'));
        // this.thfSync.insertHttpCommand(paramRequest)
        // .then(() => {
        //     this.showAlert('Dados salvos com sucesso!');
        //     // this.thfSync.getPendingEventSourcing(id).subscribe((response) => {
        //     // });
        //     // obs.subscribe((response) => {
        //     //     console.log("RECEBI RESPONSE: ", response);
        //     // });

        // });

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
