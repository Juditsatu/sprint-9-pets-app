import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '../../interfaces/places';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = '';
  removeDiv: boolean = false;

  constructor( 
    private placesService: PlacesService, 
    private mapService: MapService,
    private router: Router
  ) { }

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo(place: Feature) {
    this.router.navigateByUrl('/search');
    this.places.length = 0;

    this.selectedId = place.id;

    const [ lng, lat ] = place.center;
    this.mapService.flyTo([lng, lat])

  }

}
