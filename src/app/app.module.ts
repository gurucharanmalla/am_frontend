import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './Admin/pages/admin-page/admin-page.component';
import { HomeComponent } from './Home_Page/home/home.component';
import { AdActivitiesComponent } from './Admin/pages/ad-activities/ad-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomeComponent,
    AdActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
