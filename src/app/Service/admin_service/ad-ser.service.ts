import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Activity } from 'src/app/Admin/tsFiles/activity';

@Injectable({
  providedIn: 'root'
})
export class AdSerService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8091/appadmin/actall";

getAllActivities(){
  return this.http.get<Activity[]>(this.url);
}

getAllActivitiesofCustomer(){
  
}

}
