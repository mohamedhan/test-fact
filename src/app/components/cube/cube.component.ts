import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
@Input() rgbNumber:number[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  // color assignment for svg 
  getColorString(): string {
    return `rgb(${this.rgbNumber[0]},${this.rgbNumber[1]},${this.rgbNumber[2]}`;
  }
}
