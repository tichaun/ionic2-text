import { Component } from '@angular/core';
import {CityPicker } from '../../providers/city-picker';
import { NavController,NavParams,ToastController } from 'ionic-angular';
import { RiliPage } from '../rili/rili';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  cityData: any[]; //城市数据
  cityName:string = '北京市 北京市 东城区'; //初始化城市名
  code:string; //城市编码

  constructor(public navCtrl: NavController,
              public cityPickerSev: CityPicker,
              public navParams: NavParams,
              public toast:ToastController) {
      this.setCityPickerData();

  }

  ionViewDidEnter(){
    console.log("我老了")
    let toast = this.toast.create({
      message: '你好你好你好',
      duration: 3000,
      position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('关闭 toast');
    
  });

  toast.present();
  }
  /**
   * 获取城市数据
   */
  setCityPickerData(){
    this.cityPickerSev.getCitiesData()
      .then( data => {
        console.log(data)
        this.cityData = data;
      });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event){
    console.log(event);
    this.code = event['region'].value
  }

  rili(){
    this.navCtrl.push(RiliPage);
  }

}
