import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uptodate',
  templateUrl: './uptodate.component.html',
  styleUrls: ['./uptodate.component.css']
})
export class UptodateComponent implements OnInit {

  constructor( private router: Router) { }
  y =  Math.floor(Date.now() / 3600000);

  ngOnInit() {

    const length = localStorage.length;
    const x = JSON.parse(localStorage.getItem(String(length)))[0].date;
   // console.log(x);

   // const y =  Math.floor(Date.now() / 3600000);
    const diff = this.y - x;


    for (let i = 1; i <= diff + 1; i++) {
      if (i < diff - 1) {
          console.log('call provide actvity');
          this.router.navigate(['provideActivity']);

      }

    }
    }


  viewHistory() {

    this.router.navigate(['activityHistory']);

  }

}
