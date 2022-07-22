import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdSerService {

  constructor(private http: HttpClient) { }

getAllActivities(){
  return this.http.get<any>("http://localhost:8091/appadmin/actall");
}

}
