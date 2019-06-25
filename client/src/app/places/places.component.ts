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
    this.apiService.getAllPlaces().subscribe(
        res => {
          this.places=res;
        },
        err => {
          alert("Error...");
        }
    );
  }


  public deletePlaceById(place : Place){ 
    this.apiService.deletePlaceById(place.id).subscribe(
      res => {
        let indexOfPlace = this.places.indexOf(place);
        this.places.splice(indexOfPlace,1);
      },
      err => {
        console.log(err);
      }
    );
  }

}