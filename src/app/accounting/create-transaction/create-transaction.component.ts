import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AccountingService } from '../accounting.service';

@Component({
  selector: 'mifosx-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  transactionForm: FormGroup;
  identityTypeData: any;
  currencyData: any;

  constructor(private formBuilder: FormBuilder,
    private accountingService: AccountingService, // Change this to custom transaction service
    private route: ActivatedRoute,
    private router: Router) {
      this.identityTypeData = ["MSISDN"];
      this.currencyData = ["TZS"];
     }

  ngOnInit() {
    this.createTransactionForm();
  }

  createTransactionForm() {
    this.transactionForm = this.formBuilder.group({
      'payerIdentifierType': ['', Validators.required],
      'payerIdentifier': ['', Validators.required],
      'payeeIdentifierType': ['', Validators.required],
      'payeeIdentifier': ['', Validators.required],
      'amount': ['', Validators.required],
      'currency': ['', Validators.required]
    });
  }

  submit() {
    console.log(this.transactionForm.value);
  }

}
