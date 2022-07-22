import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdSerService } from 'src/app/Service/admin_service/ad-ser.service';
import { Activity } from '../../tsFiles/activity';


@Component({
  selector: 'app-ad-activities',
  templateUrl: './ad-activities.component.html',
  styleUrls: ['./ad-activities.component.css']
})
export class AdActivitiesComponent implements OnInit {

  activites : Activity[] = [];

  constructor(private api :AdSerService ) { }

  getActivities(){
   
  }

  ngOnInit(): void {
    this.api.getAllActivities().subscribe((Response)=>{
      this.activites=Response;
    })
  }

}
