import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymenthubService {

  channelConnectorURL = "https://webhook.site/68282e61-9171-4fa3-a74a-471648099dfd";
  private http: HttpClient;

  constructor(private handler: HttpBackend) { 
    this.http = new HttpClient(handler);
  }

  createGsmaTransaction(transactionRequest: any): Observable<any> {
    return this.http.post(this.channelConnectorURL, transactionRequest, {observe: 'response'});
  }

}
