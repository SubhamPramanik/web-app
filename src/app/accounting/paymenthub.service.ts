import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymenthubService {

  channelConnectorURL = "https://thingproxy.freeboard.io/fetch/https://polar-oasis-52545.herokuapp.com/channel/gsma/transfer";
  private http: HttpClient;
  private headers: HttpHeaders;

  constructor(private handler: HttpBackend) { 
    this.http = new HttpClient(handler);
    this.headers = new HttpHeaders({ 'Platform-TenantId': environment.fineractPlatformTenantId });
    // this.headers.set("Fineract-Platform-TenantId", environment.fineractPlatformTenantId);
  }

  createGsmaTransaction(transactionRequest: any): Observable<any> {
    return this.http.post(this.channelConnectorURL, transactionRequest, {observe: 'response',  headers: this.headers });
  }

}
