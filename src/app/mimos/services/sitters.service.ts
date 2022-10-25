import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSitter } from '../interfaces/user-sitter';

@Injectable({
  providedIn: 'root'
})
export class SittersService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getAllSitters(): Observable<UserSitter[]> {
    return this.http.get<UserSitter[]>(`${this.baseUrl}/user/`);
  }
}
