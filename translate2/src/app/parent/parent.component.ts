import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public value:string = "Hello World!"
  @ViewChild(ChildComponent) child;
  constructor() { }
  public childdata:string;
  ngOnInit() {
  }

  searchEnterpriseData(event){
    this.childdata = event;
  }

  // ngAfterViewInit() {
  //   this.childData = this.child.childData
  //   console.log(this.childData,'childdata')
  // }
}
