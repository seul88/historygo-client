import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { ApiService } from '../api/api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users : User[] = [];

  constructor(private apiService : ApiService) { 
    this.getAllUsers();
  }

  ngOnInit() {
  }

  public getAllUsers(){

    this.apiService.getAllUsers().subscribe(
      res => {
        this.users=res;
      },
      err => {
        alert("Error.");
       }
    );
  }



  public deleteUserById(user : User){
    this.apiService.deleteUserById(user.id).subscribe(
      res => {
        let indexOfUser = this.users.indexOf(user);
        this.users.splice(indexOfUser, 1);
      },
      err => {
        alert("Error.");
       }
    );
  }
  

}
