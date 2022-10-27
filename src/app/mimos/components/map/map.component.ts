import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Map } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  center: [number, number] = [2.178, 41.397];

  constructor( 
    private mapService: MapService,
    private placesService: PlacesService
  ) { }


  ngAfterViewInit(): void {

    if (!this.placesService.userLocation) throw Error('No hay placesService.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/juditsatu/cl8txlq4b00h916pi3v5j6qnw', // style URL
      center: this.placesService.userLocation,
      zoom: 15,
      scrollZoom: false
    });

    //Add Zoom In and Zoom out buttons
    map.addControl(new mapboxgl.NavigationControl());
    map.setMinZoom(12);
    map.setMaxZoom(17);

    this.mapService.setMap( map );
      
  }

}
