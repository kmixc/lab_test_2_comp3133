import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionDetailsComponent } from './mission-details/mission-details/mission-details.component';
import { MissionListComponent } from './mission-list/mission-list/mission-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionDetailsComponent,
    MissionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
