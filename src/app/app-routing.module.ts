import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailsComponent } from './mission-details/mission-details/mission-details.component';
import { MissionListComponent } from './mission-list/mission-list/mission-list.component';

const routes: Routes = [
  { path: '', component: MissionListComponent },
  { path: 'spacexapi/:flight_number', component: MissionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
