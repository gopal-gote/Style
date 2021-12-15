import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{environment} from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl=environment.apiBaseUrl;
  constructor(
    private http: HttpClient,
  ) {}

  login(payload:any): Observable<any> {
    return this.http.post(this.baseUrl + 'login/',payload);
}
}
