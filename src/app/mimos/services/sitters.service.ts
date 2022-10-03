import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SittersService {


  constructor( private http: HttpClient ) { }

  getAllSitters(): Observable<any> {
    return this.http.get<any>('/api/sitter/list');
  }
}
