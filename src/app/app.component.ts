import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sprint-9-pets-app';

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.apiKey;
  }
}
