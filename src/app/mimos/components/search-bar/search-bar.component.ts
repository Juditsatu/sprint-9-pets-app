import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  showSearchResults: boolean = false;

  private debounceTimer?: NodeJS.Timeout;

  constructor( 
    private placesService: PlacesService,
    private mapService: MapService
    ) { }


  onQueryChanged(query: string = '') {
    
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query)
    }, 500);
  }

  toggleSearch() {
    this.showSearchResults = !this.showSearchResults;

    if(!this.showSearchResults) {
      this.mapService.removeMarkers();
    }
  }

}
