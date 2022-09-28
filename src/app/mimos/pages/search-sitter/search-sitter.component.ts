import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { UserSitter } from '../../interfaces/user-sitter';

@Component({
  selector: 'app-search-sitter',
  templateUrl: './search-sitter.component.html',
  styleUrls: ['./search-sitter.component.scss']
})
export class SearchSitterComponent implements OnInit {

  constructor() { }

  toggle = true;

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.176333014914384, 41.404311707558456],
      zoom: 15,
      scrollZoom: false
    });
  }

  saveFavorite(index: number) {
    this.toggle = !this.toggle;
  }

  getClassCSS(): string {
    return this.toggle ? 'bi bi-heart light-red' : 'bi bi-heart-fill red'
  }

  userSittersData: UserSitter[] = [
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Anna',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            15
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Núria',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            18
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Fernando',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            22
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Sofía',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            20
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Raquel',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            23
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Albert',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            12
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Anna',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            30
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Núria',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            12
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Fernando',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            15
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-1.png',
      name:             'Sofía',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            28
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-2.png',
      name:             'Raquel',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     true,
      price:            17
    },
    {
      profilePicture:   '/assets/img/gallery/user-card-3.png',
      name:             'Albert',
      titleDesc:        'Caring, loving and friendly',
      desc:             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorum explicabo, quo quos fuga animi expedita voluptatum culpa nisi facere recusandae rem? Vero deleniti distinctio ullam suscipit culpa fugiat est.',
      address:          'Barcelona, 08002',
      verifiedUser:     false,
      price:            18
    },
  ]

}
