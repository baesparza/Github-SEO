import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-shell',
  template: `
    <section>
      <ba-main></ba-main>
      <ba-container></ba-container>
    </section>   
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
