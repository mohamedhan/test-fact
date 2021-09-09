import { Component } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

// var saveAs = require('file-saver');
 import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numericalValue=0;
  randomNumbers:number[]=[];
  rgbNumbers:number[][]=[];
  fileUrl:SafeValue="";

  constructor(private sanitizer: DomSanitizer) {  }
  generateNumbers(){
    // reset randomNumbers
    this.randomNumbers=[]
    // fill randomNumbers with x random values
    for (let i = 1; i <= this.numericalValue; i++) {
      this.randomNumbers.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
    }
    // fill rgbNumbers with tables that contain three values ​​(rgb)  which will be the color of the svg 
    this.rgbNumbers =this.randomNumbers.map((el, i) =>
    el === 0
      ? [127.5,
         127.5, 0]
      :  el<0? [Math.round(((100-Math.abs(el))/200)*255),
         Math.round(((Math.abs(el)+100)/200)*255), 0] 
         : 
         [Math.round(((Math.abs(el)+100)/200)*255),
          Math.round(((100-Math.abs(el))/200)*255), 0]
  )
  }
  // 
  async generateImage(){
    var node:any = document.querySelector('.image-section');
    try {
      // get url of the image
      let dataUrl=await      htmlToImage.toPng(node);
      // download image 
      let byteCharacters=atob(dataUrl.slice(22))
     let  byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      var byteArray = new Uint8Array(byteNumbers);
      
      let blob = new Blob([byteArray], {"type": "image/jpeg"});
        console.log(navigator)
          if(navigator.msSaveBlob){
            let filename = 'fichier';
            navigator.msSaveBlob(blob, filename);
          } else {
            let link = document.createElement("a");
      
            link.href = URL.createObjectURL(blob);
      
            link.download = 'fichier';
      
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
    } catch (error) {
      console.error('oops, something went wrong!', error);
    }
  }
}
