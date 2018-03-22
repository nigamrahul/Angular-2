import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  id:number;
  private header = new Headers({"content-type":"application/json"})

  constructor(private http: Http) { }

  products = [];
  

  ngOnInit() {
    this.fetchData();
  }

  /* Showing Product List*/
  private fetchData(){
    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) =>{    
        this.products = res.json();
        // console.log('res',res.json())
      }
      
    )
  }

   /* Function for Deleting Product from Product List*/
  private deleteProduct(id){
    if(confirm("Are you sure to delete this item")){
      const url = `${"http://localhost:5555/products"}/${id}`;
      return this.http.delete(url,{headers:this.header}).toPromise().
      then(()=>{
        this.fetchData();
      })
    }
  }

}
