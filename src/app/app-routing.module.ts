import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdActivitiesComponent } from './Admin/pages/ad-activities/ad-activities.component';
import { AdminPageComponent } from './Admin/pages/admin-page/admin-page.component';

const routes: Routes = [
  {path: 'adminPage', component: AdminPageComponent },
  {path: 'ad_act', component: AdActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
