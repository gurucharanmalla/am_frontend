import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './Admin/pages/admin-page/admin-page.component';
import { HomeComponent } from './Home_Page/home/home.component';
import { AdActivitiesComponent } from './Admin/pages/ad-activities/ad-activities.component';
import { AdCustomerComponent } from './Admin/pages/ad-customer/ad-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AdTicketComponent } from './Admin/pages/ad-ticket/ad-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent, 
    HomeComponent,
    AdActivitiesComponent,
    AdCustomerComponent,
    AdTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
