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
    if (confirm("Are you sure, you want to delete "+place.name+" from table places?"))
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


  public addNewPlace(){
    let newPlace : Place = {
      description : "Place description",
      name : "Place name",
      points : 0,
      visits : 0,
      rating : 0.0,
      id : null, 
      latitude : null, 
      year : null,
      longitude : null
    }
    this.places.push(newPlace);
  }


  public modifyPlace(place : Place){
    this.apiService.savePlaceChanges(place).subscribe(
      res => {},
      err => {
        console.log(err);
      }
    )
  }
}