import { Component, OnInit } from '@angular/core';
import {LocalDataModel} from './localData.model';

@Component({
  selector: 'app-provide-activity',
  templateUrl: './provide-activity.component.html',
  styleUrls: ['./provide-activity.component.css']
})
export class ProvideActivityComponent implements OnInit {

  data: Array<LocalDataModel> = [];
  productiveWork = '';
  entertainment = '';
  otherWork = '';
  rating = '';
  comment = '';

  constructor() { }

  ngOnInit() {
  }

  onRatingClicked(rate) {
    this.rating = rate.rating;
  }

  onActivitySubmit() {

    const dataObj = new LocalDataModel();
    dataObj.comment = this.comment;
    dataObj.rating = this.rating;

    //  for dataObj.work
    if (this.productiveWork !== '') { dataObj.work = this.productiveWork; }
    else if (this.entertainment !== '') { dataObj.work = this.entertainment; }
    else { dataObj.work = this.otherWork; }

   // dataObj.date = Math.floor(Date.now() / 3600000);
    const some = (JSON.parse(localStorage.getItem(String(localStorage.length)))[0].date) + 1;
    dataObj.date = some;
    this.data.push(dataObj);

    const length = localStorage.length;
    const x = JSON.parse(localStorage.getItem(String(localStorage.length)))[0].date;
    const y =  Math.floor(Date.now() / 3600000);
    const diff = y - x;

    localStorage.setItem(String(length + 1), JSON.stringify(this.data));

  }


}


