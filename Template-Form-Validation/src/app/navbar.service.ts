import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NavbarService {

  constructor(private httpClient: Http) { }

  fecthData() {
    return this.httpClient.get('https://my-json-server.typicode.com/nigamrahul/demo/db')
      .map(res => {
        return res.json();
      })
  }
}
