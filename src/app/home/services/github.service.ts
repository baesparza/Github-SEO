import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class GithubService {

    url: string = 'https://api.github.com/users/baesparza';

    constructor(private http: Http) {}

    getData() {
    return this.http.get( this.url )
      .map( res => res.json() );

  }
}
