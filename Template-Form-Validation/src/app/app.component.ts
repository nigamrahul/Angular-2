import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public user: User;

  constructor(){};

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirm_Password: ''
    }
  }

  register(value){
      try{
        console.log('val',value)
        if(value.pass !== value.confirm_pass)
        alert('Please enter the same password in Confirm Password as u write in Password box!')
      } catch (e) {
          console.log("Got an error!",e);
          throw e; // rethrow to not marked as handled
      }
  }

}
