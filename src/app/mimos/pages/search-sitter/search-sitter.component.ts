import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UserSitter } from '../../interfaces/user-sitter';
import { SittersService } from '../../services';

@Component({
  selector: 'app-search-sitter',
  templateUrl: './search-sitter.component.html',
  styleUrls: ['./search-sitter.component.scss']
})
export class SearchSitterComponent implements OnInit {

  constructor( private sittersService: SittersService) { }

  sitters: UserSitter[] = [];

  page = 1;
  loading: boolean = false;

  ngOnInit(): void {
    this.getSitters();
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

}
