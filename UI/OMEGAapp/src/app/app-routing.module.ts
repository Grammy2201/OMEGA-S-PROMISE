import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { DonateComponent } from './Donate/donate.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
      title: "Home Page"
  },
    {
      path: "'./Donate/donate.component.html'",
      component: DonateComponent,
        title: "Donate Page"
    },

    {
      path: "contact",
      component: ContactComponent,
        title: "Contact Page"
    },

    {
      path: "about",
      component: AboutComponent,
        title: "About Page"
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