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
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }

  constructor(){
    this.quote=[
      new Quote(1,'Life is drama play your part.','dont wait for opportunities create it'),
      new Quote(2,'The problem with Africa is that people with ideas have no powers and people with powers have no ideas','by PLO'),
      new Quote(3,'There is no hygiene in African plitics','My african quote'),
      new Quote(4,'The African founder fathers.','My african quote'),
      new Quote(5,'My mentor Dr Kwame Nkrumah','My african quote'),
      new Quote(6,'Seek ye the kingdom of African politics.','My african quote'),
    ];
    
  } 

  ngOnInit() {
  }


}
