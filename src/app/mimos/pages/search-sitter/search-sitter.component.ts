import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { UserSitter } from '../../interfaces/user-sitter';
import { PlacesService, SittersService } from '../../services';

@Component({
  selector: 'app-search-sitter',
  templateUrl: './search-sitter.component.html',
  styleUrls: ['./search-sitter.component.scss']
})
export class SearchSitterComponent implements OnInit {

  constructor( 
    private sittersService: SittersService,
    private placesService: PlacesService,
    config: NgbRatingConfig
    ) { //rating coming soon...
      config.max = 5;
	    config.readonly = true;
     }

  sitters: UserSitter[] = [];

  page = 1;
  loading: boolean = false;

  ngOnInit(): void {
    this.getSitters();
  }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  //Get value from filter component
  formValue!: FormGroup;

  filters(form: FormGroup) {
    this.formValue = form;
    console.log('form de filter a buscador', this.formValue)
  }

  saveFavorite(index: number) {
    this.sitters[index].like = !this.sitters[index].like;
  }

  getClassCSS(index: number): string {
    return this.sitters[index].like ? 'bi bi-heart-fill red' : 'bi bi-heart red'
  }

  getSitters() {
    this.sittersService.getAllSitters()
      .subscribe({
        next: (response: UserSitter[]) => {

          if (response) {
            this.loading = true;
          }

          this.sitters = response

        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  loadingArray: Array<String> = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

}
