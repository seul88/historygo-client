import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../places/model/place';
import { Question } from '../quiz/model/question';
import { User } from '../users/model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:8080";
  private GET_ALL_PLACES_URL = this.SERVER_URL +'/places/all';
  private GET_ALL_QUESTIONS_URL = this.SERVER_URL + '/questions/all';
  private GET_ALL_USERS_URL = this.SERVER_URL + '/users/all';
  private PLACE_URL = this.SERVER_URL + '/places';
  private USERS_URL = this.SERVER_URL + '/users';
  private QUIZ_URL = this.SERVER_URL +'/questions';
  
  constructor(private http : HttpClient) { }


  getAllPlaces() : Observable<Place[]>{
    return this.http.get<Place[]>(this.GET_ALL_PLACES_URL);
  }

  getAllQuestions() : Observable<Question[]>{
    return this.http.get<Question[]>(this.GET_ALL_QUESTIONS_URL);
  }

  getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.GET_ALL_USERS_URL);
  }

  deletePlaceById(id : number) : Observable<any>{
    return this.http.delete(this.PLACE_URL + '/id/' + id);
  }

  deleteUserById(id : number) : Observable<any>{
    return this.http.delete(this.USERS_URL +'/id/' +id);
  }

  deleteQuizQuestionById(id : number) : Observable<any>{
    return this.http.delete(this.QUIZ_URL + '/id/' + id);
  }

  savePlaceChanges(place : Place) : Observable<any>{
    return this.http.post(this.PLACE_URL, place);
  }

  saveQuestionChanges(question : Question) : Observable<any>{
    return this.http.put(this.QUIZ_URL, question);
  }

}