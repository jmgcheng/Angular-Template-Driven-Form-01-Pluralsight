import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from './customers';
/*
  Customer - use as a class
*/ 


@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer = new Customer();
  /*
    customer - use as instance of a customer
  */ 

  constructor() { }

  ngOnInit(): void {
  }

  /*
    note that template driven form code are almost in the html
    the code in customers.component.html manage the keypress and other validation
    you just need to import FormsModule in the app.module.ts so that ngModel would work in the template
  */ 
  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
  /*
    (customerForm: NgForm)
      - customerForm receives signupForm from (ngSubmit)="save(signupForm)" in template
  */ 
}