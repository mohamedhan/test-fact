import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-fact';
  num=0;
  randomArray:number[]=[0];
  randomArrayColors:number[][]=[];
  generateNumbers(){
    console.log("1")
    // this.randomArray=[]
    for (let i = 1; i <= this.num; i++) {
      this.randomArray.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
    }
    console.log(typeof(this.randomArray))
    console.log(typeof(this.randomArrayColors))
    // this.randomArrayColors=this.randomArray.map(el=> el<0? el/100:  el*10 )
    this.randomArrayColors =this.randomArray.map((el, i) =>  el <= 0
            // 100+el
              ? [Math.round(Math.abs((255 * (100+el)) / 100)), Math.round(Math.abs((255 * el) / 100)), 0]
              : [Math.round(Math.abs((255 * el) / 100)), Math.round(Math.abs((255 * (100-el)) / 100)), 0]
          )

  }
 
}
