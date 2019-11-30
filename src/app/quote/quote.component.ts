import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[];
  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor(){
    this.quote=[
      new Quote(1,'Life is drama play your part.','dont wait for opportunities create it',new Date(2019,9,14)),
      new Quote(2,'The problem with Africa is that people with ideas have no powers and people with powers have no ideas','by PLO',new Date(2019,9,14)),
      new Quote(3,'There is no hygiene in African plitics','My african quote',new Date(2019,9,14)),
      new Quote(4,'The African founder fathers.','My african quote',new Date(2019,9,14)),
      new Quote(5,'My mentor Dr Kwame Nkrumah','My african quote',new Date(2019,9,14)),
      new Quote(6,'Seek ye the kingdom of African politics.','My african quote',new Date(2019,9,14)),
    ];
    
  } 
  addNewGoal(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  ngOnInit() {
  }


}