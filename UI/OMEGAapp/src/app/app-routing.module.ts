import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { DonateComponent } from './Donate/donate.component';
import { HomeComponent } from './Home/home.component';
import { StripepaymentComponent } from './stripepayment/stripepayment.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
      title: "Home Page"
  },
    {
      path: 'donate',
      component: DonateComponent,
        title: "Donate Page"
    },

    {
      path: 'contact',
      component: ContactComponent,
        title: "Contact Page"
    },

    {
      path: 'about',
      component: AboutComponent,
        title: "About Page"
    },

    {
      path: 'stripepayment',
      component: StripepaymentComponent
    },

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }