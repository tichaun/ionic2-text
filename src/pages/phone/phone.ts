import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Phone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html'
})
export class PhonePage {
 // img:any ="assets/img/aaa.jpg";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonePage');
  }
  // phones(){
  //  this.photoViewer.show('https://mysite.com/path/to/image.jpg');
  // }

}
