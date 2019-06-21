import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlacesComponent } from './places/places.component';
import { QuizComponent } from './quiz/quiz.component';
import { UsersComponent } from './users/users.component';


const appRoutes : Routes = [
  {
    path : 'places',
    component : PlacesComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'quiz',
    component : QuizComponent
  },
  {
    path : '**',
    component: PlacesComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlacesComponent,
    QuizComponent,
    UsersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
