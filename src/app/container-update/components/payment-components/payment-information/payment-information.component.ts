import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css'],
})
export class PaymentInformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sources = [
    { value: 'masterCard', viewValue: 'MasterCard' },
    { value: 'visa', viewValue: 'Visa' },
    { value: 'payPal', viewValue: 'PayPal' },
  ];
}
