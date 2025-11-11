import { Component, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class Control {
  label = input.required<string>()

  constructor(private hostElement: ElementRef) {}

  onClick(){
    console.log('Clicked!')
    console.log(this.hostElement)
  }
}
