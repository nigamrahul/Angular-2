import { Component, OnInit, Input } from '@angular/core';
import { NavbarService } from '.././navbar.service';
import {LoginComponent} from '../login/login.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NavbarService]
})
export class HeaderComponent implements OnInit {
  hideHeader1:boolean;
  // @Input() childMessage: string;
  constructor(private navBar: NavbarService) {
    this.hideHeader1=true
   }
  navrbarPaths = ['/about','/register','/login','/contact-detail'];
  navbarItem = [];
  
  ngOnInit() {
    this.showData();
    console.log(this.navrbarPaths)
  }

  /* Accessing the Service function & variable in Component */
  showData() {
    this.navBar.fecthData()
      .subscribe(res => {
        console.log(res, 'res11')
        this.navbarItem = res.posts;
        console.log(this.navbarItem, 'items')
      });
  }
  hideHeader(){
    this.hideHeader1=false
    // console.log(this.childMessage)
  }
}
