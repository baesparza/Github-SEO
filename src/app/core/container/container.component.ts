import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-container',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
