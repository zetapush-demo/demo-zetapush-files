import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';

import { ZetaPushClientConfig, ZetaPushModule } from 'zetapush-angular';
import { Camera } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { Geolocation } from '@ionic-native/geolocation';

import { FileApiProvider } from '../file/file-api.service';
import { FileUpload } from '../file/file-upload.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ZetaPushModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Dialogs,
    Geolocation,
    FileApiProvider, 
    FileUpload,
    { provide: ZetaPushClientConfig, useValue: { sandboxId: 'u3Qq6_72', apiUrl: 'http://hq.zpush.io:9080/zbo/pub/business/' }},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
