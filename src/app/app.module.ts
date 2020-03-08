import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActivityHistoryComponent } from './activity-history/activity-history.component';
import { ProvideActivityComponent } from './provide-activity/provide-activity.component';
import {Routes, RouterModule} from '@angular/router';
import { UptodateComponent } from './uptodate/uptodate.component';
import { FiveStarComponent } from './provide-activity/five-star/five-star.component';

const appRoutes: Routes = [
  {path: '', component: UptodateComponent, pathMatch: 'full'},
  {path: 'uptodate', component: UptodateComponent},
  {path: 'provideActivity', component: ProvideActivityComponent},
  {path: 'activityHistory', component: ActivityHistoryComponent},
  {path: '**', redirectTo: 'uptodate'}
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityHistoryComponent,
    ProvideActivityComponent,
    UptodateComponent,
    FiveStarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
