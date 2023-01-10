import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuotesProvider {

  constructor(public http: HttpClient) {
    
  }
  //this function fetches the data from the quote website, the data is then displayed on the home page
  getQuotes(): Observable<any>{
    return this.http.get("https://api.quotable.io/random");

  }

}
