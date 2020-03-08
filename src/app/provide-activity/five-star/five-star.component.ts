import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-five-star',
  templateUrl: './five-star.component.html',
  styleUrls: ['./five-star.component.css']
})
export class FiveStarComponent implements OnInit {

  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating
    });
  }

}
