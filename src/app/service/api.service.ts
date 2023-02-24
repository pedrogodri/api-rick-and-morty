import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiReturn } from '../models/api-return';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL_API_CHARACTER:string = 'https://rickandmortyapi.com/api/character';

  constructor(public http: HttpClient) { }

  getCharacterList() {
    return this.http.get<ApiReturn>(this.URL_API_CHARACTER);
  }
}
