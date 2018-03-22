import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private myservice: FirstService) { }

  ngOnInit() {
    // console.log(this.myservice.obj,'oobj')
    // this.myservice.obj["Address"]="Varanasi";
    // console.log(this.myservice.obj)
  }

}
