import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../places/model/place';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:8080";
  private GET_ALL_PLACES_URL = this.SERVER_URL +'/places/all';

  constructor(private http : HttpClient) { }


  getAllPlaces() : Observable<Place[]>{
    return this.http.get<Place[]>(this.GET_ALL_PLACES_URL);
  }
}
