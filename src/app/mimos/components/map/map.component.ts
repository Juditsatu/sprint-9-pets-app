import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Marker, Popup, Map } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef
  // map!: mapboxgl.Map;

  zoomLevel: number = 15;
  center: [number, number] = [2.185063, 41.430795];

  constructor( 
    private placesService: PlacesService, 
    private mapService: MapService 
  ) { }

  ngOnDestroy(): void {
    // this.map.off('zoom', () => {});
    // this.map.off('zoomend', () => {});
    // this.map.off('move', () => {});
  }

  ngAfterViewInit(): void {

    // if (!this.placesService.userLocation) throw Error('No hay placesService.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/juditsatu/cl8txlq4b00h916pi3v5j6qnw', // style URL
      center: [2.185063, 41.430795],
      zoom: this.zoomLevel,
    });

    const popup = new Popup()
    .setHTML(`
      <h6> I'm here </h6>
      <span> I'm here in this part of the world </span>
    `);

    //set current zoom number
    // this.map.on('zoom', () => {
    //   // this.zoomLevel = this.map.getZoom();
    //   if (this.map.getZoom() < 14) {
    //     this.map.zoomTo(14);
    //   }
    // });

    // //limit max zoom
    // this.map.on('zoomend', () => {
    //   if (this.map.getZoom() > 17) {
    //     this.map.zoomTo(17);
    //   }
    // });

    new Marker({ color: '#E94842' })
      .setLngLat( [2.185063, 41.430795] )
      .setPopup( popup )
      .addTo( map )

    this.mapService.setMap( map );
      
  }

  // zoomOut() {
  //   this.map.zoomOut();
  // }

  // zoomIn(){
  //   this.map.zoomIn();
  // }

}
