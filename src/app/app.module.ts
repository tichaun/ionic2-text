import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CityPicker } from '../providers/city-picker';
import { RiliPage } from '../pages/rili/rili';
import { PhonePage } from '../pages/phone/phone';

import { CityPickerModule } from  "ionic2-city-picker";
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RiliPage,
    PhonePage
  ],
  imports: [
    CityPickerModule,
    CalendarModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true,mode: 'ios'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RiliPage,
    PhonePage
  ],
  providers: [CityPicker,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
