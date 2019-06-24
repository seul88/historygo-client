import { Component, OnInit } from '@angular/core';
import { Question } from './model/question';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions : Question[] = [];

  constructor(private apiService : ApiService) { 
  }

  ngOnInit() {
    this.getAllQuestions();
  }

  public getAllQuestions(){
    this.apiService.getAllQuestions().subscribe(
        res => {
          this.questions=res;
        },
        err => {
          alert("Error...");
        }
    );
  }

}
