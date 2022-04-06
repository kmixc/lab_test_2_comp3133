import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from 'src/network/spacexapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  flightid;
  flight_details;

  constructor(
    private spacexapiService: SpacexapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.flightid = this.route.snapshot.params['flight_number'];
    this.flight_details = this.spacexapiService.getMissionDetials(this.flightid)
  }

}
