import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '' +
  '<button (click)="toggle()">Toggle</button>' +
  ' <span [ngClass]="{active : isActive}">{{name}}</span>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name = 'Ashwani';
  isActive = true;
  toggle() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
