import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/of';

@Injectable({
  providedIn: 'root'
})
export class StaticPageService {

  constructor(private httpClient: HttpClient) { }
  getPage(fileName: string): Observable<string> {
    return this.httpClient.get('assets/' + fileName, {responseType: 'text'});
  }
}
