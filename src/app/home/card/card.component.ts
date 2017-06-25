import { Component, OnInit } from '@angular/core';

// github service
import { GithubService } from '../services/github.service';

@Component({
  selector: 'ba-card',
  templateUrl: './card.component.html',
  styles: [`
    .img-fa{
      font-size: 25px;
    }
    .center-text{
      text-align: center;
    }
  `]
})
export class CardComponent implements OnInit {

  info: object;

  constructor(public _githubService: GithubService) { }

  ngOnInit() {
    this._githubService.getData()
      .subscribe((data) => {
        this.info = data;
        console.log(this.info);
      });
  }

}
