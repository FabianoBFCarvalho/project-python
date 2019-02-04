import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DetailsComponent } from '../components/details';
import { ContactPage } from '../pages/contact/contact';
import { DealPage } from '../pages/deal/deal';
import { HomePage } from '../pages/home/home';
import { PropertyPage } from '../pages/property/property';
import { ContactService } from '../service/contact.service';
import { DealService } from '../service/deal.service';
import { PropertiesService } from '../service/property.service';
import { MyApp } from './app.component';
import { AppService } from '../service/app.service';
import { RequestService } from '../service/request.service';
import { PropertyForm } from '../pages/property/property-form';
import { DealForm } from '../pages/deal/deal-form';
import { ContactForm } from '../pages/contact/contact-form';
import { ContactSearch } from '../pages/contact/search-contact';
import { DealSearch } from '../pages/deal/deal-search';
import { PropertySearch } from '../pages/property/property-search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PropertyPage,
    ContactPage,
    DealPage,
    DetailsComponent,
    PropertyForm,
    DealForm,
    ContactForm,
    ContactSearch,
    DealSearch,
    PropertySearch
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PropertyPage,
    ContactPage,
    DealPage,
    DetailsComponent,
    PropertyForm,
    DealForm,
    ContactForm,
    ContactSearch,
    DealSearch,
    PropertySearch
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertiesService,
    DealService,
    ContactService,
    AppService,
    RequestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
