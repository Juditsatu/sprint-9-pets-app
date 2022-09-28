import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-search-sitter',
  templateUrl: './search-sitter.component.html',
  styleUrls: ['./search-sitter.component.scss']
})
export class SearchSitterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.176333014914384, 41.404311707558456],
      zoom: 15,
      scrollZoom: false
    });
  }

}
