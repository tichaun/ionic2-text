import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalendarController} from "ion2-calendar/dist";

/*
  Generated class for the Rili page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rili',
  templateUrl: 'rili.html'
})
export class RiliPage {
   days:Array<any> = [];
   data:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public calendarCtrl: CalendarController) {

  }

   basic() {
    this.calendarCtrl.openCalendar({
      title:'basic demo',
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }

  setCssClass() {
    this.calendarCtrl.openCalendar({
      cssClass:'my-class',
      isRadio: false,
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }

  dateRange() {
    this.calendarCtrl.openCalendar({
      isRadio: false,
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }

  maxAndMin() {
    this.calendarCtrl.openCalendar({
      from: new Date(2017,1,1),
      to  : new Date(2017,2,5)
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }

  disableWeekdays() {
    this.calendarCtrl.openCalendar({
      disableWeekdays:[0,6]
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }

  settingDisplay() {
    this.calendarCtrl.openCalendar({
      monthTitle:' yyyy 年 mm 月 ',
      weekdaysTitle:["天", "一", "二", "三", "四", "五", "六"],
      closeLabel:''
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }

  daysConfig() {

    let _daysConfig = [
      {
        date:new Date(2017,0,1),
        subTitle:'New Year\'s',
        marked:true
      },
      {
        date:new Date(2017,1,14),
        subTitle:'Valentine\'s',
        disable:true
      },
      {
        date:new Date(2017,3,1),
        subTitle:'April Fools',
        marked:true
      },
      {
        date:new Date(2017,3,7),
        subTitle:'World Health',
        marked:true
      },
      {
        date:new Date(2017,4,31),
        subTitle:'No-Smoking',
        marked:true
      },
      {
        date:new Date(2017,5,1),
        subTitle:'Children\'s',
        marked:true
      }
    ];

    for(let i = 0;  i < 31; i++){
      this.days.push({
        date:new Date(2017,0,i+1),
        marked:true
      })
    }

    _daysConfig.push(...this.days);

    this.calendarCtrl.openCalendar({
      from: new Date(2017,0,1),
      to  : new Date(2017,11.1),
      daysConfig:_daysConfig
    }).then( (res:any) => {
       console.log(res)
       this.data = res }).catch( () => {} )
  }
  // openCalendar(){
  //   this.calendarCtrl.openCalendar({
  //     from:new Date()
  //   })
  //   .then( res => { console.log(res) } );
  // }

}
