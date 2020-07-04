import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { PaymenthubService } from '../paymenthub.service';

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
    private paymentHubService: PaymenthubService,
    public snackBar: MatSnackBar,
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
    const transactionBody = this.transactionForm.value;
    console.log(transactionBody);

    const requestBody = {
      payer: {
        partyIdInfo: {
          partyIdType: transactionBody.payerIdentifierType,
          partyIdentifier: transactionBody.payerIdentifier
        }
      },
      payee: {
        partyIdInfo: {
          partyIdType: transactionBody.payeeIdentifierType,
          partyIdentifier: transactionBody.payeeIdentifier
        }
      },
      amount: {
        amount: transactionBody.amount,
        currency: transactionBody.currency
      }
    }

    this.paymentHubService.createGsmaTransaction(requestBody).subscribe(response => {
      console.log(response);
      this.snackBar.open(`Transaction Response: ${response.status}`, 'Close', {
        duration: 3000
      })
    });
  }

}
