import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';


@Component({
    selector: 'page-feedback',
    templateUrl: 'feedback.html'
})
export class FeedbackPage {
 
  constructor(public navCtrl: NavController,public nav:Nav) {
  }
  
}
