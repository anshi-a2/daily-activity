import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-history',
  templateUrl: './activity-history.component.html',
  styleUrls: ['./activity-history.component.css']
})
export class ActivityHistoryComponent implements OnInit {
  length = localStorage.length;
  constructor() { }

  ngOnInit() {

    for (let i = this.length; i > this.length - 10; i--) {
     let data = JSON.parse(localStorage.getItem(String(i)))[0];
     console.log(data);
    }

  }


}
