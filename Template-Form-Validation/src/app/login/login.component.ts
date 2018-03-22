import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
   }

  ngOnInit() {
    
  }

  NavigateToRegisteration(){
    this.router.navigate(['register'])
  }

  Login(userDetails){
    if(userDetails.email == 'admin@gmail.com' && userDetails.pass == 'admin123'){
      alert('You! Logged in Successfully ! Hurray !')
      // this.popup.show();
    }else{
      alert('Please Try Again!!!')
      // this.popup.show();
    }

  }
}
