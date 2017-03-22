import { Component,ViewChild } from '@angular/core';

import { NavController,Slides } from 'ionic-angular';
import { PhonePage } from '../phone/phone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

	mySlideOptions = {
		autoplay:2000,//设置几秒换一次
	    initialSlide: 0,//开始时显示第几个
	    pager:true,//是否显示圆表
	    loop: true,//是否循环
	  	speed:300//循环的速度
  	};
  constructor(public navCtrl: NavController) {
     
  }

  ionViewWillEnter(){
  		this.slider.startAutoplay();
  }
  ionViewWillLeave(){
    this.slider.stopAutoplay();
  }
  slideChanged(){
    let a = this.slider.getActiveIndex();
    console.log(a)
  }
  

  phone(){
    this.navCtrl.push(PhonePage);
  }

}
