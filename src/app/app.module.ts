import { ThfSyncModule } from '@totvs/thf-sync';
import { Util } from './../providers/util/util';
// import { SyncQueue } from './../providers/sync_queue/sync_queue';
import { EditPage } from './../pages/edit/edit';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { ConnectionBackend } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
// import { THFStorageService } from '@totvs/thf-mobile/app/services/thf-storage/thf-storage.service';
// import { THFEventSourcingService } from '@totvs/thf-mobile/app/services/thf-event-sourcing/thf-event-sourcing.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    ThfSyncModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // SyncQueue,
    // THFStorageService,
    Util,
    // RequestProvider,
    // THFSyncService,
    // THFEventSourcingService
  ]
})
export class AppModule { }
