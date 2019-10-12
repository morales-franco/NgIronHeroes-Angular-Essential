import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: ["./rating.component.css"]
})
export class RatingComponent implements OnInit, OnChanges {

  @Input() rating : number = 0;
  @Output() notifyRatingClicked : EventEmitter<string> =
        new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges() {
    

    
  }

  onClick(): void {
    this.notifyRatingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
