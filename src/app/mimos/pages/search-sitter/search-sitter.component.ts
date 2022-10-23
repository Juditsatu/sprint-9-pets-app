import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';

import { UserSitter } from '../../interfaces/user-sitter';
import { PlacesService } from '../../services';
import { SittersService } from '../../services/sitters.service';

@Component({
  selector: 'app-search-sitter',
  templateUrl: './search-sitter.component.html',
  styleUrls: ['./search-sitter.component.scss']
})
export class SearchSitterComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor( 
    private sittersService: SittersService,
    private placesService: PlacesService
  ) { }
  // sitters: any[] = [];
  // toggle = true;
  page = 4;

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  @ViewChild('map') divMap!: ElementRef
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [2.176333014914384, 41.404311707558456];

  ngOnInit(): void {
    // this.getSitters();
  }

  //Get value from filter component
  formValue!: FormGroup;

  filters(form: FormGroup) {
    this.formValue = form;
    console.log('form de filter a buscador', this.formValue)
  }

  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/juditsatu/cl8txlq4b00h916pi3v5j6qnw',
      center: this.center,
      zoom: this.zoomLevel,
      scrollZoom: false
    });

    //set current zoom number
    this.map.on('zoom', () => {
      // this.zoomLevel = this.map.getZoom();
      if (this.map.getZoom() < 14) {
        this.map.zoomTo(14);
      }
    });

    //limit max zoom
    this.map.on('zoomend', () => {
      if (this.map.getZoom() > 17) {
        this.map.zoomTo(17);
      }
    });

    this.map.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    })
  }
  saveFavorite(index: number) {
    this.userSittersData[index].like = !this.userSittersData[index].like;
  }

  getClassCSS(index: number): string {
    return this.userSittersData[index].like ? 'bi bi-heart-fill red' : 'bi bi-heart red'
  }

  // getSitters() {
  //   this.sittersService.getAllSitters()
  //     .subscribe({
  //       next: (response: any) => {
  //         this.sitters = response.data;
          
  //         console.log('info sitter',this.sitters)
  //       },
  //       error: (err) => {
  //         console.log(err)
  //       }
  //     })
  // }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomIn(){
    this.map.zoomIn();
  }


  userSittersData: UserSitter[] = [
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Anna',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            15,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Núria',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            18,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Fernando',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            22,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Sofía',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            20,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Raquel',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            23,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Albert',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            12,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Anna',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            30,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Núria',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            12,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Fernando',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            15,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Sofía',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            28,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Raquel',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            17,
      like:             false
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Albert',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            18,
      like:             false
    },
  ]

}
