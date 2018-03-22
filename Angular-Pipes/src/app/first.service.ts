import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import {Subject} from 'rxjs/Rx';
@Injectable()
export class FirstService {

  constructor(private httpClient: Http) { }
  // fecthData(){
  //   // var subject = new Subject();
  //   return this.httpClient.get('assets/student.json').map(
  //   (response)=> response.json()
  //   ).subscribe(
  //     (data) =>{
  //       console.log(data,'data');
  //     }
  //   )
  // }

  fecthData(){
      // var subject = new Subject();
      return this.httpClient.get('assets/student.json')
        .map(res => {
          return res.json();
       })
      }

  
  obj = {
    "id": 1,
    "name": "Rahul",
    "roll-number": 147895745

  }
  success(){
    return "SuccessFull !!!"
  }

}
