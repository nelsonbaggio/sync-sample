import { ThfSyncService } from '@totvs/thf-sync';
import { ThfSyncSchema } from '@totvs/thf-sync';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private thfSync: ThfSyncService) {
    this.buildSchemas();
  }

  buildSchemas() {
    let customerSchema: ThfSyncSchema = {
      getUrlApi: 'http://localhost:8200/api/v1/customers',
      diffUrlApi: 'http://localhost:8200/api/v1/customers/diff',
      name: 'Customers',
      idField: 'id',
      fields: [
        'id', 'name'
      ],
      pageSize: 20,
      deletedField: 'deleted',

    };

    let userSchema: ThfSyncSchema = {
      getUrlApi: 'http://localhost:8200/api/v1/users',
      diffUrlApi: 'http://localhost:8200/api/v1/users/diff',
      name: 'Users',
      idField: 'id',
      fields: [
        'id', 'name', 'login'
      ],
      pageSize: 20,
      deletedField: 'deleted',
    };

    this.thfSync.prepare([customerSchema, userSchema])
      .then(() => {
        console.log("Schemas ready");
        // this.thfSync.loadData()
        //   .subscribe((res) => {
        //     console.log("Retorno subscribe");
        //     res.forEach(
        //       (el) => {
        //         console.log('Entity: ' + el.entity + ' (' + el.data.length + ' loaded)');
        //       }
        //     )
        //   });
      });
  }
}
