import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
@Input() valeur:number[]=[]
  constructor() { }

  ngOnInit(): void {
  }
   getColorString(): string {
     console.log(this.valeur[0])
     console.log(this.valeur[1])
     console.log(this.valeur[2])
    return `rgb(${this.valeur[0]},${this.valeur[1]},${this.valeur[2]}`;
  }
}
