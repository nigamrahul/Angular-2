import { Component } from '@angular/core';
// import { ViewContainerRef } from '@angular/core';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//   constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
//     this.toastr.setRootViewContainerRef(vcr);
//  }
modalIndex:number;
deletedItem:string;
constructor(public toasty: ToastyService,public toastyConfig: ToastyConfig) {
  this.toastyConfig.theme='bootstrap';
}

private addToast = (title,msg) => {
  // Just add Toast with title only 
  this.toasty.warning({
      title: title,
      msg: msg,
      showClose: true,
      theme: "bootstrap"
  });
}
  
  items   = ["Javascript","jQuery","Angular","React"]
  newItems = "";
  
  /* Function for Adding Item to the List*/
  pushItems(){
    if(this.newItems != ""){
      this.items.push(this.newItems);
      this.newItems = "";
    }else{
      this.addToast('Warning','Please add some item !');
      // this.toastr.success('Warning','Please add some item !');
    }
  }
 
   /* Function for Adding Item to the List*/

  removeItems(index,i){
    // if(confirm('Are You Sure to Delete this item !'))
    this.modalIndex = index;
    this.deletedItem = i
  }
  clickModalOk(event){
    // console.log(event.target.attributes.id);
    this.items.splice(this.modalIndex ,1);
  }
  
}
