import { Injectable } from '@angular/core';

import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';

import { Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  // constructor( private router: Router ) { }

  private map: Map | undefined;
  private markers: Marker[] = [];
 
  get isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('Map is not ready');

    this.map?.flyTo({
      zoom: 15,
      center: coords
    });
    
  }

  createMarkersFromPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this.map) throw Error('Map not initialized');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];
    
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup()
      .setHTML(`
      <h6>${place.text}</h6>
      <span>${place.place_name}</span>
      `);
      const newMarker = new Marker()
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.map);
      
      newMarkers.push(newMarker);
    }
    
    this.markers = newMarkers;
    
    if(places.length === 0) return;

    //Limits del mapa
    const bounds = new LngLatBounds();

    newMarkers.forEach( marker => bounds.extend( marker.getLngLat() ));
    bounds.extend(userLocation)

    this.map.fitBounds(bounds, {
      padding: 200
    })

  }

  removeMarkers() {
    this.markers.forEach( marker => marker.remove());
  }

}