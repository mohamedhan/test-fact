import { Component,ViewChild,ElementRef } from '@angular/core';
import * as htmlToImage from 'html-to-image';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-fact';
  num=0;
  randomArray:number[]=[];
  randomArrayColors:number[][]=[];
  // @ViewChild('screen') screen: ElementRef<HTMLInputElement> = {} as ElementRef
  // @ViewChild('canvas') canvas: ElementRef<HTMLInputElement> = {} as ElementRef;
  // @ViewChild('downloadLink') downloadLink: ElementRef<HTMLInputElement> = {} as ElementRef;
  // downloadImage(){
  //   html2canvas(this.screen.nativeElement).then(canvas => {
  //     this.canvas.nativeElement.src = canvas.toDataURL();
  //     this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
  //     // this.downloadLink.nativeElement.download = 'marble-diagram.png';
  //     this.downloadLink.nativeElement.click();
  //   });
  // }
  generateNumbers(){
    // this.randomArray=[]
    for (let i = 1; i <= this.num; i++) {
      this.randomArray.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
    }
    // this.randomArrayColors=this.randomArray.map(el=> el<0? el/100:  el*10 )
    this.randomArrayColors =this.randomArray.map((el, i) =>
    el === 0
    // g (el*255)/200
      ? [127.5,
         127.5, 0]
        //  r
      :  el<0? [Math.round(((100-Math.abs(el))/200)*255),
         Math.round(((Math.abs(el)+100)/200)*255), 0] 
         : 
         [Math.round(((Math.abs(el)+100)/200)*255),
          Math.round(((100-Math.abs(el))/200)*255), 0]
  )
  }
  
  generateImage(){
    var node:any = document.getElementById('image-section');
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

 
}
