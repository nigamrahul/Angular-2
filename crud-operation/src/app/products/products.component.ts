import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: Http) { }
  
  productObj:object={};
  confirmationString: string = "New Product has been Added Successfully"
  isAdded:boolean = false;

  /* Function for Adding Product in Product List*/
  addNewProduct = function(addProductDetails){
    this.productObj={
      "name":addProductDetails.name,
      "color":addProductDetails.color
    }
    this.http.post("http://localhost:5555/products/",this.productObj).subscribe(
      (res: Response) =>{    
        this.isAdded = true;
      }
      
    )
  }

  ngOnInit() {
  }

}
