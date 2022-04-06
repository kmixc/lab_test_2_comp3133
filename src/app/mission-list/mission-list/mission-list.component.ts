import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from 'src/network/spacexapi.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  missionlists;

  constructor(
    private spacexapiService: SpacexapiService
  ) { }

  ngOnInit() {
    this.missionlists = this.spacexapiService.getMissionList();
  }

}
