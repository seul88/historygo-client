import { Component, OnInit } from '@angular/core';
import { Question } from './model/question';
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


  public deleteQuestion(question : Question){
    
    if (confirm("Are you sure, you want to delete question #"+question.id+" from table questions?")){
     if (question.id === null) {
      let indexOfQuestion = this.questions.indexOf(question);
      this.questions.splice(indexOfQuestion,1);
     }
     else{
      this.apiService.deleteQuizQuestionById(question.id).subscribe(
        res => {
          let indexOfQuestion = this.questions.indexOf(question);
          this.questions.splice(indexOfQuestion,1);
        },
        err => {
          alert("Error...");
        }
      );
     }
    }
  }


  public addNewQuestion(){
    let newQuestion : Question = {
        a: null,
        b: null,
        c: null,
        d: null,
        correctAnswer:  null,
        id:  null,
        question:  null,
      }
    this.questions.push(newQuestion);
  }


  public modifyQuestion(question : Question){
    this.apiService.saveQuestionChanges(question).subscribe(
      res => {},
      err => {  console.log(err);}
    )
  }
  
}
