import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-home',
  templateUrl: './home.component.html',
  styles: [`
    .main-container{
      margin-top: 15px
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
