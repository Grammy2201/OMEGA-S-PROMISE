import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { DonateComponent } from './Donate/donate.component';
import { HomeComponent } from './Home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripepaymentComponent } from './stripepayment/stripepayment.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    DonateComponent,
    HomeComponent,
    StripepaymentComponent
  ],

    
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StripepaymentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
