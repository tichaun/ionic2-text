import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,AlertController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  enableBack:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              public viewCtrl: ViewController) {
   // this.viewCtrl.enableBack = this.enableBack;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }
  backhome(){
    this.navCtrl.push(TabsPage)
  }
  backs(){
     let alert = this.alertCtrl.create({
        title: '提示',
        message: '确定离开房间',
        buttons: [
          {
            text: '取消',
            handler: () => {
              console.log('取消 clicked');
            }
          },
          {
            text: '确定',
            handler: () => {
              console.log('确定 clicked');
             this.navCtrl.pop();
            }
          }
        ]
      });
      console.log(alert);
      alert.present();
  }

}
