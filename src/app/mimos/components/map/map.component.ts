import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Marker, Popup, Map } from 'mapbox-gl';
import { MapService } from '../../services';

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
    private mapService: MapService 
  ) { }


  ngAfterViewInit(): void {

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/juditsatu/cl8txlq4b00h916pi3v5j6qnw', // style URL
      center: this.center,
      zoom: 15,
      scrollZoom: false
    });

    const popup = new Popup()
    .setHTML(`
      <h6> I'm here </h6>
      <span> I'm here in this part of the world </span>
    `);

    //Add Zoom In and Zoom out buttons
    map.addControl(new mapboxgl.NavigationControl());
    map.setMinZoom(12);
    map.setMaxZoom(17);

    //Marker que indica la posició actual BORRAR al final
    new Marker({ color: '#E94842' })
      .setLngLat( this.center )
      .setPopup( popup )
      .addTo( map )

    this.mapService.setMap( map );
      
  }

}
