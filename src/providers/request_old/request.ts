import { Util } from './../util/util';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { StorageService } from '../storage/storage';

@Injectable()
export class Request {

  // constructor(public _http: Http, private _storage: StorageService, private _util: Util/*, private _syncQueue: SyncQueue*/) {
  // }

  get(url: string, saveCache: boolean = true, options?: RequestOptionsArgs) {
    // return this._http.get(url, options)
    //   .map((res) => {
    //     let json = res.json();
    //     if (saveCache)
    //       this._storage.set(this._util.getHashFromUrl(url), json);
    //     return json;
    //   })
    //   .catch((err) => {
    //     return this._storage.get(this._util.getHashFromUrl(url))
    //       .then((data) => {
    //         if (data != null && data != undefined) {
    //           return data;
    //         } else {
    //           Observable.throw('No data cached to this url [' + url + ']');
    //         }
    //       });
    //   });
  }

  // post(url: string, body: any, saveCache: boolean = true, options?: RequestOptionsArgs): Observable<any> {
  //   return this._http.post(url, body, options)
  //     .catch((err) => {
  //       let queueItem = new SyncQueueItem();
  //       queueItem.method = "POST";
  //       queueItem.url = url;
  //       queueItem.body = body;
  //       queueItem.requestOptArgs = options;
  //       return this._syncQueue.push(queueItem);
  //     });
  // }
//Validar erros
}