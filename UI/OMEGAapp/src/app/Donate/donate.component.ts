import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  constructor(private router: Router) {}

  navigateToStripePayment() {
    this.router.navigate(['../stripepayment']);
  }
}
