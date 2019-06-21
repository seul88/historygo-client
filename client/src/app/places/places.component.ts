import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './model/place';
import { ApiService } from '../api/api-service.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places : Place[] = [];

  constructor(private apiService : ApiService) { }


  ngOnInit() {
    this.getAllPlaces();
  }

  public getAllPlaces(){
    let url = "http://localhost:8080/places/all";
    this.apiService.getAllPlaces().subscribe(
        res => {
          this.places=res;
        },
        err => {
          alert("Error...");
        }
    );
  }

}
