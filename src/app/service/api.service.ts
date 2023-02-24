import { Character } from 'src/app/models/api/character-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiReturn } from '../models/api-return';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL_API_CHARACTER:string = 'https://rickandmortyapi.com/api/character';
  public URL_API_LOCATION:string = 'https://rickandmortyapi.com/api/location';
  public URL_API_EPISODE:string = 'https://rickandmortyapi.com/api/location';

  constructor(public http: HttpClient) { }

  getCharacterList() {
    return this.http.get<ApiReturn>(this.URL_API_CHARACTER);
  }

  getCharacterByName(id: string) {
    return this.http.get<Character>(`${this.URL_API_CHARACTER}/${id}`);
  }

  getLocationList() {
    return this.http.get<ApiReturn>(this.URL_API_LOCATION);
  }

  getEpisodeList() {
    return this.http.get<ApiReturn>(this.URL_API_EPISODE);
  }
}
