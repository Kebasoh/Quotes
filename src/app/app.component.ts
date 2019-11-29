import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote:Quote[]
   

  constructor(){
    this.quote=[
      {id:1, name:'Life is drama play your part.'},
      {id:2,name:'Patriotism in Africa'},
      {id:3,name:'There is no hygiene in African plitics'},
      {id:4,name:'The African founder fathers.'},
      {id:5,name:'My mentor Dr Kwame Nkrumah'},
      {id:6,name:'Seek ye the kingdom of African politics.'},
    ]
  } 
}




